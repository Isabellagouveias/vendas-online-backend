import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './interfaces/dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: createUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
