import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import { getAllUsers, getUsersByName } from "../api/users.api";


interface UsersState {
    users: IUser[];
    findUserByName: (name: string) => Promise<void>;
    findAllUsers: () => Promise<void>;
}

export const useUsersStore = create<UsersState>((set) => ({
    users: [],
    findAllUsers: async () => {
        try {
            const users = await getAllUsers();
            set({users});
        } catch(e) {
            console.log(e);
        }
        
    },
    findUserByName: async (name: string) => {
        try {
            const users = await getUsersByName(name);
            set({users});
        } catch(e) {
            console.log(e);
        }
        
    }
}))