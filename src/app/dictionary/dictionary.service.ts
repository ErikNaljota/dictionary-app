import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dictionary} from '../../assets/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private dictionary: Dictionary[];

  constructor(private http: HttpClient) {
    this.generateDictionary();
  }

  private generateDictionary() {
    this.http.get<Dictionary[]>('assets/words.json').subscribe(response => this.dictionary = response);
  }

  public refreshDictionary() {
    this.generateDictionary();
  }

  public getDictionary(): Dictionary[] {
    return this.dictionary;
  }
}
