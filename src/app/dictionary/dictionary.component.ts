import {Component, OnInit} from '@angular/core';
import {Word} from './word';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private words: Word[] = [];
  private map: Map<string, string>;

  constructor() {
    const word = new Word();
    this.map = word.generateMap();
    console.log('map', this.map);
  }

  ngOnInit() {
  }

}
