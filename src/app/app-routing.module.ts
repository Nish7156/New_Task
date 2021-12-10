import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HichartComponent } from './hichart/hichart.component';
import { StudentComponent } from './student/student.component';


const AppRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'hichart', component: HichartComponent},
  {path: 'student', component: StudentComponent},
  {path: '404',component: NotfoundComponent},




  {
    path: 'customers',
    loadChildren: () => import('./customer/customers.module').then(m => m.CustomersModule)
  },
  {path: '**', redirectTo: '/404'},

];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
