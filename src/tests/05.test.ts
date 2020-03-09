import { observable$ } from "../05";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 1, 3",
  marbles(m => {
    const expected$ = m.cold("(ab|)", { a: 1, b: 3 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
