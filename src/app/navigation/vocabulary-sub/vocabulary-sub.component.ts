import { Component, OnInit } from '@angular/core';
import {VocabularyService} from '../../services/vocabulary.service';
import {NavigationService} from '../navigation.service';

@Component({
  selector: 'app-vocabulary-sub',
  templateUrl: './vocabulary-sub.component.html',
  styleUrls: ['./vocabulary-sub.component.scss']
})
export class VocabularySubComponent implements OnInit {
    public checkVocabulary: boolean = false;
    public shuffleWords: boolean = false;
    public leftColumn: string;
    public rightColumn: string;
    private languagesList: string[] = [];
    private numberOfRows: number = 15;

    constructor(private vocabularyService: VocabularyService,
                private navigationService: NavigationService) {
        this.languagesList = vocabularyService.languagesList;
    }

    ngOnInit() {
    }

    vocabularyCheck(): void {
        this.checkVocabulary = !this.checkVocabulary;
        this.navigationService.emitVocabularyCheck(this.checkVocabulary);
    }

    wordShuffle(): void {
        this.shuffleWords = !this.shuffleWords;
        this.navigationService.shuffleWords.next(this.shuffleWords);
    }

    updateNrOfRows(value: number): void {
        this.navigationService.numberOfRows.next(value);
    }
}
