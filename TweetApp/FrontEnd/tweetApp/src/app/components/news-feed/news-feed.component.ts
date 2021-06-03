import { Component, OnInit } from '@angular/core';
import {NewsFeed} from 'src/app/models/news-model';

import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  feedusers:any=[];
  
  media: any = [];
  arrofmedia:any = [];

  constructor(private userService: UserService, private uploadService:UploadService,private router: Router) { }

  ngOnInit(): void {
    //authentication
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }

  let myid = sessionStorage.getItem("userid"); 
  console.log(myid) 
  
  
  
  }


  logout(){
    sessionStorage.clear();
    console.log("logout")
  }


}
