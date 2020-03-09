import { observable$ } from "../13";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable that emits value per 10ms: 0, 1, 2",
  marbles(m => {
    const expected$ = m.cold("a---------a---------b---------(c|)", {
      a: 0,
      b: 1,
      c: 2
    });

    m.expect(observable$).toBeObservable(expected$);
  })
);
