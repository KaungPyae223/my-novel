import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type NovelData = {
  id: number | null;
  title: string;
  description: string;
  genre: string;
  synopsis: string;
  tags: string;
  progress: "ongoing" | "complete" | null;
  status: string;
  coverImage: File | string | null;
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
    id: null,
    title: "",
    description: "",
    genre: "",
    synopsis: "",
    tags: "",
    progress: null,
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
