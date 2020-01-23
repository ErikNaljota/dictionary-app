import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {SettingsService} from '../settings/settings.service';
import * as Words from '../../assets/words.json';
import {Word} from './word';
import {VocabularyService} from '../services/vocabulary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private words: Word[] = [];
  private leftColumn: string = 'english';
  private rightColumn: string = 'dutch';
  private checkVocabulary: boolean = false;

  constructor(private dictionaryService: DictionaryService,
              private settingsService: SettingsService,
              private vocabularyService: VocabularyService) {
    // this.sourceLanguage = settingsService.sourceLanguage;
    // this.translationLanguage = settingsService.translationLanguage;
  }

  ngOnInit(): void {
    Words.default.forEach((obj: Word) => {
      this.words.push(obj);
    });

    this.vocabularyService.leftColumn.subscribe(value => this.leftColumn = value.toLocaleLowerCase());
    this.vocabularyService.rightColumn.subscribe(value => this.rightColumn = value.toLocaleLowerCase());
  }
}
