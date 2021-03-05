import { Component, Input, OnInit } from '@angular/core';
import { Bou } from '../model/bou';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() bou:Bou = new Bou("", "", "", "", "", 0);

  constructor() { 
  }

  ngOnInit(): void {
  }

}
