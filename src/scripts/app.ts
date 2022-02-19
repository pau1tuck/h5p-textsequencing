/* eslint-disable no-console */
/* eslint-disable func-names */
H5P.TextSequencing = ((EventDispatcher: any, $: JQuery, UI: any) => {
  /**
   * Text Sequencing Constructor

   * @class H5P.TextSequencing
   * @extends H5P.EventDispatcher
   * @param {Object} params // parameters from semantics.json
   * @param {Number} id     // unique ID given by the platform
   */
  const TextSequencing = (params: any, id: number) => {
    /** @alias H5P.TextSequencing */

    // Initialize event inheritance
    EventDispatcher.call(this);

    // Extend defaults with provided options
    // Add defaults
    // eslint-disable-next-line no-param-reassign
    params = Object.assign(params, true, {
      l10n: {
        cardTurns: "Card turns",
        timeSpent: "Time spent",
        feedback: "Good work!",
        tryAgain: "Reset",
        closeLabel: "Close",
        label: "Memory Game. Find the matching cards.",
        done: "All of the cards have been found.",
        cardPrefix: "Card %num: ",
        cardUnturned: "Unturned.",
        cardMatched: "Match found.",
      },
    });
    console.log(params);
  };

  /**
   * Attach main content to the H5P container
   *
   *  @param {H5P.jQuery} $container
   */
  TextSequencing.prototype.attach = ($container: JQuery): void => {
    $container.append("<p>Anus</p>");
  };

  return TextSequencing;
})(H5P.EventDispatcher, H5P.jQuery, H5P.JoubelUI);

export default {};
