import { of } from "rxjs";
import { filter } from "rxjs/operators";

// TODO: Return an observable that filters out all even numbers from the source$ observable

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(filter(x => x % 2 !== 0));
