import { Component, OnInit } from '@angular/core';

import { User } from '../-models/index';
import { UserService } from '../-services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})


export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    deleteUser(id: number) {
        this.userService.deleteItem(id).subscribe(() => { this.loadAllUsers() });
    }
    private loadAllUsers() {
        this.userService.getItems();
    }
    bmiNumber: number;
    bmiString: string;
    range:string;    
}