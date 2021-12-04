import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {path: '', component: CustomerListComponent },

  {path: 'demo', component: DemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }


