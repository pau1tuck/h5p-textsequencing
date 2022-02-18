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
  const TextSequencing = (params: any, id: number) => {
    // Extend defaults with provided options
  };

  /**
   * Attach content HTML to the main H5P container
   *
   *  @param {H5P.jQuery} $container
   */
  TextSequencing.prototype.attach = ($container: JQuery) => {
    $container.append("<p>Anus</>");
  };

  // Extends the event dispatcher
  TextSequencing.prototype = Object.create(EventDispatcher.prototype);
  TextSequencing.prototype.constructor = TextSequencing;
  return TextSequencing;
})(H5P.EventDispatcher, H5P.jQuery);

export {};
