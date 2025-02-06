import { create } from 'zustand';

interface FieldFilterState {
  FilteredData: Record<string, string>; // Object with key-value pairs
  setFilteredData: (value: Record<string, string>) => void; // Expecting an object
}

export const useFieldFilterState = create<FieldFilterState>(
  (set) => ({
    FilteredData: {},
    setFilteredData: (value) => set(() => ({ FilteredData: value })),
  }),
);
