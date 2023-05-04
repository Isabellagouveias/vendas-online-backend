import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: createUserDto): Promise<User> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser() {
    return this.userService.getAllUser();
  }
}
