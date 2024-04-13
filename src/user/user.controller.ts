import { AuthGuard } from 'src/guards/auth.guard';
import { UserService } from './user.service';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe, UseInterceptors,UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.tdo";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.tdo";
import { LogInterceptor } from 'src/interceptores/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@Roles(Role.Admin)
@UseGuards(ThrottlerGuard,AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
    
    constructor(private readonly UserService: UserService) {}
   
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.UserService.create(data);
    }

    @Get()
    async list(){
        return this.UserService.list()
    }

    @Get(':id')
    async show(@ParamId('id', ParseIntPipe) id: number) {
        console.log({id})
        return this.UserService.show(id);
    }
    
    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.UserService.update(id, data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.UserService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.UserService.delete(id);
    }
}

