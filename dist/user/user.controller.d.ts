import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
}
