import { render, screen, fireEvent } from '@testing-library/react';
import ISRCManagerPage from './ISRCManagerPage';
import useIsrcStore from '../store/isrcStore';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the ISRCTable component
vi.mock('../components/specific/ISRCTable', () => ({
  default: () => <div>ISRCTable Mock</div>,
}));

describe('ISRCManagerPage', () => {
  const originalState = useIsrcStore.getState();
  beforeEach(() => {
    useIsrcStore.setState(originalState);
  });

  it('renders the ModeSelect view by default', () => {
    render(<ISRCManagerPage />);
    expect(screen.getByText('ISRC Manager')).toBeInTheDocument();
    expect(screen.getByText('Generate ISRCs')).toBeInTheDocument();
    expect(screen.getByText('Import ISRCs')).toBeInTheDocument();
  });

  it('transitions to Assign mode when "Generate ISRCs" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Generate ISRCs'));
    expect(screen.getByText('ISRCTable Mock')).toBeInTheDocument();
    expect(screen.getByText('Validate')).toBeInTheDocument();
  });

  it('transitions to Assign mode when "Import ISRCs" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Import ISRCs'));
    expect(screen.getByText('ISRCTable Mock')).toBeInTheDocument();
    expect(screen.getByText('Validate')).toBeInTheDocument();
  });

  it('transitions to Validate mode when "Validate" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Generate ISRCs')); // to get to Assign mode
    fireEvent.click(screen.getByText('Validate'));
    expect(screen.getByText('Validation results will be shown here.')).toBeInTheDocument();
  });

  it('transitions to Export mode when "Export" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Generate ISRCs')); // Assign
    fireEvent.click(screen.getByText('Validate')); // Validate
    fireEvent.click(screen.getByText('Export')); // Export
    expect(screen.getByText('Export options will be shown here.')).toBeInTheDocument();
  });

  it('transitions to Done mode when "Done" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Generate ISRCs')); // Assign
    fireEvent.click(screen.getByText('Validate')); // Validate
    fireEvent.click(screen.getByText('Export')); // Export
    fireEvent.click(screen.getByText('Done')); // Done
    expect(screen.getByText('ISRC assignment process is complete.')).toBeInTheDocument();
  });

  it('resets the state when "Start Over" is clicked', () => {
    render(<ISRCManagerPage />);
    fireEvent.click(screen.getByText('Generate ISRCs')); // Assign
    fireEvent.click(screen.getByText('Validate')); // Validate
    fireEvent.click(screen.getByText('Export')); // Export
    fireEvent.click(screen.getByText('Done')); // Done
    fireEvent.click(screen.getByText('Start Over'));
    expect(screen.getByText('Generate ISRCs')).toBeInTheDocument();
    expect(screen.getByText('Import ISRCs')).toBeInTheDocument();
  });
});
