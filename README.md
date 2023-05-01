# p5-typescript-starter

![p5.js](https://img.shields.io/badge/p5.js-v1.5.0-orange.svg)
![p5.js Types](https://img.shields.io/badge/p5.js%20Types-v1.6.1-green.svg)
![Express](https://img.shields.io/badge/Express-v4.18.2-green.svg)
![Rollup Plugin TypeScript](https://img.shields.io/badge/Rollup%20Plugin%20TypeScript-v3.2.0-blue.svg)
![Chai](https://img.shields.io/badge/Chai-v4.3.7-yellow.svg)
![Mocha](https://img.shields.io/badge/Mocha-v10.2.0-yellow.svg)
![Node Sass](https://img.shields.io/badge/Node%20Sass-v8.0.0-pink.svg)
![Prettier](https://img.shields.io/badge/Prettier-v2.8.8-orange.svg)

This is one way to use p5.js with TypeScript and Express.

## Usage

The following will use Express to serve the `public` directory and watch for changes to `src`.

```bash
npm i
npm run start
```

To format all files, run `npm run pretty`.  

See other scripts in [package.json](package.json).

### Singleton

This project uses a singleton design pattern to share the p5 object across files. It can be used like so.

First set up the static object:

```ts
import { P5Singleton } from "@/utilities/p5-singleton";
import { Sketch } from "types/sketch"; // optional

const sketch = (p: p5) => {
  P5Singleton.setInstance(p as Sketch);

  p.setup = setup;
  p.draw = draw;
};

new p5(sketch);
```

Then you can retrieve it with `getInstance` as needed:

```ts
// setup.ts
export const setup = () => {
  const p = P5Singleton.getInstance();
  p.createCanvas(...computeSize());
}
```
