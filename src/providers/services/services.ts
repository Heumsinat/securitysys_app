import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://178.128.100.177/securitysys';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      // let headers = new Headers();

      this.http.post(apiUrl + type, credentials)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getData(type) {
    return new Promise((resolve, reject) => {
      // let headers = new Headers();

      this.http.get(apiUrl + type)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
