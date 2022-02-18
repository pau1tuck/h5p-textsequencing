/* eslint-disable func-names */
export {};

H5P.TextSequencing = (function (EventDispatcher: any, $: JQuery) {
  /**
   * TextSequencing - Constructor
   *
   * @extends H5P.EventDispatcher
   * @param {Object} params            from semantics.json
   * @param {number} contentId         unique id given by the platform
   *
   */
  const textSequencing = (params: any, contentId: number) => {
    /**
     * Attach this game's html to the given container.
     *
     *  @param {H5P.jQuery} $container
     */
    this.attach = ($container: JQuery) => {
      $container.get(0)?.append("<p>Anus</>");
    };
  };
  return textSequencing;
})(H5P.EventDispatcher, H5P.jQuery);
