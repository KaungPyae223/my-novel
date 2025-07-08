import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type NovelData = {
  title: string;
  description: string;
  genre: string;
  synopsis: string;
  tags: string;
  status: string;
  coverImage: any;
};

type Action = {
  setNovelData: (novelData: NovelData) => void;
  resetNovelData: () => void;
};

type InitialState = {
  novelData: NovelData;
};

const initialState: InitialState = {
  novelData: {
    title: "",
    description: "",
    genre: "",
    synopsis: "",
    tags: "",
    status: "",
    coverImage: "",
  },
};

const useStoreNovel = create<InitialState & Action>()(
  immer((set) => ({
    ...initialState,
    setNovelData: (novelData: NovelData) => set({ novelData }),
    resetNovelData: () => set({ novelData: initialState.novelData }),
  }))
);

export default useStoreNovel;
