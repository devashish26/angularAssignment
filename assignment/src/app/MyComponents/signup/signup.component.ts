import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: any = {};
  allUsers: any = {};

  constructor(private httpClient: HttpClient, private router: Router){}

  postData(data: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/api/v1/users/', this.user);
  }
  addUser(signupForm: NgForm){
    //check if user exists
    console.log(this.user)
    this.postData(this.user).subscribe((res:any[])=>{
      console.log('success?')
      this.router.navigate(['/login'])
    })
  }
}




// checkUsernameExist(allUsers: any, userData: any): boolean {
//     // console.log('entered check')
//     for (let index = 0; index < allUsers.length; index++) {
//       // console.log(allUsers[index].username);
//       if(allUsers[index].username === userData.username){
//         return false;
//       }
//     } 
//     return true;
//   }