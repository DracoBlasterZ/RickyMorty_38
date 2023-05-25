import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-group',
  templateUrl: './characters-group.component.html',
  styleUrls: ['./characters-group.component.css']
})
export class CharactersGroupComponent {

  @Input() characters:any;
}
