import { PickAnimated, SpringValues } from '@react-spring/web';

export const base: SpringValues<PickAnimated<object>> = {
  to: { opacity: 1 },
  from: { opacity: 0 },
  config: { mass: 5, tension: 2000, friction: 200 },
};
