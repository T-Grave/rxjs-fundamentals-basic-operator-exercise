import { observable$ } from "../12";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 2, 3",
  marbles(m => {
    const expected$ = m.cold("(abc|)", { a: 1, b: 2, c: 3 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
