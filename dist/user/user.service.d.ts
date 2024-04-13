import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.tdo";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.tdo";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ email, name, password }: CreateUserDTO): Promise<import(".prisma/client").User>;
    list(): Promise<import(".prisma/client").User[]>;
    show(id: number): Promise<import(".prisma/client").User>;
    update(id: number, { email, name, password, birthAt, role }: UpdatePutUserDTO): Promise<import(".prisma/client").User>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDTO): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<import(".prisma/client").User>;
    exists(id: number): Promise<void>;
}
