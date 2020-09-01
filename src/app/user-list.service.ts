import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private webReqService: WebRequestService) { }

  createUser(username: String, email: String, phoneno: String, skillset: String, hobby: String){
    return this.webReqService.post('listUser/userCreated', { username, email, phoneno, skillset, hobby })
  }

  getUserList(){
    return this.webReqService.get('listUser/retrieveAllUser')
  }

  getUserDetails(id: string){
    return this.webReqService.get(`listUser/userDetails/${id}`)
  }

  updateUser(id: String, username: String, email: String, phoneno: String, skillset: String, hobby: String){
    return this.webReqService.put(`listUser/userUpdate/${id}`, { username, email, phoneno, skillset, hobby })
  }

  deleteUser(id: String){
    return this.webReqService.delete(`listUser/deleteUser/${id}`, (''));
  }
}
