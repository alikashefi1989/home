// module
import { create } from "zustand";
// custom
import { Store } from "../models/store";
import { UserEntity } from "../models/entities/user.entity";

const useStore = create<Store, any>((set, get) => (
    {
        darkMode: false,
        user: null,
        setDarkMode: (darkMode: boolean) => {
            const store: Store = get();
            set({ ...store, darkMode });
        },
        login: (user: UserEntity) => {
            const store: Store = get();
            set({ ...store, user });
            if (window && window.document) {
                window.document.cookie = `isLoggedIn=true; path=/; max-age=31536000`;
            }
        },
        logout: () => {
            const store: Store = get();
            set({ ...store, user: null });
            if (window && window.document) {
                window.document.cookie = `isLoggedIn=false; path=/; max-age=31536000`;
            }
        }
    }
));

export default useStore;