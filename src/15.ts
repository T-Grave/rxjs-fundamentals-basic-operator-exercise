import { of, combineLatest, interval } from "rxjs";
import { take } from "rxjs/operators";
// TODO: Return an observable that outputs the last value from sourceA$ and sourceB$ together as a single array of values

const sourceA$ = interval(10).pipe(take(2));
const sourceB$ = interval(10).pipe(take(1));

export const observable$ = combineLatest(sourceA$, sourceB$);
