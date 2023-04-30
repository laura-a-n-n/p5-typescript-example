import { ExampleSketch as Sketch } from "types/example-sketch";

export class P5Singleton {
  private static instance: Sketch;

  public static getInstance(): Sketch {
    return this.instance;
  }

  public static setInstance(p: Sketch) {
    this.instance = p;
  }
}
