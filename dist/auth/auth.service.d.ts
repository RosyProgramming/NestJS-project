import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    private readonly userService;
    private issuer;
    private audience;
    constructor(jwtService: JwtService, prisma: PrismaService, userService: UserService);
    createToken(user: User): {
        accessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    forget(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        accessToken: string;
    }>;
    register(data: AuthRegisterDTO): Promise<{
        accessToken: string;
    }>;
}
