import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ADDComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path:'add',component:ADDComponent
  },
  {
    path:'delete',component:DeleteComponent
  },
  {
    path:'show',component:ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
