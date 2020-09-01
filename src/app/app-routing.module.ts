import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListViewComponent } from './pages/user-list-view/user-list-view.component';
import { NewUserComponent }  from './pages/new-user/new-user.component'
import { ModalPopupComponent } from './pages/modal-popup/modal-popup.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';
import { UpdateModalPopupComponent } from './pages/update-modal-popup/update-modal-popup.component';
import { DeleteModalPopupComponent } from './pages/delete-modal-popup/delete-modal-popup.component';

const routes: Routes = [
  { path: '', redirectTo: 'userList', pathMatch: 'full' },
  { path: 'new-user', component: NewUserComponent},
  { path: 'userList', component: UserListViewComponent },
  // { path: 'userList/:id', component: UserListViewComponent },
  { path: 'modal-popup', component: ModalPopupComponent},
  { path: 'showDetails/:detailsId', component: ShowDetailsComponent},
  { path: 'update-modal-popup', component: UpdateModalPopupComponent},
  { path: 'delete-modal-popup', component: DeleteModalPopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
