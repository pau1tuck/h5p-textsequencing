interface IApp {
  config: any;
  contentId: number;
  contentData: any;
}

class Page extends H5P.EventDispatcher {
  /**
   * @constructor for H5P.Page
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  constructor(params: any, contentId: number, contentData: object = {}) {
    super();
    this.jQuery = H5P.jQuery;
    this.contentId = contentId;
    this.mainWrapper = null;

    // Hello, World constructor
    const username: string =
      (H5PIntegration && H5PIntegration.user && H5PIntegration.user.name) ||
      "World";
    this.title = document.createElement("div");
    this.title.innerText = params.titleField.replace("%username", username);
    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */
    this.attach = ($container: any) => {
      this.mainWrapper = $container;
      // Needed to enable scrolling in fullscreen
      // $wrapper.addClass("h5p-page");

      if (this.isEdge18orEarlier()) {
        this.$container.addClass("edge-18");
      }

      $container.append(`<div class="title-text">${this.title}</div>`);
      this.$container.append(
        `<div class="title-text">${this.params.image}</div>`,
      );
      this.$container.append(
        `<div class="title-text">${this.params.greeting}</div>`,
      );
      $container.get(0).appendChild(this.title);

      /*
      $wrapper.append(this.content.container);
      // this.$wrapper = $wrapper; */
    };

    /**
     * Checks if browser is IE Edge version 18 or earlier
     */
    this.isEdge18orEarlier = () => {
      const ua = window.navigator.userAgent;
      const edgeIndex = ua.indexOf("Edge/");
      if (edgeIndex < 0) {
        return false;
      }
      const edgeVersion = ua.substring(
        edgeIndex + 5,
        ua.indexOf(".", edgeIndex),
      );
      return parseInt(edgeVersion, 10) <= 18;
    };
  }
}

export default Page;
