import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal-popup',
  templateUrl: './delete-modal-popup.component.html',
  styleUrls: ['./delete-modal-popup.component.scss']
})
export class DeleteModalPopupComponent implements OnInit {

  isModalActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
