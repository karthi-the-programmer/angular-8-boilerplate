import { Injectable } from '@angular/core';
import { LocalStorageService } from '../app-utils/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService:LocalStorageService) { }

  isLoggedIn() {
    return this.localStorageService.getItem('isLoggedIn');
  }

  getAuthToken() {
    return 'k23lkjalsdkjl2k3jklsdjlaksjdlkjasdl';
  }

}
