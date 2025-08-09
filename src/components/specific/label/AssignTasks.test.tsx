import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AssignTasks from './AssignTasks';
import { useLabelStore } from '../../../store/labelStore';

describe('AssignTasks', () => {
  const transitionTo = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    useLabelStore.setState({
      transitionTo,
      selectedArtistId: 'artist-1',
    });
  });

  it('renders the form with the artist ID', () => {
    render(<AssignTasks />);
    expect(screen.getByText('Assign Task for Artist artist-1')).toBeInTheDocument();
    expect(screen.getByLabelText('Task Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Assignee')).toBeInTheDocument();
    expect(screen.getByLabelText('Due Date')).toBeInTheDocument();
  });

  it('calls transitionTo when the back button is clicked', () => {
    render(<AssignTasks />);
    fireEvent.click(screen.getByText('← Back'));
    expect(transitionTo).toHaveBeenCalledWith('PipelineView');
  });

  it('calls transitionTo when the "Assign Task" button is clicked', () => {
    render(<AssignTasks />);
    fireEvent.click(screen.getByText('Assign Task'));
    expect(transitionTo).toHaveBeenCalledWith('PipelineView');
  });
});
