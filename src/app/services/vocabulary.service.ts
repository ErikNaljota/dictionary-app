import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  public leftColumn = new Subject<string>();
  public rightColumn = new Subject<string>();
  public checkVocabulary = new Subject<boolean>();
  public languagesList: string[] = ['dutch', 'english', 'russian', 'italian', 'french'];

  constructor() {
  }
}
