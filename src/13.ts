import { interval } from "rxjs";
import { startWith, take } from "rxjs/operators";

// TODO: The source$ observable is an interval observable that ouputs an incremental number each 10ms
//       It only outputs its first value after the given time (10ms in this case)
//
//       Return an observable that start with a value (0) immediately and then outputs the source$ observables values
//       The observable should output 0, 0, 1, 2

const source$ = interval(10).pipe(take(3));

export const observable$ = source$.pipe(startWith(0));
