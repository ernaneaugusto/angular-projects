import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(
        private route: Router
    ) { }

    public navigateToUrl(url: string) {
        this.route.navigate([url]);
    }
}
