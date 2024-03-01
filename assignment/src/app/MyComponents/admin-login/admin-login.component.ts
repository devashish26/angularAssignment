import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  admin: any = {};
  allAdmins: any ={};

  constructor(private http: HttpClient, private router: Router){
   this.getAdminDetails() 
  }

  adminLogin(adminLoginForm: NgForm){
    console.log(this.admin)
    //call http://localhost:3000/api/v1/admin/getadmins
    //populate allAdmins
    //iterate through allAdmins to find this user
    if(this.checkUsernameExist(this.allAdmins, this.admin)){
      // redirect to user home
      // this.router.navigate(['/userhome']);
      this.router.navigate(['/adminhome'], {
        queryParams: {data: JSON.stringify(this.admin)}
      });
    }else{
      // user does not exist
    }
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
  getAdminDetails(){
    this.getAllAdmins().subscribe((res:any[])=>{
      this.allAdmins = res;
      // console.log(this.allAdmins);
    })
  }
  getAllAdmins(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/v1/admin/getadmins')
  }
}
