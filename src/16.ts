import { of } from "rxjs";
import { scan } from "rxjs/operators";
// TODO: Return an observable that returns as many values as the source array
//       but each value is the sum of values up until that point

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(scan((sum, next) => sum + next));
