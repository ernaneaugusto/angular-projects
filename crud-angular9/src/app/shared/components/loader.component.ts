import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `<div class="loader"></div>`,
    styles: [`
    .loader {
        border: 2px solid #f3f3f3; /* Light grey */
        border-top: 2px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`]
})
export class LoaderComponent { }