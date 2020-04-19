import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public githubUrl: string = 'https://github.com/ernaneaugusto/angular-projects/tree/udemy-crud-angular-9';

  constructor() { }

  ngOnInit(): void {
  }

}
