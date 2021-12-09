import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

 
  i: any;
  users: any;
  m: any;
  constructor(private userService: UserService , public dialog: MatDialog,public dialogRef: MatDialogRef<PopupComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.m = data;
    this.i = data.i;
  }
    ngOnInit(): void {
       
    }



    deleteRow(obj){
        this.dialogRef.close({event: 'close', data: this.i});
    }

    close() {
      this.dialog.closeAll();
  }
 
}
