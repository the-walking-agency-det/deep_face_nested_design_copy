import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PersonalizedState = 'UploadFanList' | 'GenerateVariants' | 'BatchRender' | 'Distribute' | 'Track';

interface Fan {
  name: string;
  email: string;
}

interface Variant {
  fan: Fan;
  coverUrl: string;
  metadata: any;
}

interface PersonalizedStore {
  state: PersonalizedState;
  fans: Fan[];
  variants: Variant[];
  setState: (state: PersonalizedState) => void;
  setFans: (fans: Fan[]) => void;
  setVariants: (variants: Variant[]) => void;
  reset: () => void;
}

const initialState = {
  state: 'UploadFanList' as PersonalizedState,
  fans: [],
  variants: [],
};

const usePersonalizedStore = create<PersonalizedStore>()(
  persist(
    (set) => ({
      ...initialState,
      setState: (state) => set({ state }),
      setFans: (fans) => set({ fans }),
      setVariants: (variants) => set({ variants }),
      reset: () => set(initialState),
    }),
    {
      name: 'indii.personalized.v1',
    }
  )
);

export default usePersonalizedStore;
