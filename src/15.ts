import { of, combineLatest } from "rxjs";

// TODO: Return an observable that outputs the last value from sourceA$ and sourceB$ together as a single array of values

const sourceA$ = of(1, 3);
const sourceB$ = of(2, 4);

export const observable$ = combineLatest(sourceA$, sourceB$);
