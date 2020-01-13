import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private dictionary: Map<string, string>[] = [];

  constructor() {
    this.generateDictionary();
  }

  private generateDictionary() {

  }

  public refreshDictionary() {
    this.generateDictionary();
  }

  public getDictionary(): Map<string, string>[] {
    return this.dictionary;
  }
}
