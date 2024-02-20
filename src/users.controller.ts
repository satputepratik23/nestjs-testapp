import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto";

var USERS = [];

@Controller('/users')
export class UsersController {

    @Post()
    addUser(@Body() createUserDto : CreateUserDTO) {
        USERS.push(createUserDto);
        return "User Added!";
    }

    @Get()
    getAllUsers() {
        return USERS;
    }

    @Get(':id') 
    getUserByUserID(@Param('id') id: number) {
        return USERS.find(user => user.id === +id);
    }
    
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto : CreateUserDTO) {
        const userIndex = USERS.findIndex(user => user.id === +id);
        if(!userIndex) {
            return;
        }
        USERS[userIndex] = updateUserDto;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        USERS = USERS.filter(user => user.id !== +id);    
    }

}