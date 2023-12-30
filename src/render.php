<div class="custom-product-block-fe">
	<h3> <?php 
	
	// echo '<pre>';
	// 	  print_r( $attributes );
	// echo '</pre>';

    /*
    [totalItems] => 5
    [toggleField] => 1
    [content] => Custom Product Block
    [orderBy] => date
    [itemsPerRow] => 3
    [checkboxField] => 1
    */
    if ( ! class_exists( 'WooCommerce' ) ) {
        return;
    }

    print( '<div class="product-custom-header">');
        ?>
            <div class="custom-product-block-header">
                <div class="custom-product-block-header-left">
                    <div id="filter" title="Coming Soon">
                        <i class="fa fa-filter"></i>
                    </div>
                    <div class="showing-results">
                        Showing all <span><?php echo $attributes['totalItems']; ?></span> results
                    </div>
                </div>

                <div class="custom-product-block-header-right">
                    <select name="orderby" class="cpb-orderby" aria-label="Shop order">
                        <option value="menu_order" selected="selected">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                    </select>

                    <select name="items_per_row" class="cpb-items_per_row">
                        <option>Items Per Row</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                        
                    <div class="products-views">
                        <span class="grid active" data-view="grid">
                            <i class="fa fa-th-large"></i>
                        </span>
                        <span class="list" data-view="list">
                            <i class="fa fa-bars"></i>
                        </span>
                    </div>
                </div>
           </div>
        <?php
    print( '</div>');

    
	print('<ul class="products grid grid-'.$attributes['itemsPerRow'].'">');
        $args = array(
            'posts_per_page' => $attributes['totalItems'],
			'order' => 'asc',
			'orderby'	=> $attributes['orderBy'],
        );

        // $products_template_file = CPB_PLUGIN_DIR . 'templates/products.php';

        // if ( file_exists( $products_template_file ) ) {
        //     include $products_template_file;
        // }

        $products = wc_get_products( $args );

        $products_html = array();
    
        foreach ( $products as $product ) {
            echo '<li class="product type-product post-' . esc_attr( $product->get_id() ) . ' status-' . esc_attr( $product->get_status() ) . ' ' . implode( ' ', wc_get_product_class( '', $product->get_id() ) ) . '">';
                 echo '<div class="product-inner">';
    
                     echo '<div class="product-thumbnail">';
                         echo '<a href="' . esc_url( $product->get_permalink() ) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">';
                         echo '<img decoding="async" width="324" height="324" src="' . esc_url( wp_get_attachment_url( $product->get_image_id() ) ) . '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />';
                         echo '</a>';
                     echo '</div>'; // #product-thumbnail
    
                     echo '<div class="product-content">';
                         echo '<a href="' . esc_url( $product->get_permalink() ) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">';
                             echo '<h2 class="woocommerce-loop-product__title">' . esc_html( $product->get_name() ) . '</h2>';
                            if ( $product->is_on_sale() ) {
                                echo '<span class="onsale">' . esc_html__( 'Sale!', 'your-text-domain' ) . '</span>';
                            }
                             echo '<span class="price">' . $product->get_price_html() . '</span>';
                         echo '</a>';
    
                         echo '<a href="' . esc_url( $product->get_permalink() ) . '" data-quantity="1" class="button product_type_variable add_to_cart_button" data-product_id="' . esc_attr( $product->get_id() ) . '" data-product_sku="' . esc_attr( $product->get_sku() ) . '" aria-label="' . esc_attr__( 'Select options for', 'your-text-domain' ) . ' ' . esc_attr( $product->get_name() ) . '" aria-describedby="' . esc_attr__( 'This product has multiple variants. The options may be chosen on the product page', 'your-text-domain' ) . '" rel="nofollow">' . esc_html__( 'Select options', 'your-text-domain' ) . '</a>';
    
                        // </div>';
                         echo '<div class="product-description">' . $product->get_short_description() . '</div>';
                     echo '</div>'; // #product-content
                
                 echo '</div>'; // #product-inner
    
             echo '</li>';
        }
    ?>
</ul><!--/.products-->
</div>
