import { Injectable } from '@angular/core';
import { ApiManagerService } from '../app-utils/api-manager.service';
import { RestEnds } from '../app-utils/config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiManagerService:ApiManagerService) {

  }

  getAllPosts() {
      return this.apiManagerService.getRequest(RestEnds.posts);
  }

}
