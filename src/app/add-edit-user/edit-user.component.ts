import { Component, OnInit } from '@angular/core';
import { IUser } from '../defines/user.interface';
import { UserService } from '../-services/user.service';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-user1',
  templateUrl: 'edit-user.component.html',  
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  myForm: FormGroup;    
  user : IUser=null; 
  subscriptionParams : Subscription;  
  errorMessage : string;
  constructor(    
    private router: Router,
    private _userService : UserService,        
    private _activatedRouteService : ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscriptionParams = this._activatedRouteService.params.subscribe((params : Params) => {
			let id : number = parseInt(params['id']);      
			this._userService.getItem(id).subscribe(
				(data : IUser) => { this.user = data },
				(error : any) => { this.errorMessage = <any>error }
			);      
		});
  }

  editUser(id: String) {
    this.subscriptionParams = this._activatedRouteService.params.subscribe((params : Params) => {
			let id : number = parseInt(params['id']);

  this._userService.editItem(id,this.user)
      .subscribe((data) => 
    data);  
 });

  this.router.navigate(['users']); }

  backToUserList(){
		this.router.navigate(['users']);
	}
}