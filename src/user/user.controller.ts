import { UserService } from './user.service';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.tdo";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.tdo";
import { LogInterceptor } from 'src/interceptores/log.interceptor';

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
    async show(@Param('id', ParseIntPipe) id: number) {
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