import { of } from "rxjs";
import { map } from "rxjs/operators";

// TODO: Return an observable that maps over the following values and multiplies them with 10

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(map(x => x * 10));
