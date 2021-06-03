import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { uploadMediaModel } from "src/app/models/uploadMedia.model";
import { UploadService } from "src/app/services/upload.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-upload-media",
  templateUrl: "./upload-media.component.html",
  styleUrls: ["./upload-media.component.css"]
})
export class UploadMediaComponent implements OnInit {
  uploadMediaForm: FormGroup;
  postPic: String;
  file: File;
  userid: string;
  title:String;
  description:String;
  tags:String

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //authentication
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }

    this.uploadMediaForm = this.fb.group({
      'postPic': [''],
      'title':[''],
      'description': [''],
      'tags': ['']

    });
  }

  selectedFiles: FileList;

        onSubmitMedia(){
          
            let username1 =sessionStorage.getItem("username")
            console.log(username1)

            this.description=this.uploadMediaForm.get('description').value

            console.log(this.description)
            let um = new uploadMediaModel(this.postPic, this.title, this.description, this.tags, username1);

            console.log(um);
            let userid = sessionStorage.getItem("userid");
            console.log(userid);
        
            //store to database
            this.uploadService.storeMedia(um, Number(userid),username1).subscribe(
              data => {
                console.log(data);
              },
              error => console.log(error),
              () => {
                console.log("completed");
              }
            );
            }

}
