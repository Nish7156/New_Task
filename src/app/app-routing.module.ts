import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const AppRoutes : Routes = [
  {path: 'contact',component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent}
  
] 

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
