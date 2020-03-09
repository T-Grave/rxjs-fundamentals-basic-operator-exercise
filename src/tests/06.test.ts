import { observable$ } from "../06";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 10, 30",
  marbles(m => {
    const expected$ = m.cold("(ab|)", { a: 10, b: 30 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
