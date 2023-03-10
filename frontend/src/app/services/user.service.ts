import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { IUserLogin } from '../shared/constants/IUserLogin';
import { IUserRegister } from '../shared/constants/IUserRegister';
import { LOGIN_URL, REGISTER_URL } from '../shared/constants/url';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http:HttpClient){
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(){
    return this.userSubject.value;
  }

  setUserToLocalStorage(user: User){
    localStorage.setItem('USER', JSON.stringify(user));
  }

  getUserFromLocalStorage(){
    const userJson = localStorage.getItem('USER');
    if(userJson){
      return JSON.parse(userJson);
    }else{
      return new User();
    }
  }

  registerUser(userRegister:IUserRegister):Observable<any>{
    return this.http.post<any>(REGISTER_URL, userRegister)
    .pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        }
      })
    );
  }

  login(userLogin:IUserLogin):Observable<any>{
    return this.http.post<any>(LOGIN_URL, userLogin)
    .pipe(
      tap({
        next: (loginUser) => {
          this.setUserToLocalStorage(loginUser);
          this.userSubject.next(loginUser);
          alert(`${loginUser.loginUser.name} Login successful`);
          //console.log(`${loginUser.loginUser.name}`);
        },
        error: (err) => {
          alert(`${err.error}`);
        }
      })
    );
  }


}
