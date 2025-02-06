import { create } from 'zustand';

interface EditableObject {
  [key: string]: any;
}

interface ModelState {
  objectToEdit: EditableObject;
  setObjectToEdit: (data: EditableObject) => void;
}

export const useObjectToEdit = create<ModelState>((set) => ({
  objectToEdit: {},
  setObjectToEdit: (data) => set({ objectToEdit: data }),
}));
