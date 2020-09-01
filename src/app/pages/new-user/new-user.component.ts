import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user-list.service'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
  }

  showModal: boolean = false;

  selectItem() {
    this.showModal = true;
 }

  createNewUser(username: String, email: String, phoneno: String, skillset: String, hobby: String){
    this.userListService.createUser(username, email, phoneno, skillset, hobby).subscribe((response: any) => {
      console.log(response);
    });
  }

}
