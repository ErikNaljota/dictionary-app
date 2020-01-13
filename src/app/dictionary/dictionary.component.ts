import {Component, OnInit} from '@angular/core';
import {Word} from './word';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private selectedWord: string = 'english';

  private dictionary: Map<string, string>[] = [];
  readonly map: Map<string, string>;

  constructor() {
    this.selectedWord = 'dutch';
    const word = new Word();
    this.map = word.generateMap();
    this.dictionary.push(this.map);
    this.dictionary.push(this.map);
    this.dictionary.push(this.map);
    this.dictionary.push(this.map);
  }

  ngOnInit() {
  }

}
