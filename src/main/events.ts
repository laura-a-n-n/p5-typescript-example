import { P5Singleton } from "@/utilities/p5-singleton";
import { computeSize } from "@/utilities/viewport";

export const windowResized = () => {
  const p = P5Singleton.getInstance();
  p.resizeCanvas(...computeSize());
};
