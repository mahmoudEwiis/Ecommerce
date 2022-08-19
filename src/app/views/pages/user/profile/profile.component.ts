import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!:any

  constructor(
    private _userService:UserService

  ) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe((user)=>{
      this.profile = user
      console.log(this.profile )
  })
  }


}
