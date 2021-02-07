<?php
/**
 * Plugin Name:     Animate WP Blocks - Animate.css for Gutenberg
 * Description:     Add animation controls to each and every Gutenberg Block! Runs on Animate.css v4.
 * Version:         2.0.1
 * Author:          Damian Kress
 * Author URI:      https://www.damiankress.de
 * License:         GPL-2.0-or-later
 * Text Domain:     animate-wp-blocks
 *
 * @package         animate-wp-blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'gb_animate_block_assets');
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function gb_animate_block_assets()
{
    // Register block styles for both frontend + backend.
    wp_register_style(
        'gb_animate-style-css',
        plugins_url('build/style-index.css', __FILE__),
        array(), // dependencies are imported & pre-packaged
        'v2.0.1'
    );

    // Register block editor script for backend.
    wp_register_script(
        'gb_animate-block-js',
        plugins_url('build/index.js', __FILE__),
        array(),
        null,
        true
    );

    // Register block editor styles for backend.
    wp_register_style(
        'gb_animate-block-editor-css',
        plugins_url('build/index.css', __FILE__),
        array('wp-edit-blocks'),
        null
    );

    // WP Localized globals. Use dynamic PHP stuff in JavaScript via `animateGlobal` object.
    wp_localize_script(
        'gb_animate-block-js',
        'animateGlobal',
        [
            'pluginDirPath' => plugin_dir_path(__FILE__),
            'pluginDirUrl'  => plugin_dir_url(__FILE__),
        ]
    );

    // Enqueue frontend script
    if (!is_admin()) {
        wp_enqueue_script(
            'gb_animate-animate-script',
            plugins_url('src/assets/animate.js', __FILE__),
            array(),
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
        'dkress/gb-animate',
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
