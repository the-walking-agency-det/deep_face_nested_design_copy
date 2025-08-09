import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LabelDashboardPage from './LabelDashboardPage';
import { useLabelStore } from '../store/labelStore';

// Mock the child components
vi.mock('../components/specific/label/ArtistList', () => ({
  default: () => <div>ArtistList Mock</div>,
}));
vi.mock('../components/specific/label/PipelineView', () => ({
  default: () => <div>PipelineView Mock</div>,
}));
vi.mock('../components/specific/label/AssignTasks', () => ({
  default: () => <div>AssignTasks Mock</div>,
}));
vi.mock('../components/specific/label/Reports', () => ({
  default: () => <div>Reports Mock</div>,
}));

describe('LabelDashboardPage', () => {
  beforeEach(() => {
    // Reset the store before each test
    useLabelStore.setState({
      currentState: 'ArtistList',
      selectedArtistId: null,
    });
  });

  it('renders ArtistList view by default', () => {
    render(<LabelDashboardPage />);
    expect(screen.getByText('ArtistList Mock')).toBeInTheDocument();
  });

  it('renders PipelineView when state is PipelineView', () => {
    useLabelStore.setState({ currentState: 'PipelineView' });
    render(<LabelDashboardPage />);
    expect(screen.getByText('PipelineView Mock')).toBeInTheDocument();
  });

  it('renders AssignTasks view when state is AssignTasks', () => {
    useLabelStore.setState({ currentState: 'AssignTasks' });
    render(<LabelDashboardPage />);
    expect(screen.getByText('AssignTasks Mock')).toBeInTheDocument();
  });

  it('renders Reports view when state is Reports', () => {
    useLabelStore.setState({ currentState: 'Reports' });
    render(<LabelDashboardPage />);
    expect(screen.getByText('Reports Mock')).toBeInTheDocument();
  });
});
