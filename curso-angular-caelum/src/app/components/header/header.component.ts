import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    private _isMenuOpen = false; // configura abertura e fechamento menu mobile

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    public toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
    }
}