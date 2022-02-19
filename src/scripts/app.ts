/* eslint-disable no-console */
H5P.TextSequencing = (($: any, Question: any, ConfirmationDialog: any) => {
  /**
   * Initialize module.
   *
   * @class H5P.TextSequencing
   * @extends H5P.Question
   * @param {Object} params // Behavior settings
   * @param {Number} contentId // Content identification
   * @param {Object} contentData // Object containing task-specific content data
   *
   * @returns {Object} TextSequencing instance
   */
  const TextSequencing = (params: any, contentId: number, contentData: any) => {
    // Set default behavior.
    $ = $(this);
    params = Object.assign(
      true,
      {
        media: {},
        taskDescription: "Set in adjectives in the following sentence",
      },
      params,
    );
  };

  TextSequencing.prototype = Object.create(Question.prototype);
  console.log(TextSequencing.prototype.params);

  return TextSequencing;
})(H5P.jQuery, H5P.Question, H5P.ConfirmationDialog);

export default H5P.TextSequencing;
