H5P.IVGoTo = (function ($, EventDispatcher) {

  /**
   * Go to a different timecode
   *
   * @class H5P.IVGoTo
   * @extends H5P.EventDispatcher
   * @param {Object} parameters
   */
  function IVGoTo(parameters) {
    var self = this;
    EventDispatcher.call(self);

    /**
     * Attach the goto item to the given container.
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      if (this.parent.editor === undefined) {
        $container.addClass('h5p-ivgoto').css({
          backgroundColor: 'rgba(255, 255, 255, 0)'
        });
      }
      else {
        // TODO: make nice
        // TODO: rescale box
        $container.addClass('h5p-ivgoto').css({
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        });
      }

      // TODO: trigger flash
      if (this.parent.editor === undefined) {
        self.trigger('goto', parameters.gototime);
      }
    };
  }

  IVGoTo.prototype = Object.create(EventDispatcher.prototype);
  IVGoTo.prototype.constructor = IVGoTo;

  return IVGoTo;

})(H5P.jQuery, H5P.EventDispatcher);
