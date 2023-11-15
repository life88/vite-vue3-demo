export function keyToPath(key) {
  const PLACEHOLDER_TOKEN = '';
  const START_TOKEN = '/src/pages';
  if (key.startsWith(START_TOKEN)) {
    key = key.replace(START_TOKEN, PLACEHOLDER_TOKEN);
  }

  const END_TOKENs = ['/index.tsx', '/index.jsx', '/index.js', '/index.vue'];
  const match = END_TOKENs.find((token) => key.endsWith(token));

  if (match) {
    key = key.replace(match, PLACEHOLDER_TOKEN);
  } else {
    key = key
      .replace(/\/index\.[jt]sx?$/, PLACEHOLDER_TOKEN)
      .replace(/\/index\.vue$/, PLACEHOLDER_TOKEN)
      .replace(/\.[jt]sx?$/, PLACEHOLDER_TOKEN)
      .replace(/\.vue$/, PLACEHOLDER_TOKEN);
  }
  return key
    .replace(/\/index$/, PLACEHOLDER_TOKEN)
    .replace(/\$/g, ':')
    .replace(/\[(\w*)\]/g, ':$1');
}

export function px2px(px, base = 1920) {
  const clientWidth = document.documentElement.clientWidth;
  return Math.floor((px / base) * clientWidth);
}
