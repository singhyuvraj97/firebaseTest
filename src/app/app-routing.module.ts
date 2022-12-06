import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { UserdispComponent } from './userdisp/userdisp.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path: '',
    component: UserdispComponent
  },
  {
    path: 'userform',
    component: UserformComponent
  },
  {
    path: 'adddata',
    component: AdddataComponent
  },
  {
    path: 'updatedata/:userEmail',
    component: UpdatedataComponent
  },
  {
    path: 'userdisp',
    component: UserdispComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
