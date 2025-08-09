import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Reports from './Reports';
import { useLabelStore } from '../../../store/labelStore';

describe('Reports', () => {
  const transitionTo = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    useLabelStore.setState({
      transitionTo,
      selectedArtistId: 'artist-1',
    });
  });

  it('renders the form with the artist ID', () => {
    render(<Reports />);
    expect(screen.getByText('Export Report for Artist artist-1')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
    expect(screen.getByLabelText('End Date')).toBeInTheDocument();
  });

  it('calls transitionTo when the back button is clicked', () => {
    render(<Reports />);
    fireEvent.click(screen.getByText('← Back'));
    expect(transitionTo).toHaveBeenCalledWith('PipelineView');
  });

  it('calls transitionTo when the "Export Report" button is clicked', () => {
    render(<Reports />);
    fireEvent.click(screen.getByText('Export Report'));
    expect(transitionTo).toHaveBeenCalledWith('PipelineView');
  });
});
