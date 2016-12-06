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

    console.log('IVGOTO');

    parameters = $.extend(true, {
      destination: {
        type: 'timecode',
        gototime: '0'
      },
    }, parameters);

    EventDispatcher.call(self);

    /**
     * Attach the goto item to the given container.
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      console.log('IVGoTo attached.');
      // self.trigger('goto', parameters.destination.gototime);
    };
  }

  IVGoTo.prototype = Object.create(EventDispatcher.prototype);
  IVGoTo.prototype.constructor = IVGoTo;

  return IVGoTo;

})(H5P.jQuery, H5P.EventDispatcher);
