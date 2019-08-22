import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

export enum RestEnds {
  posts = 'posts'
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getApiBaseUrl() {
    return environment.apiBaseURL;
  }
}
