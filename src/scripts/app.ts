export default class TextSequencing extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params: any, contentId: number) {
    super();
    const username: string =
      (H5PIntegration && H5PIntegration.user && H5PIntegration.user.name) ||
      "world";
    this.element = document.createElement("div");
    this.element.innerText = params.textField.replace("%username", username);
    this.element.innerText = params.textField;

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = ($wrapper: JQuery) => {
      $wrapper.get(0)?.classList.add("h5p-hello-world");
      $wrapper.get(0)?.appendChild(this.element);
    };
  }
}
