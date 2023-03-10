import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/constants/IUserRegister';
import { passwordMatchValidator } from 'src/app/shared/validators/password_Match_Validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm!:FormGroup;
  returnURL:string = ''
  submitted:boolean = false;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private activactedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    },{
      validators: passwordMatchValidator('password', 'confirmPassword')
    });

    this.returnURL = this.activactedRoute.snapshot.queryParams.returnURL;
  }

  // fc Form Controls
  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.submitted =true;
    if (this.registerForm.invalid) {
      return;
    } else {
      // fv Form Value
      const fv = this.registerForm.value;
      const _registerUser: IUserRegister = {
        name: fv.name,
        email: fv.email,
        address: fv.address,
        password: fv.password,
        confirmPassword: fv.confirmPassword
      }
      this.userService.registerUser(_registerUser)
      .subscribe({
        next: (newlyRegisterUser) => {
          this.router.navigateByUrl(this.returnURL);
          alert(`${newlyRegisterUser.user.name} registered Successfully`);
        },
        error: (err: any) => {
          alert(`${err.message}`);
        }
      });
    }
  }
}
