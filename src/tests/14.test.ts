import { observable$ } from "../14";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 3, 2, 4",
  marbles(m => {
    const expected$ = m.cold("(acbd|)", { a: 1, b: 2, c: 3, d: 4 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
