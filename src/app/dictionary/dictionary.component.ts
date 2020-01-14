import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {SettingsService} from '../settings/settings.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private sourceLanguage: string = 'english';
  private translationLanguage: string = 'dutch';
  private dictionary: Map<string, string>[] = [];

  constructor(private dictionaryService: DictionaryService, private settingsService: SettingsService) {
    this.dictionary = dictionaryService.getDictionary();
    this.sourceLanguage = settingsService.sourceLanguage;
    this.translationLanguage = settingsService.translationLanguage;
  }

  ngOnInit() {
  }

}
