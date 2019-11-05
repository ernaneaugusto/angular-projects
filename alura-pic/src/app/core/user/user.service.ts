import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private userService: UserService) { }

    setToken(token: string) {
        this.userService.setToken(token);
    }
    
    getUser() {}
}