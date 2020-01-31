import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {SettingsService} from '../settings/settings.service';
import * as Words from '../../assets/words.json';
import {Word} from './word';
import {NavigationService} from '../navigation/navigation.service';
import {VocabularyService} from '../services/vocabulary.service';

import _ from 'lodash';

@Component({
    selector: 'app-dictionary',
    templateUrl: './dictionary.component.html',
    styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
    private words: Word[] = [];
    private checkVocabulary: boolean = true;
    private leftColumn: string = 'dutch';
    private rightColumn: string = 'dutch';
    private submitted: boolean = false;
    private shuffle: boolean = false;
    private numberOfRows: number = 15;

    constructor(private dictionaryService: DictionaryService,
                private settingsService: SettingsService,
                private vocabularyService: VocabularyService,
                private navigationService: NavigationService) {
    }

    ngOnInit(): void {
        this.generateWords();

        // Shuffling the array
        if (this.shuffle) {
            this.words = _.shuffle(this.words);
        }

        this.vocabularyService.leftColumn.subscribe(value => this.leftColumn = value.toLocaleLowerCase());
        this.vocabularyService.rightColumn.subscribe(value => this.rightColumn = value.toLocaleLowerCase());
        this.navigationService.checkVocabulary.subscribe((value: boolean) => {this.checkVocabulary = value; this.submitted = !value;});
        this.navigationService.numberOfRows.subscribe((value: number) => this.numberOfRows = value);
        this.navigationService.shuffleWords.subscribe((val: boolean) => {
            if (val) {
                this.words = _.shuffle(this.words);
            } else {
                this.generateWords();
            }
        });
    }

    private generateWords(): void {
        this.words = [];
        // @ts-ignore
        Words.default.forEach((obj: Word) => {
            this.words.push(obj);
        });
    }

    private submit(): void {
        this.submitted = true;
    }

    private hasValue(word: Word) {
        return !(word[this.leftColumn].includes('-') || word[this.rightColumn].includes('-'));
    }
}
