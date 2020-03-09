import { of } from "rxjs";
import { take } from "rxjs/operators";

// TODO: Return an observable that only returns the first 2 results of the $source observable

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(take(2));
