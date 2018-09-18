import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import 'rxjs/add/operator/map';
import { Member } from '../models/member.model';

@Injectable()
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.serviceUrl);
  }

}
