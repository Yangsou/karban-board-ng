export function generateUnitKey(s = ''): string {
  return `_${s}${Math.random().toString(36).substr(2, 9)}`;
}
