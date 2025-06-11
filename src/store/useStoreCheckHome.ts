import { create } from "zustand";

const useStoreCheckHome = create((set) => ({
  activePage: "Home",
  setActivePage: (activePage: "Home" | "Library" | "Novel") => set({ activePage }),
}));

export default useStoreCheckHome;
