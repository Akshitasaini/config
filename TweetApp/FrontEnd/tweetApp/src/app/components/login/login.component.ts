import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginModel } from 'src/app/models/login.model';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options = {
    autoClose: false,
    keepAfterRouteChange: false
};
  ngOnInit(): void {
    let authval = sessionStorage.getItem("auth");
    if(authval == "true")
    {
      this.router.navigate(['/newsfeed']);
    }
    
  }

  loginForm: FormGroup;
  userName1: string = "";
  password: string = "";
  post: any;
  invalidLogin = false;
  users:UserModel[];
  loginuser:LoginModel;

  constructor(private notifyService : NotificationService,private fb: FormBuilder,private router: Router,private userService: UserService) {
  
    this.loginForm = fb.group({
      'userName1': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],

    });
  }
  showToasterSuccess(){

    this.notifyService.showSuccess("Logged in Succesfully !!", "Have a great time")

}

showToasterError(){

    this.notifyService.showError("Invalid Credentials !!!!!", "Please enter correct credentials")

}
  onlogin(data) {

    console.log(data.userName1)

  
    this.userService.getLoginByName(data.userName1).subscribe((login) => {console.log(login)
    this.loginuser=JSON.parse(JSON.stringify(login))
    console.log(this.loginuser)

    if(this.loginuser.password==data.password){
      console.log("login successfull")
      
      sessionStorage.setItem("auth","true");
      sessionStorage.setItem("userpic",this.loginuser.profilepic);
      sessionStorage.setItem("userid",this.loginuser.id);
      sessionStorage.setItem("username",this.loginuser.username);
      this.showToasterSuccess()
      this.router.navigate(['/mymedia']);
    }else{
      this.showToasterError()
    }
  
    },
    error => console.log(error),() => { console.log("completed")
     }
    );
     
  }


}
