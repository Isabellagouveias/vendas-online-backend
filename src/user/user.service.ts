import { Injectable } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';

import { hash } from 'bcrypt';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: createUserDto): Promise<User> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    console.log(passwordHashed);

    return {
      ...createUserDto,
      id: 1,
    };
  }

  async getAllUser(): Promise<User[]> {
    return this.users;
  }
}
