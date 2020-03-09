import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

// TODO: Return an observable that filters out all even numbers from the source$ observable
//       and multiplies the remaining values by ten

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(
  filter(x => x % 2 !== 0),
  map(x => x * 10)
);
