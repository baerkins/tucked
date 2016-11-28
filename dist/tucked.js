/**
 *  Tucked.js
 *  =========
 *  By Shaun M. Baer <https://github.com/iamhexcoder>
 *
 *  Just another accordion plugin...with drag queen references.
 *
 *  --------------------------
 *   Example html usage code:
 *  --------------------------
 *  <a class="tuck-toggle accordion-title" href="#" data-target="#<?= $targetName ?>" aria-expanded="false" aria-controls="testimonial-content-<?= $post->ID; ?>" role="tab">
 *     <p>Title Content</p>
 *     <i class="fa fa-arrow-circle-down tucked-icon"></i>
 *     <i class="fa fa-arrow-circle-up untucked-icon"></i>
 *  </a>
 *
 *  <div id="<?= $targetName ?>" class="tucked accordion-list-content" role="tabpanel" aria-labelledby="control-<?= $targetName ?>">
 *    <p>Sliding Content</p>
 *  </div>
 *
 *  --------------------------
 *    Example js usage code:
 *  --------------------------
 *  $('a.tuck-toggle').tuckit();
 *
 */
(function( $, window, document, undefined ) {
  $.fn.tuckit = function(options) {
    // Options
    var settings = $.extend({
      slideSpeed:     300,
      openClass:      'target-untucked',
      openElClass:    'untucked',
      closedElClass:  'tucked',
      closeAllOnOpen: true
    }, options);

    // The Main Event
    this.click(function(event){
      event.preventDefault();
      var target = $(this).attr('data-target');
      // Toggle Open Class
      $(this).toggleClass(settings.openClass);

      // Toggle target element and make it slide
      $(target).slideToggle(settings.slideSpeed, function(){
        $(target).toggleClass(settings.openElClass + ' ' + settings.closedElClass);
      });

      // Aria Controls
      if($(this).attr('aria-expanded') === 'false') {
        $(this).attr('aria-expanded', 'true');
      } else {
        $(this).attr('aria-expanded', 'false');
      }
    });

  };

}( jQuery, window, document ));

