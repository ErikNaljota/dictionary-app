import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  sourceLanguage: string = 'english';
  translationLanguage: string = 'dutch';
  private dictionaryPath: string = '';

  constructor() {
  }
}
