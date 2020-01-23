import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {SettingsService} from '../settings/settings.service';
import * as Words from '../../assets/words.json';
import {Word} from './word';
import {NavigationService} from '../navigation/navigation.service';

@Component({
    selector: 'app-dictionary',
    templateUrl: './dictionary.component.html',
    styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
    private sourceLanguage = 'english';
    private translationLanguage = 'dutch';
    private words: Word[] = [];
    private checkVocabulary = true;
    inputFields: any;

    constructor(private dictionaryService: DictionaryService,
                private settingsService: SettingsService,
                private navigationService: NavigationService) {
        this.sourceLanguage = settingsService.sourceLanguage;
        this.translationLanguage = settingsService.translationLanguage;
    }

    ngOnInit(): void {
        // Temp.default.map((value: Word) => console.log('Value: ', value.dutch));
        // const words: Word[] = [];
        // @ts-ignore
        Words.default.forEach((obj: Word) => {
            this.words.push(obj);
        });
        console.log('Obj', this.words);

        this.navigationService.checkVocabulary.subscribe((value: boolean) => this.checkVocabulary = value);
    }
}
