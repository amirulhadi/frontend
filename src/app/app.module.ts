import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListViewComponent } from './pages/user-list-view/user-list-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { ModalPopupComponent } from './pages/modal-popup/modal-popup.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateModalPopupComponent } from './pages/update-modal-popup/update-modal-popup.component';
import { DeleteModalPopupComponent } from './pages/delete-modal-popup/delete-modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListViewComponent,
    NewUserComponent,
    ModalPopupComponent,
    ShowDetailsComponent,
    UpdateModalPopupComponent,
    DeleteModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
