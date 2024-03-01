import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

  userList: any = [];
  count= [{'count':0}];
  countValue: number = 0;

  constructor(private http: HttpClient){
    // this.getUserDetails();
    // this.getActiveUsers();
    // this.countValue = this.count[0].count;
    // console.log(this.count)
  }
  async ngOnInit(): Promise<void> {
    await this.getUserDetails();
    await this.getActiveUsers();
    this.countValue = this.count[0].count;
    // this.countValue = this.setCountValue();
  }
  getUserDetails() {
    this.getUsers().subscribe((res: any[]) => {
      this.userList = res;
    });
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/')
  }
  getActiveUsers(){
    this.getCount().subscribe((res: any[])=>{
      this.count = res;
    })
  }
  getCount(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/v1/admin/count')
  }
  setCountValue(): number{
    return this.count[0].count
  }
}
