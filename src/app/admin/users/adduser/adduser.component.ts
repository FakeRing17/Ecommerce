import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: User = new User();
  @Output()
  userAddedEvent = new EventEmitter();

  newUser: User = new User;
  message: string = "";
  password: string = "";
  constructor(private httpClientService: HttpClientService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addUser()
  {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    )
  }
}
