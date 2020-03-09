import { observable$ } from "../18";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 2 after 10ms and 3, 4 after 20ms",
  marbles(m => {
    const expected$ = m.cold("(---------(ab)------(cd|)", {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    });

    m.expect(observable$).toBeObservable(expected$);
  })
);
