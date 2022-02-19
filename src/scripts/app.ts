H5P.DragText = (($: any, Question: any, ConfirmationDialog: any) => {
  /**
   * Initialize module.
   *
   * @class H5P.DragText
   * @extends H5P.Question
   * @param {Object} _params Behavior settings
   * @param {Number} contentId Content identification
   * @param {Object} contentData Object containing task specific content data
   *
   * @returns {Object} DragText Drag Text instance
   */
  const TextSequencing = (params: any, contentId: number, contentData: any) => {
    // Set default behavior.
    params = $.extend(
      true,
      {
        media: {},
        taskDescription: "Set in adjectives in the following sentence",
      },
      params,
    );
  };
  return TextSequencing;
})(H5P.jQuery, H5P.Question, H5P.ConfirmationDialog);

export default {};
