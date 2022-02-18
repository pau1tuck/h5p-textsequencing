/* eslint-disable func-names */
H5P.TextSequencing = (function (EventDispatcher: any, $: JQuery) {
  /**
   * TextSequencing - Constructor
   *
   * @extends H5P.EventDispatcher
   * @param {Object} params            from semantics.json
   * @param {number} contentId         unique id given by the platform
   *
   */
  const TextSequencing = (options: any, id: number) => {
    // Extend defaults with provided options
  };
  /**
   * Attach this game's html to the given container.
   *
   *  @param {H5P.jQuery} $container
   */
  TextSequencing.prototype.attach = ($container: JQuery) => {
    $container.append("<p>Anus</>");
  };
  return TextSequencing;
})(H5P.EventDispatcher, H5P.jQuery);

export {};
