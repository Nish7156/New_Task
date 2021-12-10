import { Injectable } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  myData = [
    {
      id: 1,
      firstName: 'abc',
      lastName: 'ef',
      email: 'admin@12.com',
      password: 'ymtyuhut',
      phone:'1234567890'
    },
    {
      id: 2,
      firstName: 'xyz',
      lastName: 'ef',
      email: 'admin@12.com',
      password: 'ymtyuhut',
      phone:'1234567890'
    },
  ];


  public getUsers(): any {
    const myDataObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.users);
           }, 1000);
    });

    return myDataObservable;
}
  users(users: any) {
    throw new Error('Method not implemented.');
  }
  constructor() { }
}
