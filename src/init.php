<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package GBA
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function animate_gutenberg_block_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'animate-gutenberg-js', // Handle.
		plugins_url( '/dist/blocks.render.js', dirname( __FILE__ ) ), // Block Front-End JS.
		array('jquery'),// Dependency (yikes, I know…)
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.render.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Animate CSS & Styles.
	wp_enqueue_style('animate-css');
	wp_enqueue_style(
		'animate-gutenberg-style-css', // Handle.
		plugins_url( '/dist/animate.css', dirname( __FILE__ ) ), // Block Front-End CSS.
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'animate_gutenberg_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function animate_gutenberg_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'animate-gutenberg-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	/*wp_enqueue_style(
		'animate-gutenberg-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);*/
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'animate_gutenberg_editor_assets' );
