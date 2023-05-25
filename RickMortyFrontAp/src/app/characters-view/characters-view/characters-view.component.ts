import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {

  charactersList: any;
  errorHtmlRequest = false;

  constructor(private http: HttpClient) {

    this.charactersList = [];
  }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/[1,120,5,121,7,8,9,10]")
    .subscribe(
      result =>  {
        this.charactersList = result;
        this.errorHtmlRequest = false;
      },
      error => {
        console.log("error");
        this.errorHtmlRequest = true;
      }
    )
  }

}
