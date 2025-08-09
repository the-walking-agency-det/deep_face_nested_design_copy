import { render, screen, fireEvent } from '@testing-library/react';
import ISRCTable from './ISRCTable';
import useIsrcStore from '../../store/isrcStore';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ISRCTable', () => {
  const originalState = useIsrcStore.getState();
  beforeEach(() => {
    useIsrcStore.setState(originalState);
  });

  it('renders the table with tracks from the store', () => {
    render(<ISRCTable />);
    expect(screen.getByText('Track A')).toBeInTheDocument();
    expect(screen.getByDisplayValue('US-S1Z-25-00001')).toBeInTheDocument();
  });

  it('calls updateTrackIsrc when an ISRC is changed', () => {
    const updateTrackIsrcSpy = vi.fn();
    useIsrcStore.setState({ updateTrackIsrc: updateTrackIsrcSpy });

    render(<ISRCTable />);
    const input = screen.getByDisplayValue('US-S1Z-25-00001');
    fireEvent.change(input, { target: { value: 'NEW-ISRC' } });
    expect(updateTrackIsrcSpy).toHaveBeenCalledWith('1', 'NEW-ISRC');
  });
});
