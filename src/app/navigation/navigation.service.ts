import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public checkVocabulary = new Subject();
    public shuffleWords = new Subject();

    constructor() {
    }

    emitVocabularyCheck(checkVocabulary: boolean): void {
        this.checkVocabulary.next(checkVocabulary);
    }
}
