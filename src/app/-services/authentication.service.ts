import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AlertService, UserService } from '../-services/index';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,private router: Router,private alertService: AlertService) { }    
    private apiUrl = 'http://595b3ea8c985be0011f66772.mockapi.io'

    // login(username: string, password: string) {
    //     return this.http.post(`${this.apiUrl}/user2`, JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user.username && user.password) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 alert("aaa");
    //             }
    //             else{
    //                 alert("nbbb");
    //             }
    //         });
    // }

    login(username: string, password: string) {           
        return this.http.get(`${this.apiUrl}/users`)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.find(u=>u.username===username) && user.find(u=>u.password===password)) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));                    
                    this.router.navigate(['/users']);                   
                }
                else{
                    this.alertService.error("Incorrect password or usernamr. Please try again");                                                         
                    window.location.reload();    
            }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}