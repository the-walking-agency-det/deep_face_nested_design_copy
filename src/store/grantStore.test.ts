import useGrantStore from './grantStore';
import { act } from '@testing-library/react';

describe('useGrantStore', () => {
  beforeEach(() => {
    act(() => {
      useGrantStore.getState().reset();
    });
  });

  it('should have the correct initial state', () => {
    const { getState } = useGrantStore;
    expect(getState().state).toBe('FillForm');
    expect(getState().form).toEqual({});
    expect(getState().attachments).toEqual([]);
    expect(getState().status).toEqual({
      submitted: false,
      submissionDate: null,
      status: 'Not Submitted',
    });
  });

  it('should set the state', () => {
    act(() => {
      useGrantStore.getState().setState('Attachments');
    });
    expect(useGrantStore.getState().state).toBe('Attachments');
  });

  it('should set the form', () => {
    const form = { name: 'Test Grant' };
    act(() => {
      useGrantStore.getState().setForm(form);
    });
    expect(useGrantStore.getState().form).toEqual(form);
  });

  it('should add an attachment', () => {
    const attachment = { id: '1', file: new File([''], 'test.txt') };
    act(() => {
      useGrantStore.getState().addAttachment(attachment);
    });
    expect(useGrantStore.getState().attachments).toEqual([attachment]);
  });

  it('should remove an attachment', () => {
    const attachment = { id: '1', file: new File([''], 'test.txt') };
    act(() => {
      useGrantStore.getState().addAttachment(attachment);
    });
    act(() => {
      useGrantStore.getState().removeAttachment('1');
    });
    expect(useGrantStore.getState().attachments).toEqual([]);
  });

  it('should set the status', () => {
    const status = { submitted: true, submissionDate: new Date(), status: 'Submitted' };
    act(() => {
      useGrantStore.getState().setStatus(status);
    });
    expect(useGrantStore.getState().status).toEqual(status);
  });

  it('should reset the store', () => {
    act(() => {
      useGrantStore.getState().setState('Attachments');
      useGrantStore.getState().setForm({ name: 'Test Grant' });
      useGrantStore.getState().addAttachment({ id: '1', file: new File([''], 'test.txt') });
      useGrantStore.getState().setStatus({ submitted: true });
    });

    act(() => {
        useGrantStore.getState().reset();
    });

    const state = useGrantStore.getState();
    expect(state.state).toBe('FillForm');
    expect(state.form).toEqual({});
    expect(state.attachments).toEqual([]);
    expect(state.status).toEqual({
        submitted: false,
        submissionDate: null,
        status: 'Not Submitted',
    });
    });
});
