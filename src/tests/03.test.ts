import { observable$ } from "../03";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with value [1, 2, 3]",
  marbles(m => {
    const expected$ = m.cold("(a|)", { a: [1, 2, 3] });

    m.expect(observable$).toBeObservable(expected$);
  })
);
