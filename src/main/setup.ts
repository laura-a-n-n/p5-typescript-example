import { P5Singleton } from "@/utilities/p5-singleton";
import { computeSize } from "@/utilities/viewport";

export const setup = () => {
  const p = P5Singleton.getInstance();
  p.createCanvas(...computeSize());
  p.rectMode(p.CENTER);
  p.colorMode(p.HSB);
  p.spin = 0;
};
