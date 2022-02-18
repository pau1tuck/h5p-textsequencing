/* eslint-disable func-names */
export {};

H5P.TextSequencing = (function (
  EventDispatcher: H5P.EventDispatcher,
  $: JQuery,
) {
  /**
   * TextSequencing - Constructor
   *
   * @extends H5P.EventDispatcher
   * @param {Object} params            from semantics.json
   * @param {number} contentId         unique id given by the platform
   *
   */
  const TextSequencing = (params: any, contentId: number) => {
    let isRetry = false;
    let isRefresh = false;
    let isShowSolution = false;
    let isGamePaused = false;
    let isAttempted = false;
    let score = 0;
  };
})(H5P.EventDispatcher, H5P.jQuery);
