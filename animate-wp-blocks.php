<?php
/**
 * Plugin Name:     Animate WP Blocks - Animate.css for Gutenberg
 * Description:     Add animation controls to each and every Gutenberg Block! Runs on Animate.css v4.
 * Version:         2.0.1
 * License:         GPL-2.0-or-later
 * Text Domain:     animate-wp-blocks
 *
 * @package         animate-wp-blocks
 */

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function gb_animate_block_assets()
{ // phpcs:ignore
    // Register block styles for both frontend + backend.
    wp_register_style(
        'gb_animate-style-css', // Handle.
        plugins_url('build/style-index.css', __FILE__), // Block style CSS.
        is_admin() ? array('wp-editor') : null, // Dependency to include the CSS after it.
        rand(111111, 999999) // filemtime( plugin_dir_path( __FILE__ ) . 'build/blocks.style.build.css' ) // Version: File modification time.
    );

    // Register block editor script for backend.
    wp_register_script(
        'gb_animate-block-js', // Handle.
        plugins_url('build/index.js', __FILE__), // Block.build.js: We register the block here. Built with Webpack.
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
        null, // filemtime( plugin_dir_path( __FILE__ ) . 'build/blocks.build.js' ), // Version: filemtime — Gets file modification time.
        true // Enqueue the script in the footer.
    );

    // Register block editor styles for backend.
    wp_register_style(
        'gb_animate-block-editor-css', // Handle.
        plugins_url('build/index.css', __FILE__), // Block editor CSS.
        array('wp-edit-blocks'), // Dependency to include the CSS after it.
        null // filemtime( plugin_dir_path( __FILE__ ) . 'build/blocks.editor.build.css' ) // Version: File modification time.
    );

    // WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
    wp_localize_script(
        'gb_animate-block-js',
        'cgbGlobal', // Array containing dynamic data for a JS Global.
        [
            'pluginDirPath' => plugin_dir_path(__FILE__),
            'pluginDirUrl'  => plugin_dir_url(__FILE__),
            // Add more data here that you want to access from `cgbGlobal` object.
        ]
    );

    // Enqueue frontend script
    if (!is_admin()) {
        wp_enqueue_script(
            'gb_animate-animate-script', // Handle.
            plugins_url('src/animate.js', __FILE__), // Block style CSS.
            array(), // Dependency to include the CSS after it.
            null,
            true
        );
    }

    /**
     * Register Gutenberg block on server-side.
     *
     * Register the block on server-side to ensure that the block
     * scripts and styles for both frontend and backend are
     * enqueued when the editor loads.
     *
     * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
     * @since 1.16.0
     */
    register_block_type(
        'dk/gb-animate',
        array(
            // Enqueue blocks.style.build.css on both frontend & backend.
            'style'         => 'gb_animate-style-css',
            // Enqueue blocks.build.js in the editor only.
            'editor_script' => 'gb_animate-block-js',
            // Enqueue blocks.editor.build.css in the editor only.
            'editor_style'  => 'gb_animate-block-editor-css',
        )
    );
}

// Hook: Block assets.
add_action('init', 'gb_animate_block_assets');
