import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import {UserService} from '.././services/./user.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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


showMe: boolean = false;
edit : boolean = false;
submit: boolean = true;
  editUserForm: boolean;
  newUser: {};

  showAddUserForm() {
    this.submit = true;
    this.showMe = true;
    this.edit=false;
    
  }

  cancelNewUser() {
    this.newUser = {};
    this.showMe = false;
  }








  FormData = new FormGroup({
    firstName: new FormControl('Nishant'),
    lastName: new FormControl(''),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
      password: new FormControl(''),
    
    
    

  });


  show: boolean;

  
  onSubmit() {

    this.myData.push(this.FormData.value);
    // TODO: Use EventEmitter with form value
    console.warn(this.FormData.value);
    
  }
 



  onEdit(obj,id) {

    this.submit = false;
    this.edit=true;
    console.log(obj);
    this.FormData.patchValue(obj);
    this.FormData.get('id').setValue(obj.id);
     
  }
  
  
 

  constructor(public dialog: MatDialog) {}

  openDialog(m){
    const dialogRef =  this.dialog.open(PopupComponent,{data:m});
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.deleteRow(result.data);
      }
      
    });
  }
  deleteRow(x){
    this.myData.forEach((user,index)=>{
      if(user.id==x){
        this.myData.splice(index,1);
      }
    });

    
  }
  
  onUpdate(){
    console.log(this.FormData.value);
    this.myData.forEach((user,index)=>{
      if(user.id==this.FormData.value.id){
        this.myData[index]=this.FormData.value;
      }
    });
    this.FormData.reset();
    
  }

  ngOnInit(): void {
   
      
  }
  clicksub() {
    console.log(this.FormData.value);
    this.FormData.reset();
  }
  
  get email() {
    return this.FormData.get('email');
  }
  get phone() {
    return this.FormData.get('phone');
  }
  
  



  
}