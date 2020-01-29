import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public checkVocabulary = new Subject();
    public shuffleWords = new Subject();
    public numberOfRows = new Subject();

    constructor(private router: Router) {
    }

    emitVocabularyCheck(checkVocabulary: boolean): void {
        this.checkVocabulary.next(checkVocabulary);
    }

    navigate(page: string): void {
        if (page !== 'home') {
            this.router.navigate([{outlets: {primary: [page], subs: [page]}}]);
        } else {
            this.router.navigate(['']);
        }
    }
}
