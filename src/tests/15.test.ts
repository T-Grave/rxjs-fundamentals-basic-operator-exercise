import { observable$ } from "../15";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 3, 2, 4",
  marbles(m => {
    const expected$ = m.cold("----------(a)-------(b|)", {
      a: [0, 0] as [number, number],
      b: [1, 0] as [number, number]
    });

    m.expect(observable$).toBeObservable(expected$);
  })
);
