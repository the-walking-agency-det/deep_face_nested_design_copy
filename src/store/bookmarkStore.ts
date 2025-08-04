import create from 'zustand';
import { persist } from 'zustand/middleware';

interface BookmarkState {
  bookmarkedIds: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkedIds: [],
      addBookmark: (id) => set((state) => ({ bookmarkedIds: [...state.bookmarkedIds, id] })),
      removeBookmark: (id) =>
        set((state) => ({ bookmarkedIds: state.bookmarkedIds.filter((bookmarkId) => bookmarkId !== id) })),
      isBookmarked: (id) => get().bookmarkedIds.includes(id),
    }),
    {
      name: 'bookmark-storage', // name of the item in the storage (must be unique)
    }
  )
);