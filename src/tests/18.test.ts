import { observable$ } from "../18";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 3, 6",
  marbles(m => {
    const expected$ = m.cold("(a|)", { a: 6 });

    m.expect(observable$).toBeObservable(expected$);
  })
);
