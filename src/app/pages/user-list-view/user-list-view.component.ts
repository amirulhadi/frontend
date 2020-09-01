import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user-list.service'
import * as uuid from 'uuid'
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  
  lists: any[];
  details: any[];
  
  constructor(private userListService: UserListService, private route: ActivatedRoute, private router: Router) { }

  showModal: boolean = false;
  selectItem() {
    this.showModal = true;
 }
 
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log('params:' ,params);
        this.userListService.getUserDetails(params.id).subscribe((details: any[]) => {
          this.details = details;
        })
      }
    )
    this.userListService.getUserList().subscribe((lists: any[]) => {
      this.lists = lists
      console.log(lists)
      // console.log("test:", Object.entries(lists))
    })  
  }

  deleteExistedUser(id: String){
    this.userListService.deleteUser(id).subscribe((response: any) => {
      this.router.navigate(['/userList']);
      console.log(response);
    });
  }
  
}
