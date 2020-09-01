import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  isModalActive: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
