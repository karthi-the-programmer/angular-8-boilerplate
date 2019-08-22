import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: any) {
    return localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  clearItem(key: string) {
    return localStorage.removeItem(key);
  }

  clearAll() {
    return localStorage.clear();
  }
}
