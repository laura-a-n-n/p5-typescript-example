import { P5Singleton } from "@/utilities/p5-singleton";

export const draw = () => {
  const p = P5Singleton.getInstance();
  p.background(0, 0, 0);
  p.fill(p.map(p.spin, 0, p.TAU, 0, 360), 50, 100);
  p.translate(p.width / 2, p.height / 2);
  p.rotate(p.spin);
  p.square(0, 0, p.width / 4);
  p.spin += p.deltaTime / 1000;
  p.spin %= p.TAU;
};
