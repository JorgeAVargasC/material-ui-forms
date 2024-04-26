import { create } from "zustand";

export type State = {
  mode: "light" | "dark";
  primaryColor:
    | "#3968DD"
    | "#0FB8CE"
    | "#21A663"
    | "#FF9900"
    | "#FF5154"
    | "#D269E6"
    | "#A548FF"
    | "#575EFD";
};

type Actions = {
  setMode: (mode: State["mode"]) => void;
  setPrimaryColor: (color: State["primaryColor"]) => void;
};

type Store = State & Actions;

export const useThemeStore = create<Store>((set) => ({
  mode: "light",
  primaryColor: "#3968DD",
  setMode: (mode) => set({ mode }),
  setPrimaryColor: (primaryColor) => set({ primaryColor }),
}));
