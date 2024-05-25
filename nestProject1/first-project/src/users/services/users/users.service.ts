import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Sarthak', email: 'sarthak@gmail.com' },
    { username: 'Sarthak', email: 'sarthak@gmail.com' },
    { username: 'Sarthak', email: 'sarthak@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    return this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: Number) {
    return { id, username: 'saku', email: 'saku@gmail.com' };
  }
}
