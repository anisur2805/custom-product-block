jQuery(document).ready(function ($) {
	$(".cpb-orderby").change(function () {
		var orderby = $(this).val();
		$.ajax({
			type: "POST",
			url: cpb.ajaxurl,
			data: {
				action: "custom_product_block_filter",
				orderby: orderby,
			},
			beforeSend: function() {
				// setting a timeout
				$(".custom-product-block-fe .products").addClass('loading');
				// $(".custom-product-block-fe .products").html('<span class="spinner is-active"></span>');
			},
			success: function (response) {
				$(".custom-product-block-fe .products").html(response.data.products);
				$(".showing-results span").html(response.data.found_products);
				$(".custom-product-block-fe .products").removeClass('loading');
			},
			error: function (error) {
				console.log(error);
				$(".custom-product-block-fe .products").removeClass('loading');
			}
		});
	});

    $('.products-views span').on('click', function (e) {
        e.preventDefault();
        let view = $(this).data('view');
        $('.custom-product-block-fe .products').removeClass('grid list').addClass( view );
    })

    $('.cpb-items_per_row').on('change', function (e) {
        e.preventDefault();
		var items_per_row = $(this).val();
        $('.custom-product-block-fe .products').removeClass('grid-1 grid-2 grid-3 grid-4').addClass(`grid-${items_per_row}`);
    })
})
