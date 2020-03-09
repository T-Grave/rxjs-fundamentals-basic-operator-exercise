import { of, merge } from "rxjs";
import { delay } from "rxjs/operators";

// TODO: Return a single observable that outputs both sourceA$ and sourceB$ values, but with a delay of 10 for A and 20 for B

const sourceA$ = of(1, 2);
const sourceB$ = of(3, 4);

export const observable$ = merge(
  sourceA$.pipe(delay(10)),
  sourceB$.pipe(delay(20))
);
