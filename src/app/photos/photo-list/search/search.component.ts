import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();


    ngOnInit() {
        this.debounce
            .pipe(debounceTime(300));
    }

    ngOnDestroy() {
        this.debounce.unsubscribe();
    }
}