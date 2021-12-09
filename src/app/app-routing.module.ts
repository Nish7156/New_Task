import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';


const AppRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: '404',component: NotfoundComponent},
 {path: '**', redirectTo: '/404'},



  {
    path: 'customers',
    loadChildren: () => import('./customer/customers.module').then(m => m.CustomersModule)
  },
  

];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
