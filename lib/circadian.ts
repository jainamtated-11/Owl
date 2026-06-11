/**
 * Shared geometry + model for the circadian chart, used by both the static
 * server-rendered chart and the live "you are here" marker so they stay in
 * perfect registration.
 *
 * The time axis runs 18:00 -> 18:00 next day (hours 18..42) so the night shift
 * reads as one contiguous band centered over the circadian low.
 */
export const W = 720;
export const H = 300;
export const PAD = { top: 28, right: 24, bottom: 36, left: 24 };
export const plot = {
  w: W - PAD.left - PAD.right,
  h: H - PAD.top - PAD.bottom,
};

export const AXIS_START = 18;
export const AXIS_SPAN = 24;

/** Alertness model: peak ~16:30, trough ~04:30. Range 0..1. */
export function alertness(hour: number): number {
  return 0.5 + 0.42 * Math.cos((2 * Math.PI * (hour - 16.5)) / 24);
}

export const x = (hour: number) =>
  PAD.left + ((hour - AXIS_START) / AXIS_SPAN) * plot.w;
export const y = (a: number) => PAD.top + (1 - a) * plot.h;

/** Map a wall-clock hour (0..24) onto the 18..42 axis. */
export const toAxisHour = (hour24: number) =>
  hour24 >= AXIS_START ? hour24 : hour24 + 24;
