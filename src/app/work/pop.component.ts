import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
  
user:any;
  constructor(private userService: UserService, public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.user = data;
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    deleteRow(user){
        console.log("deleteRow",user);
    }



    close() {
      this.dialog.closeAll();
  }
    

}
