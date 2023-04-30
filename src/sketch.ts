import p5 from "p5";
// import "p5/lib/addons/p5.sound";

import { setup } from "@/main/setup";
import { draw } from "@/main/draw";

import { ExampleSketch as Sketch } from "../types/example-sketch";
import { P5Singleton } from "./utilities/p5-singleton";
import { windowResized } from "@/main/events";

const sketch = (p: p5) => {
  P5Singleton.setInstance(p as Sketch);

  p.setup = setup;
  p.draw = draw;
  p.windowResized = windowResized;
};

new p5(sketch);
