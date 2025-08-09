import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ChapterData = {
  id: string | null;
  chapterName: string;
  status: "published" | "draft" | "scheduled";
  summary: string | null;
  content: string;
  scheduledDate: Date | null;
  scheduledTime: string | null;
};

type Action = {
  setChapterData: (chapterData: ChapterData) => void;
  resetChapterData: () => void;
  contentGrammarFix: (content: string) => void;
};

type InitialState = {
  chapterData: ChapterData;
};

const ChapterData: ChapterData = {
  id: null,
  chapterName: "",
  status: "draft",
  summary: "",
  content: "",
  scheduledDate: new Date(),
  scheduledTime: "",
};

const useStoreChapter = create<InitialState & Action>()(
  immer((set) => ({
    chapterData: ChapterData,
    setChapterData: (chapterData: ChapterData) => set({ chapterData }),
    resetChapterData: () => set({ chapterData: ChapterData }),
    contentGrammarFix: (content: string) =>
      set((state) => ({ chapterData: { ...state.chapterData, content } })),
  }))
);

export default useStoreChapter;
