import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ArtistList from './ArtistList';
import { useLabelStore } from '../../../store/labelStore';
import * as backend from '../../../utils/backend';

// Mock the backend
vi.mock('../../../utils/backend');

const mockArtists = [
  { id: '1', name: 'Artist One' },
  { id: '2', name: 'Artist Two' },
];

describe('ArtistList', () => {
  const selectArtist = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    (backend.listArtists as vi.Mock).mockResolvedValue(mockArtists);
    useLabelStore.setState({
      selectArtist,
    });
  });

  it('fetches and renders a list of artists', async () => {
    render(<ArtistList />);
    expect(screen.getByText('Loading artists...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Artist One')).toBeInTheDocument();
      expect(screen.getByText('Artist Two')).toBeInTheDocument();
    });
  });

  it('calls selectArtist when an artist is clicked', async () => {
    render(<ArtistList />);
    await waitFor(() => {
      fireEvent.click(screen.getByText('Artist One'));
    });
    expect(selectArtist).toHaveBeenCalledWith('1');
  });
});
