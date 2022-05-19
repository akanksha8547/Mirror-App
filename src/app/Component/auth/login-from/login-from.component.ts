import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../Service/authenticate.service';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent implements OnInit {

  constructor(public authService: AuthenticateService,
    private router: Router) { }

  ngOnInit(): void {
  }

  

}
