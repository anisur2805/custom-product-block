<div class="custom-product-block-fe">
	<h3> <?php 
	
	// echo '<pre>';
	// 	  print_r( $attributes );
	// echo '</pre>';
    if ( ! class_exists( 'WooCommerce' ) ) {
        return;
    }
	print('<ul class="products grid grid-'.$attributes['itemsPerRow'].'">');
        $args = array(
            'post_type' => 'product',
            'posts_per_page' => $attributes['totalItems'],
			'order' => 'asc',
			'orderby'	=> $attributes['orderBy'],
            );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) {
            while ( $loop->have_posts() ) : $loop->the_post();
                wc_get_template_part( 'content', 'product' );

            endwhile;
        } else {
            echo __( 'No products found' );
        }
        wp_reset_postdata();
    ?>
</ul><!--/.products-->
</div>
