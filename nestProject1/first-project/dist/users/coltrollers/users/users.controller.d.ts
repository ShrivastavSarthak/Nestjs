import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): {
        username: string;
        email: string;
    }[];
    createUser(userData: CreateUserDto): {};
    getUserById(id: number): {
        id: Number;
        username: string;
        email: string;
    };
}
