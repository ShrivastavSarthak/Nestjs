import { CreateUserType } from 'src/utils/types';
export declare class UsersService {
    private fakeUsers;
    fetchUsers(): {
        username: string;
        email: string;
    }[];
    createUser(userDetails: CreateUserType): number;
    fetchUserById(id: Number): {
        id: Number;
        username: string;
        email: string;
    };
}
