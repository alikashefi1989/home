// custom
import { UserEntity } from "./user.entity";

export interface DataOfStore {
    darkMode: boolean;
    user: UserEntity | null;
};

export interface ActionOfStore {
    setDarkMode: (darkMode: boolean) => void;
    login: (user: UserEntity) => void;
    logout: () => void;
};

export type Store = DataOfStore & ActionOfStore;