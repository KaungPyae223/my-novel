import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage } from "zustand/middleware";

type AccountData = {
  id: number;
  full_name: string | null;
  username: string | null;
  email: string | null;
  profile_image: string | null;
};

type InitialState = {
  account: AccountData;
  token: string | null;
};

type Action = {
  setAccount: (account: AccountData["account"]) => void;
  setToken: (token: string) => void;
  logout: () => void;
};

const initialState: InitialState = {
  account: {
    id: 0,
    full_name: null,
    username: null,
    email: null,
    profile_image: null,
  },
  token: null,
};

const useAccountStore = create<InitialState & Action>()(
  persist(
    immer((set) => ({
      ...initialState,
      setAccount: (account) => set({ account }),
      setToken: (token) => set({ token }),
      logout: () => set({ ...initialState }),
    })),
    {
      name: "account-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAccountStore;
