import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rickandmorty';

  characters: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5,244,10,46')
      .subscribe(
        (result) => {
          this.characters = result;
        },
        (error) => {
          console.log('Error getting characters data');
        }
      );
  }
}
