// The same solid corner arrow is used in the HUD and on the track.
export const CORNER_ARROW_POINTS = [
  [14,0],[0,14],[68,82],[18,82],[36,100],[100,100],[100,36],[82,18],[82,68],
] as const;

export const CORNER_ARROW_PATH = `${CORNER_ARROW_POINTS.map(([x,y],i)=>`${i?'L':'M'}${x} ${y}`).join(' ')} Z`;
