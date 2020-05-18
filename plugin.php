<?php
/**
 * Plugin Name: Animate Gutenberg — Animate.css 2 Gutenberg
 * Plugin URI: https://github.com/dkress59/wp-gutenberg-animate
 * Description: Bring any Gutenberg Block to life with Animate.css
 * Text Domain: dk-animate-gutenberg
 * Author: dkress59
 * Author URI: https://www.damiankress.de/
 * Version: 2.2.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GBA
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
