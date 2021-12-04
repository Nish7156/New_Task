import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { PopComponent } from './pop.component';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};
  gender:[];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  openDialog(user){
    this.dialog.open(PopComponent,{data:user});
  }

  ngOnInit() {

    this.users = this.getUsers();
    // console.log(this.users);
    // this.users.splice(5,1);
  }
  

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  deleteRow(x){
    console.log(x);
    this.users.forEach((user,index)=>{
      if(user.id==x){
        this.users.splice(index,1);
      }
    });
  }
}

