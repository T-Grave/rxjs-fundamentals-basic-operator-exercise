import { interval } from "rxjs";
import { take } from "rxjs/operators";

// TODO: Create an observable that emits the numbers 0, 1 and 2 with 10ms in between

export const observable$ = interval(10).pipe(take(3));
