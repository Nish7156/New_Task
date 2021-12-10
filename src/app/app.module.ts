import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {ContactComponent} from '../app/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PopComponent } from './work/pop.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './contact/popup/popup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HichartComponent } from './hichart/hichart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    WorkComponent,
     PopComponent,
     PopupComponent,
     NotfoundComponent,
     HichartComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
