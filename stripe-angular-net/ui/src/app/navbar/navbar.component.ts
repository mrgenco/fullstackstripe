import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  user;
  isUserAuthenticated: boolean;

  links = [
    {label:'PREBUILD CHECKOUT FLOW', route:'/prebuild-checkout'}, 
    {label:'CUSTOM PAYMENT FLOW', route:'/custom-flow'},
    {label:'SUBSCRIPTION', route:'/subscription'}
  ];
  activeLink = this.links[0];

  constructor(private _router: Router, private _authService: AuthenticationService) { }
  
  ngOnInit(): void {
    this.isUserAuthenticated = this._authService.isUserAuthenticated();
    this.user = this._authService.getUser();
    this._authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
        this.user = this._authService.getUser();
      });
  }

  navigate(route){
    this._router.navigate([route]);
  }

  public logout = () => {
    this._authService.signOutExternal();
  }
}
