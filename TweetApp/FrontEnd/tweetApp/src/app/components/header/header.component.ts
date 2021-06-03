import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public userService:UserService) { }
  userpic:string ;
  username:string;
  ngOnInit(): void {
  this.userpic = sessionStorage.getItem("userpic");
  console.log(this.userpic);
    this.username=sessionStorage.getItem("username")
  }

}
