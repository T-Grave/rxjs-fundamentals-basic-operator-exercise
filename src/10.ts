import { of } from "rxjs";
import { mapTo } from "rxjs/operators";

// TODO: Create an observable that maps every value of source$ to the same constant: 'FOO'
// Hint: try not to use the usual `map`

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(mapTo("FOO"));
