import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CueSheetTable from './CueSheetTable';
import { Cue } from '../../utils/backend';

const mockCues: Cue[] = [
  { id: 'cue1', startTime: 10, endTime: 30, title: 'Opening Scene', artist: 'Composer A', role: 'Background' },
  { id: 'cue2', startTime: 45, endTime: 75, title: 'Chase Sequence', artist: 'Composer B', role: 'Vocal' },
];

describe('CueSheetTable', () => {
  it('should render the cue sheet data correctly', () => {
    const { getByText, getByDisplayValue } = render(
      <CueSheetTable cues={mockCues} onCueChange={() => {}} />
    );

    expect(getByText('Opening Scene')).toBeInTheDocument();
    expect(getByText('Chase Sequence')).toBeInTheDocument();
    expect(getByDisplayValue('Background')).toBeInTheDocument();
    expect(getByDisplayValue('Vocal')).toBeInTheDocument();
  });

  it('should call onCueChange when a role is edited', () => {
    const onCueChange = vi.fn();
    const { getAllByRole } = render(
      <CueSheetTable cues={mockCues} onCueChange={onCueChange} />
    );

    const roleInputs = getAllByRole('textbox');
    fireEvent.change(roleInputs[0], { target: { value: 'New Role' } });

    expect(onCueChange).toHaveBeenCalledWith('cue1', 'New Role');
  });
});
