import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user-list.service'
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private userListService: UserListService, private route: ActivatedRoute) {}

  details: any[];
  id: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log('params:' ,params);
        this.userListService.getUserDetails(params.id).subscribe((details: any[]) => {
          this.details = details;
          console.log('details: ', this.details)
        })
      }
    )
  }

  showModal: boolean = false;
  selectItem() {
    this.showModal = true;
 }

  updateExistedUser(username: String, email: String, phoneno: String, skillset: String, hobby: String){
    this.userListService.updateUser(this.id, username, email, phoneno, skillset, hobby).subscribe((response: any) => {
      console.log(response);
    });
  }

}
