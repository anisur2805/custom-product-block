<?php
add_action( 'wp_ajax_custom_product_block_filter', 'cpb_custom_product_block_filter' );
add_action( 'wp_ajax_nopriv_custom_product_block_filter', 'cpb_custom_product_block_filter' );

function cpb_custom_product_block_filter() {
	$order   = isset( $_REQUEST['order'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['order'] ) ) : 'asc';
	$orderby = isset( $_REQUEST['orderby'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['orderby'] ) ) : 'date';

	$args = array(
        'posts_per_page' => 5,
        'order'          => $order,
    );

    if ($orderby === 'popularity') {
        $args['orderby'] = 'popularity';
    } elseif ($orderby === 'price') {
        $args['orderby']  = 'meta_value_num';
        $args['meta_key'] = '_price';
    } elseif ($orderby === 'price-desc') {
        $args['orderby']  = 'meta_value_num';
        $args['meta_key'] = '_price';
        $args['order'] = 'desc';
    } elseif ($orderby === 'rating') {
		$args['meta_key']     = '_wc_average_rating';
		$args['meta_value']   = 4.0;
		$args['meta_compare'] = '>=';
		$args['meta_type']    = 'NUMERIC';
    } else {
        $args['orderby'] = $orderby;
    }

    $products = wc_get_products( $args );

    $products_html = array();

	foreach ( $products as $product ) {
		$product_html = '<li class="product type-product post-' . esc_attr( $product->get_id() ) . ' status-' . esc_attr( $product->get_status() ) . ' ' . implode( ' ', wc_get_product_class( '', $product->get_id() ) ) . '">';
			$product_html .= '<div class="product-inner">';

				$product_html .= '<div class="product-thumbnail">';
					$product_html .= '<a href="' . esc_url( $product->get_permalink() ) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">';
						$product_html .= '<img decoding="async" width="324" height="324" src="' . esc_url( wp_get_attachment_url( $product->get_image_id() ) ) . '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />';
					$product_html .= '</a>';
				$product_html .= '</div>'; // #product-thumbnail

				$product_html .= '<div class="product-content">';
					$product_html .= '<a href="' . esc_url( $product->get_permalink() ) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">';
						$product_html .= '<h2 class="woocommerce-loop-product__title">' . esc_html( $product->get_name() ) . '</h2>';
						if ( $product->is_on_sale() ) {
							$product_html .= '<span class="onsale">' . esc_html__( 'Sale!', 'your-text-domain' ) . '</span>';
						}
						$product_html .= '<span class="price">' . $product->get_price_html() . '</span>';
					$product_html .= '</a>';

					$product_html .= '<a href="' . esc_url( $product->get_permalink() ) . '" data-quantity="1" class="button product_type_variable add_to_cart_button" data-product_id="' . esc_attr( $product->get_id() ) . '" data-product_sku="' . esc_attr( $product->get_sku() ) . '" aria-label="' . esc_attr__( 'Select options for', 'your-text-domain' ) . ' ' . esc_attr( $product->get_name() ) . '" aria-describedby="' . esc_attr__( 'This product has multiple variants. The options may be chosen on the product page', 'your-text-domain' ) . '" rel="nofollow">' . esc_html__( 'Select options', 'your-text-domain' ) . '</a>';

					// $product_html .= '</div>';
					$product_html .= '<div class="product-description">' . $product->get_short_description() . '</div>';
				$product_html .= '</div>'; // #product-content
			
			$product_html .= '</div>'; // #product-inner

		$product_html .= '</li>';

		$products_html[] = $product_html;
	}

	wp_send_json_success(
		array(
			'success'        => true,
			'found_products' => count( $products ),
			'products'       => $products_html,
		)
	);
}
