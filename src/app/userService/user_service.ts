import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { AuthHttp } from '@angular-jwt';
// import { environment } from '../../environment/environment.prod'
import 'rxjs/add/operator/map';

@Injectable()
export class user_service {

  constructor(public http: Http) { }

  login(data) { return this.http.post(
      'http://localhost:8020/v1/boostAdmin/login',
      data,
    )
      .map((res: Response) => res.json())
      .catch((error: any) => {
        try {
          return (Observable.throw(error.json()));
        } catch (jsonError) {
          // If the error couldn't be parsed as JSON data
          // then it's possible the API is down or something
          // went wrong with the parsing of the successful
          // response. In any case, to keep things simple,
          // we'll just create a minimum representation of
          // a parsed error.
          return (jsonError);
        }
    });   
  }

  //api for logout
//   logoutUser(){
//     //console.log("looged out service")
//      let token=localStorage.getItem('token')
//     // //console.log(token)
//      var header_token = 'Bearer '+token
//      console.log(header_token)
//      let headers = new Headers({ 'Content-Type': 'application/json' });
//      headers.append('Authorization',header_token);
//      let options = new RequestOptions({ headers: headers }); 
//      let data='';
//     let url=environment.APP.API_URL+environment.APP.LOGOUT_API;
//     return this.http.put(url,data,options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => {
//         console.log(error)
//         try {
//           return (Observable.throw(error.json()));
//         } catch (jsonError) {
//           // If the error couldn't be parsed as JSON data
//           // then it's possible the API is down or something
//           // went wrong with the parsing of the successful
//           // response. In any case, to keep things simple,
//           // we'll just create a minimum representation of
//           // a parsed error.
//           var minimumViableError = {
//             success: false
//           };
//           return (Observable.throw(minimumViableError));
//         }
//       })
//   }

}
