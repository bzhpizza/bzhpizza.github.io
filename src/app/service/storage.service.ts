import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor() {}

  set(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  del(key: string) {
    return localStorage.removeItem(key);
  }
}
