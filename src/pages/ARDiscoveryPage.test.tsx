import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ARDiscoveryPage from './ARDiscoveryPage';
import { useARDiscoverStore } from '../store/arDiscoverStore';
import React from 'react';

// Mock the store
vi.mock('../store/arDiscoverStore');

const mockStore = {
  filters: { growth: '', saves: '', shares: '' },
  prospects: [
    { id: '1', artistName: 'Artist One', trackTitle: 'Track A', imageUrl: 'https://via.placeholder.com/150', reasons: ['High Growth'] },
  ],
  savedProspects: [],
  selectedProspect: null,
  loading: false,
  highlightUrl: null,
  setFilters: vi.fn(),
  searchProspects: vi.fn(),
  exportProspects: vi.fn(),
  selectProspect: vi.fn(),
  addToSaved: vi.fn(),
  getHighlight: vi.fn(),
};

describe('ARDiscoveryPage', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    (useARDiscoverStore as any).mockReturnValue(mockStore);
  });

  it('renders the page title', () => {
    render(<ARDiscoveryPage />);
    expect(screen.getByText('A&R Discovery')).toBeInTheDocument();
  });

  it('calls searchProspects on initial render', () => {
    render(<ARDiscoveryPage />);
    expect(mockStore.searchProspects).toHaveBeenCalledTimes(1);
  });

  it('updates filters on input change', () => {
    render(<ARDiscoveryPage />);
    const growthInput = screen.getByLabelText('Growth Rate');
    fireEvent.change(growthInput, { target: { name: 'growth', value: '90' } });
    expect(mockStore.setFilters).toHaveBeenCalledWith({ growth: '90' });
  });

  it('calls searchProspects when apply button is clicked', () => {
    render(<ARDiscoveryPage />);
    const applyButton = screen.getByText('Apply');
    fireEvent.click(applyButton);
    // The first call is from useEffect
    expect(mockStore.searchProspects).toHaveBeenCalledTimes(2);
  });

  it('renders the results grid with prospects', () => {
    render(<ARDiscoveryPage />);
    expect(screen.getByText('Track A')).toBeInTheDocument();
  });

  it('calls selectProspect when a prospect is clicked', () => {
    render(<ARDiscoveryPage />);
    const prospectCard = screen.getByText('Track A');
    fireEvent.click(prospectCard);
    expect(mockStore.selectProspect).toHaveBeenCalledWith(mockStore.prospects[0]);
  });

  it('shows the preview panel when a prospect is selected', () => {
    (useARDiscoverStore as any).mockReturnValue({
      ...mockStore,
      selectedProspect: mockStore.prospects[0],
    });
    render(<ARDiscoveryPage />);
    expect(screen.getByText('Preview')).toBeInTheDocument();
    expect(screen.getByText('Save Prospect')).toBeInTheDocument();
  });

  it('calls addToSaved when save button is clicked in preview', () => {
    (useARDiscoverStore as any).mockReturnValue({
      ...mockStore,
      selectedProspect: mockStore.prospects[0],
    });
    render(<ARDiscoveryPage />);
    const saveButton = screen.getByText('Save Prospect');
    fireEvent.click(saveButton);
    expect(mockStore.addToSaved).toHaveBeenCalledWith(mockStore.prospects[0]);
  });

  it('calls exportProspects when export button is clicked', () => {
    (useARDiscoverStore as any).mockReturnValue({
        ...mockStore,
        savedProspects: [mockStore.prospects[0]],
      });
    render(<ARDiscoveryPage />);
    const exportButton = screen.getByText('Export List (1)');
    fireEvent.click(exportButton);
    expect(mockStore.exportProspects).toHaveBeenCalled();
  });
});
