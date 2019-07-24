$(function() {
    $(".about-member-select-featured").css("display", "none");
  $("#select-city").change(function() {
    location.href = $(this).val();
  });
  $("#select-category").change(function() {
    $(".about-list-members > div").css("display","flex");
    if($(this).val()==="featured") {
      $(".about-member-select-featured").css("display", "none");
    } else if ($(this).val()==="featured1") {
      $(".about-member-select-featured1").css("display", "none");
    }
  })
  $(".cart-qty-min-button").click(function() {
    var displayVal = $(this).parent().parent().prop('id')
    if (displayVal === 'cart__desktop_version_event') {
      $(".cart-mobile-qty-div").html("");
    }
    else {
      $(".cart__desktop_version_event").html("");
    }
    $input = $(this).prev();
    $input.val($input.val() - 1);
    $(".cart_update_control").trigger("click");
  })
  $(".cart-qty-plus-button").click(function() {
    var displayVal = $(this).parent().parent().prop('id')
    if (displayVal === 'cart__desktop_version_event') {
      $(".cart-mobile-qty-div").html("");
    }
    else {
      $(".cart__desktop_version_event").html("");
    }
    $input = $(this).prev().prev();
    $input.val(1*$input.val() + 1);
    $(".cart_update_control").trigger("click");
  })
})
