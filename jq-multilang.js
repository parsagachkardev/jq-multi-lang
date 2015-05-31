(function( $ ) {
  $.fn.jqmultilang= function(l) {
	$(this).html($(this).data("lang-"+l));
	if ($(this).data("lang-"+l+"-rtl") == true)
	{
		$(this).css("direction","rtl")
	}else
	{
		$(this).css("direction","ltr")
	}
  };
})( jQuery );