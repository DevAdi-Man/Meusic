import {create} from 'zustand'

interface Category {
  id: string;
  name: string;
  icons: { url: string }[];
}

interface CategoryState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const useCategory = create<CategoryState>((set)=>({
    categories:[],
    setCategories:(categories)=> set({categories}),
}))