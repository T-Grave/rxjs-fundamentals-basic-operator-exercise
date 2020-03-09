import { of } from "rxjs";
import { takeLast } from "rxjs/operators";

// TODO: Return an observable that only returns the 2 last results of the $source observable

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(takeLast(2));
