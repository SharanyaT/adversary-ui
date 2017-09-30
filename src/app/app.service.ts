import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Data } from "./datamodel.model";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class MyExampleService {
  private url = 'http://securityadversary-dev.us-west-2.elasticbeanstalk.com/api/test'; 

  constructor(private http: Http) { }

  get(): Observable<Data>{
    return this.http
      .get(this.url)
      .map((res: Response) => res.json());
  }
}