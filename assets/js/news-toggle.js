(function($) {
  "use strict";

  function initNewsToggle() {
    $(".news-list").each(function() {
      var $container = $(this);
      var visibleItems = parseInt($container.data("visible-items"), 10) || 5;
      var $items = $container.children().filter(function() {
        return $(this).is(".list__item, .grid__item, .archive__item, article, li");
      });

      if ($items.length <= visibleItems) {
        return;
      }

      var $collapsedItems = $items.slice(visibleItems).addClass("news-list__item--collapsed");
      var $toggle = $(
        '<button type="button" class="btn news-list__toggle" aria-expanded="false">Show more</button>'
      );

      $toggle.on("click", function() {
        var expanded = $(this).attr("aria-expanded") === "true";
        $(this)
          .attr("aria-expanded", !expanded)
          .text(expanded ? "Show more" : "Show less");

        $collapsedItems.toggleClass("news-list__item--collapsed");
      });

      $container.append($toggle);
    });
  }

  $(document).ready(initNewsToggle);
})(jQuery);
