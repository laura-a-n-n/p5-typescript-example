import { clientAppSettings } from "@/constants";
import { P5Singleton } from "./p5-singleton";

// TODO: add viewport logic...

export function computeSize() {
  const p = P5Singleton.getInstance();
  return [
    p.min(clientAppSettings.width, p.windowWidth),
    p.min(clientAppSettings.height, p.windowHeight),
  ] as const;
}
