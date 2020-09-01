import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-modal-popup',
  templateUrl: './update-modal-popup.component.html',
  styleUrls: ['./update-modal-popup.component.scss']
})
export class UpdateModalPopupComponent implements OnInit {

  isModalActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
