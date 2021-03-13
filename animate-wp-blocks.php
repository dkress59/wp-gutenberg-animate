<?php
/**
 * Plugin Name:     Animate WP Blocks - Animate.css for Gutenberg
 * Description:     Add animation controls to each and every Gutenberg Block! Runs on Animate.css v4. <strong>Now with onScroll support!</strong>
 * Version:         2.0.2
 * Author:          Damian Kress
 * Author URI:      https://www.damiankress.de
 * License:         GPL-2.0-or-later
 * Text Domain:     animate-wp-blocks
 * @package         animate-wp-blocks
 */


// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}


require_once 'includes/animate-blocks-assets.php';
new AnimateBlocksAssets();

require_once 'includes/admin-options-page.php';
new AnimateBlocksAdmin();
