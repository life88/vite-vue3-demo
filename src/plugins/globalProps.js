export default function installGlobalProps(app) {
  /**
   * 可以直接在 template 中使用 $getImageUrl(url, width, height) 来获取图片的 url
   * @param url
   * @param width
   * @param height
   * @returns {*|string}
   */
  app.config.globalProperties.$getImageUrl = function getImageUrl(url, width, height) {
    if (!url) return '';

    if (width || height) {
      return `${url}?x-oss-process=image/resize,m_fill${width ? `,w_${width}` : ''}${height ? `,h_${height}` : ''}`;
    }
    return url;
  };
}
