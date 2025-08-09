import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GrantState = 'FillForm' | 'Attachments' | 'ValidateChecklist' | 'ExportBundle' | 'TrackStatus';

interface GrantForm {
  [key: string]: any;
}

interface GrantAttachment {
  id: string;
  file: File;
}

interface GrantStatus {
  submitted: boolean;
  submissionDate: Date | null;
  status: string;
}

interface GrantStore {
  state: GrantState;
  form: GrantForm;
  attachments: GrantAttachment[];
  status: GrantStatus;
  setState: (state: GrantState) => void;
  setForm: (form: GrantForm) => void;
  addAttachment: (attachment: GrantAttachment) => void;
  removeAttachment: (attachmentId: string) => void;
  setStatus: (status: Partial<GrantStatus>) => void;
  reset: () => void;
}

const initialState = {
  state: 'FillForm' as GrantState,
  form: {},
  attachments: [],
  status: {
    submitted: false,
    submissionDate: null,
    status: 'Not Submitted',
  },
};

const useGrantStore = create<GrantStore>()(
  persist(
    (set) => ({
      ...initialState,
      setState: (state) => set({ state }),
      setForm: (form) => set({ form }),
      addAttachment: (attachment) => set((s) => ({ attachments: [...s.attachments, attachment] })),
      removeAttachment: (attachmentId) =>
        set((s) => ({ attachments: s.attachments.filter((a) => a.id !== attachmentId) })),
      setStatus: (status) => set((s) => ({ status: { ...s.status, ...status } })),
      reset: () => set(initialState),
    }),
    {
      name: 'indii.grants.v1',
    }
  )
);

export default useGrantStore;
