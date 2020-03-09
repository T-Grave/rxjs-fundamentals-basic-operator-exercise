import { observable$ } from "../11";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 3",
  marbles(m => {
    const expected$ = m.cold("(c|)", { c: 3 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
