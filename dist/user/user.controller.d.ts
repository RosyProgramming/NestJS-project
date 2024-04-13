import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.tdo";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.tdo";
export declare class UserController {
    create({ email, name, password }: CreateUserDTO): Promise<{
        email: string;
        name: string;
        password: string;
    }>;
    list(): Promise<{
        users: any[];
    }>;
    show(id: number): Promise<{
        users: {};
        id: number;
    }>;
    update({ email, name, password }: UpdatePutUserDTO, id: number): Promise<{
        method: string;
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    updatePartial({ email, name, password }: UpdatePatchUserDTO, id: number): Promise<{
        method: string;
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
