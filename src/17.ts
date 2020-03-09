import { of } from "rxjs";
import { reduce } from "rxjs/operators";

// TODO: Return an observable that returns a single value which is the total sum of all values from source$

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(reduce((sum, next) => sum + next));
