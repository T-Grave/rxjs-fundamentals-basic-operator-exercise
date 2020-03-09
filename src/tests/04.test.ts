import { observable$ } from "../04";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 10, 20, 30",
  marbles(m => {
    const expected$ = m.cold("(abc|)", { a: 10, b: 20, c: 30 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
