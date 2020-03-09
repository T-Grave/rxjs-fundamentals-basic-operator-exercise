import { observable$ } from "../15";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 3, 2, 4",
  marbles(m => {
    const expected$ = m.cold("(a|)", { a: [3, 4] as [number, number] });

    m.expect(observable$).toBeObservable(expected$);
  })
);
