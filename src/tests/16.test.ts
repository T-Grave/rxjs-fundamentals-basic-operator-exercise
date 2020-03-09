import { observable$ } from "../16";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 3, 6",
  marbles(m => {
    const expected$ = m.cold("(abc|)", { a: 1, b: 3, c: 6 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
