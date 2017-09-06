import { Component, OnInit } from '@angular/core';
import { IUser } from '../defines/user.interface';
import { UserService } from '../-services/user.service';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { AlertService } from '../-services/alert.service';

@Component({
  selector: 'app-new-user1',
  templateUrl: 'new-user.component.html',  
  providers: [UserService,AlertService]
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;    
  user : IUser = null; 
  subscriptionParams : Subscription;  
  constructor(    
    private router: Router,
    private _userService : UserService,    
    private alertService: AlertService,
    private _activatedRouteService : ActivatedRoute,
  ) {}

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log(form.value);
    this._userService.addItem(form.value)
    .subscribe((data) => 
    data
    );
    this.router.navigate(['users']);         
  }

  backToUserList(){
		this.router.navigate(['users']);
	}

}