class Content extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   * @param {object} parent
   * @param {object} params
   */
  constructor(config: any, contentId: number, params: any, contentData = {}) {
    super();

    this.container = document.createElement("div");
    // this.container.classList.add("h5p-page-content");
    this.container.append("<p>Allahu Akbar</p>");
  }
}

export default Content;
