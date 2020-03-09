import { of } from "rxjs";
import { distinct } from "rxjs/operators";

// TODO: Return an observable that only outputs unique values from the source$ observable

const source$ = of(1, 1, 2, 2, 3, 3);

export const observable$ = source$.pipe(distinct());
