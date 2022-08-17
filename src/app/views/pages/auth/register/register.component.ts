import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
