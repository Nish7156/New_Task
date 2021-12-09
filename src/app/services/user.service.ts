import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteUser(id: any) {
      throw new Error('Method not implemented.');
  }

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'abc',
      lastName: 'ef',
      email: 'admin@12.com',
      password: 'ymtyuhut',
      gender:'male'
    },
    {
      id: 2,
      firstName: 'xyz',
      lastName: 'car',
      email: 'admin@12.com',
      password: 'adyktkytmin',
      gender:'female'
    },
    {
      id: 3,
      firstName: 'abc',
      lastName: 'ef',
      email: 'admin@12.com',
      password: 'ymtyuhut',
      gender:'male'
    },
    {
      id: 4,
      firstName: 'xyz',
      lastName: 'car',
      email: 'admin@12.com',
      password: 'adyktkytmin',
      gender:'female'
    },
    {
      id: 5,
      firstName: 'abc',
      lastName: 'ef',
      email: 'admin@12.com',
      password: 'ymtyuhut',
      gender:'male'
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  

}
