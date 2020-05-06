import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate {
    public path: string = '';

    private currentIDSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public currentPathSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public currentIDInformation: Observable<string> = this.currentIDSource.asObservable();

    constructor() {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        this.path = route.routeConfig.path;

        this.currentPathSource.next(route.routeConfig.path);

        return true;
    }
}
