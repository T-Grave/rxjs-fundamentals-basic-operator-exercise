import { observable$ } from "../07";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 2, 3",
  marbles(m => {
    const expected$ = m.cold("(ab|)", { a: 2, b: 3 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
