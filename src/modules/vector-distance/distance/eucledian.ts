function _squaredEuclidean(p: number[], q: number[]): number {
  let d: number = 0;
  for (let i = 0; i < p.length; i++) {
    d += (p[i] - q[i]) * (p[i] - q[i]);
  }
  return d;
}

export function euclideanDistance(p: number[], q: number[]): number {
  return Math.sqrt(_squaredEuclidean(p, q));
}
