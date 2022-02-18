/* eslint-disable func-names */
declare let H5P: any;
// eslint-disable-next-line prefer-const
H5P = H5P || {};

type TOptions = {
  options: {
    greeting: string;
    image: {
      path: string;
    };
  };
};

H5P.Page = (function ($) {
  /**
   * Constructor function.
   */
  const C = (options: TOptions, id: any) => {
    // Extend defaults with provided options
    this.options = $.extend(
      true,
      {},
      {
        greeting: "Hello, World!",
        image: null,
      },
      options,
    );
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = ($container: any) => {
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-greetingcard");
    // Add image if provided.
    if (this.options.image && this.options.image.path) {
      $container.append(
        `<img class="greeting-image" src="${H5P.getPath(
          this.options.image.path,
          this.id,
        )}">`,
      );
    }
    // Add greeting text.
    $container.append(
      `<div class="greeting-text">${this.options.greeting}</div>`,
    );
  };

  return C;
})(H5P.jQuery);

export {};
