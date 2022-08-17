import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  passwordVisible: boolean = false

  visibilityToggle(){
    if(this.passwordVisible == false)
    {
      this.passwordVisible = true
    }
    else{
      this.passwordVisible = false
    }
  }
  ngOnInit(): void {
  }

}
