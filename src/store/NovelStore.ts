import { create } from "zustand";

const useStoreNovel = create((set) => ({
  novelData: {
    title: "",
    description: "",
    genre: "",
    synopsis: "",
    tags: "",
    status: "",
    coverImage: "",
  },
  setNovelData: (novelData: any) => set({ novelData }),
  resetNovelData: () =>
    set({
      novelData: {
        title: "",
        description: "",
        genre: "",
        synopsis: "",
        tags: "",
        status: "",
        coverImage: "",
      },
    }),
}));

export default useStoreNovel;
