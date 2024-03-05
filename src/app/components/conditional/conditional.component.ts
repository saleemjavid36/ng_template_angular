import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {
  email?: string;
  password?: string;
  _isNotLoggedIn = true;
  onSubmit() {
    this.email =""
    this.password=""
    this._isNotLoggedIn = false;
  }
  logout(e:any){    
    this._isNotLoggedIn = e;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
