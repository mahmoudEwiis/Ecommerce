import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from './services/user.service';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    profile:any
    constructor(
        private _auth: AuthService,
        private _userService:UserService
    ) { }
    
    logout(event:any){
        event.preventDefault();
        this._auth.logout();
    }
    ngOnInit(): void {
        this._userService.getUser().subscribe((user)=>{
            this.profile = user
        })

    }

}