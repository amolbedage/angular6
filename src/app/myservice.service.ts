
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public Base_url:any;
  constructor(private _http:HttpClient) {
  this.Base_url="http://localhost:8080/api/user.php";
  
  }

  getAllEmpList(){

    return this._http.get(this.Base_url).pipe(catchError(this._errorHandler));
    }
    
    saveEmpInfo(info:any){
    
    return this._http.post(this.Base_url,info).pipe(catchError(this._errorHandler));
    }
    private _errorHandler(error: Response) {
    return Observable.throw(error || 'Some Error on Server Occured');
    }
}

