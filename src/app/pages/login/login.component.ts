import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { LocalStorageService } from 'src/app/core/app-utils/local-storage.service';
import { Posts } from 'src/app/core/models/posts';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private postsService:PostsService,private localStorageService:LocalStorageService) {
    localStorageService.setItem('isLoggedIn',true);
  }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }



}
