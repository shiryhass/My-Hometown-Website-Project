import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Member } from '../../models/member.model';


@Component({
  selector: 'app-membertable',
  templateUrl: './membertable.component.html',
  styleUrls: ['./membertable.component.css']
})
export class MembertableComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone'];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}


export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<Member[]> {
    return this.userService.getMember();
  }
  disconnect() {}
}
