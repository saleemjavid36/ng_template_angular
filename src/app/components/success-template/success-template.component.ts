import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-template',
  templateUrl: './success-template.component.html',
  styleUrls: ['./success-template.component.css']
})
export class SuccessTemplateComponent implements OnInit {
  @Output() logout = new EventEmitter<any>();
  _isNotLoggedIn:boolean=true
  constructor() { }

  logoutEvent(){
    this.logout.emit(this._isNotLoggedIn)
  }
  ngOnInit(): void {
  }

}
