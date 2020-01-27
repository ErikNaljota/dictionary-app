import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';
import {VocabularyService} from '../services/vocabulary.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    public checkVocabulary = false;
    public shuffleWords = false;
    public leftColumn: string;
    public rightColumn: string;
    private languagesList: string[] = [];

    constructor(private vocabularyService: VocabularyService,
                private navigationService: NavigationService) {
        this.languagesList = vocabularyService.languagesList;
    }

    ngOnInit() {
    }

    vocabularyCheck() {
        this.checkVocabulary = !this.checkVocabulary;
        this.navigationService.emitVocabularyCheck(this.checkVocabulary);
    }

    a() {
        this.vocabularyService.checkVocabulary.next(this.checkVocabulary);
        // this.vocabularyService.rightColumn.next(this.rightColumn);
        // this.vocabularyService.leftColumn.next(this.leftColumn);
    }

    wordShuffle() {
        this.shuffleWords = !this.shuffleWords;
        this.navigationService.shuffleWords.next(this.shuffleWords);
    }
}
