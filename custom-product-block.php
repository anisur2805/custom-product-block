<?php
/**
 * Plugin Name:       Custom Product Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-product-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function custom_product_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'custom_product_block_init' );

require_once __DIR__ . '/functions.php';

define('CPB_PLUGIN_DIR', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'cpb_enqueue_scripts');
function cpb_enqueue_scripts() {
	wp_enqueue_script( 'cpb-main', plugins_url( 'assets/js/main.js', __FILE__ ), array('jquery'), '1.0.0', 'all' );
	wp_localize_script( 'cpb-main', 'cpb', array(
		'ajaxurl' => admin_url( 'admin-ajax.php' ),
	));
}