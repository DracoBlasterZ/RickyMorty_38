import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character: any;

  name = '';
  image = '';

  constructor() {}

  ngOnInit(): void {
    this.name = this.character.name;
    this.image = this.character.image;
    console.log(this.name);
  }
}
