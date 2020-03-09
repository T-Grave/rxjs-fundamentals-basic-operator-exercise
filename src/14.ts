import { merge, of } from "rxjs";

// TODO: Return an observable that outputs both sourceA$ and sourceB$ values

const sourceA$ = of(1, 3);
const sourceB$ = of(2, 4);

export const observable$ = merge(sourceA$, sourceB$);
