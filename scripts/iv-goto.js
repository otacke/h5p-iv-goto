H5P.IVGoTo = (function ($, EventDispatcher) {

  /**
   * Go to a different timecode
   *
   * @class H5P.IVGoTo
   * @extends H5P.EventDispatcher
   * @param {Object} parameters
   */
  function IVGoTo(parameters) {
    console.log('IVGOTO');
    var self = this;
    EventDispatcher.call(self);

    /**
     * Attach the goto item to the given container.
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      // TODO: Change bubble color on toolbar
      // TODO: Make the box invisible
      if (this.parent.editor === undefined) {
        self.trigger('goto', parameters.gototime);
      }
    };
  }

  IVGoTo.prototype = Object.create(EventDispatcher.prototype);
  IVGoTo.prototype.constructor = IVGoTo;

  return IVGoTo;

})(H5P.jQuery, H5P.EventDispatcher);
