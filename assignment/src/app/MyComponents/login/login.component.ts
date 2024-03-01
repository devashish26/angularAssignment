import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { myvars } from '../../utils/authvars';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usersAll: any = {};
  user: any = {};


  userLogin(loginForm: NgForm){
    console.log(this.user);
    if(this.checkUsernameExist(this.usersAll, this.user)){
      // redirect to user home
      // this.router.navigate(['/userhome']);
      this.router.navigate(['/userhome'], {
        queryParams: {data: JSON.stringify(this.user)}
      });
    }else{
      // user does not exist
    }
  }

  constructor(private http: HttpClient, private router: Router){
    myvars.onnUserFlag;
    this.getUserDetails();
  }



  getUserDetails(){
    this.getAllUsers().subscribe((res:any[])=>{
      this.usersAll = res;
      // console.log(this.usersAll);
    })
  }
  getAllUsers(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/')
  }




  checkUsernameExist(allUsers: any, userData: any): boolean {
    for (let index = 0; index < allUsers.length; index++) {
      if((allUsers[index].username == userData.username)){
        if(allUsers[index].password == userData.password){
          return true;
        }else{
          // incorrect password
          console.log('incorrect pass')
        }
      }
    } 
    return false; // username doesnt exist
  }
}
