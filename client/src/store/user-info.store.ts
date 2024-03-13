import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";



interface UserInfoState {
    user: IUser | null;
    isPopupOpen: boolean;
    setUser: (user: IUser | null) => void;
}

export const useUserInfoStore = create<UserInfoState>((set) => ({
    user: null,
    isPopupOpen: false,
    setUser: (user) => set({user, isPopupOpen: !!user}),
}))