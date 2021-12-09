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
 

id:any;
  firstName: any;
  user: any;
  constructor(private userService: UserService , public dialog: MatDialog,public dialogRef: MatDialogRef<PopComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.user = data;
    this.id = data.id;
    
  }
    ngOnInit(): void {
       
    }



    deleteRow(id){
        this.dialogRef.close({event: 'close', data: this.id});
    }

    close() {
      this.dialog.closeAll();
  }
 
    
}
