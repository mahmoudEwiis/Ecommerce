import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editUserFormGroup!: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) { }


  /*
    ------------------------------------
    ======== init edit UserForm ========
    ------------------------------------
  */
  initeditUserForm() {
    this.editUserFormGroup = this._formBuilder.group({
      name: [this.profile.name, Validators.required],
      email: [this.profile.email, [Validators.required, Validators.email]],
      role: [this.profile.role, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.editUserFormGroup.invalid) return;

    const newUser: any = {
      name: this.editUserForm.name.value,
      email: this.editUserForm.email.value,
      role: this.editUserForm.role.value,
    }
    console.log(newUser)
    this.closeEditModal()
    /*
    ------------------------------------
    =========== Api not Worked =========
    ------------------------------------
    */
    /*
      this._userService.updateUser(newUser).subscribe(
        (user) => {
        
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );
    */
  }
  get editUserForm() {
    return this.editUserFormGroup.controls;
  }

  /*
    ----------------------------------
    =========== Edit Modal ===========
    ----------------------------------
  */
  openEditModal(user: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {
    this._userService.getUser().subscribe((user) => {
      this.profile = user
      this.initeditUserForm();
    })
    this.initeditUserForm();

  }


}
