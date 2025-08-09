import { render, screen } from '@testing-library/react';
import ImportPage from './ImportPage';
import useImportStore from '../store/importStore';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';

// Mock child components
vi.mock('../components/specific/import/SourceSelect', () => ({
  default: () => <div>SourceSelect Mock</div>,
}));
vi.mock('../components/specific/import/MapFields', () => ({
  default: () => <div>MapFields Mock</div>,
}));
vi.mock('../components/specific/import/Validate', () => ({
  default: () => <div>Validate Mock</div>,
}));
vi.mock('../components/specific/import/RunImport', () => ({
  default: () => <div>RunImport Mock</div>,
}));
vi.mock('../components/specific/import/Dedupe', () => ({
  default: () => <div>Dedupe Mock</div>,
}));
vi.mock('../components/specific/import/Done', () => ({
  default: () => <div>Done Mock</div>,
}));

describe('ImportPage', () => {
  const originalState = useImportStore.getState();
  beforeEach(() => {
    useImportStore.setState(originalState, true);
  });

  it('renders the SourceSelect component by default', () => {
    render(<ImportPage />);
    expect(screen.getByText('Import Tracks and Metadata')).toBeInTheDocument();
    expect(screen.getByText('SourceSelect Mock')).toBeInTheDocument();
  });

  it('renders the MapFields component when step is MapFields', () => {
    act(() => {
      useImportStore.getState().setStep('MapFields');
    });
    render(<ImportPage />);
    expect(screen.getByText('MapFields Mock')).toBeInTheDocument();
  });

  it('renders the Validate component when step is Validate', () => {
    act(() => {
      useImportStore.getState().setStep('Validate');
    });
    render(<ImportPage />);
    expect(screen.getByText('Validate Mock')).toBeInTheDocument();
  });

  it('renders the RunImport component when step is RunImport', () => {
    act(() => {
      useImportStore.getState().setStep('RunImport');
    });
    render(<ImportPage />);
    expect(screen.getByText('RunImport Mock')).toBeInTheDocument();
  });

  it('renders the Dedupe component when step is Dedupe', () => {
    act(() => {
      useImportStore.getState().setStep('Dedupe');
    });
    render(<ImportPage />);
    expect(screen.getByText('Dedupe Mock')).toBeInTheDocument();
  });

  it('renders the Done component when step is Done', () => {
    act(() => {
      useImportStore.getState().setStep('Done');
    });
    render(<ImportPage />);
    expect(screen.getByText('Done Mock')).toBeInTheDocument();
  });
});
