import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {SettingsService} from '../settings/settings.service';
import * as Words from '../../assets/words.json';
import {Word} from './word';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private sourceLanguage = 'english';
  private translationLanguage = 'dutch';
  private words: Word[] = [];

  constructor(private dictionaryService: DictionaryService, private settingsService: SettingsService) {
    this.sourceLanguage = settingsService.sourceLanguage;
    this.translationLanguage = settingsService.translationLanguage;
  }

  ngOnInit(): void {
    // Temp.default.map((value: Word) => console.log('Value: ', value.dutch));
    // const words: Word[] = [];
    Words.default.forEach((obj: Word) => {
      this.words.push(obj);
    });
    console.log('Obj', this.words);
  }
}
