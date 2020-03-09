import { observable$ } from "../08";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 1, 2",
  marbles(m => {
    const expected$ = m.cold("(ab|)", { a: 1, b: 2 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
