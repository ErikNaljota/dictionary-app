import {Component, OnInit} from '@angular/core';
import {VocabularyService} from '../services/vocabulary.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public checkVocabulary: boolean = true;
  public leftColumn: string;
  public rightColumn: string;
  private languagesList: string[] = [];

  constructor(private vocabularyService: VocabularyService) {
    this.languagesList = vocabularyService.languagesList;
  }

  ngOnInit() {
  }

  a() {
    this.vocabularyService.checkVocabulary.next(this.checkVocabulary);
    // this.vocabularyService.rightColumn.next(this.rightColumn);
    // this.vocabularyService.leftColumn.next(this.leftColumn);
  }
}
