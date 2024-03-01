import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    

  }

  addSub(){}
}
