<?php
/**
 * Plugin Name:     Animate WP Blocks - Animate.css for Gutenberg
 * Description:     Add animation controls to each and every Gutenberg Block! Runs on Animate.css v4.
 * Version:         2.0.3
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


// TODO: Extract classes

add_action('init', 'gb_animate_block_assets');
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses  {wp-blocks} for block type registration & related functions.
 * @uses  {wp-element} for WP Element abstraction — structure of blocks.
 * @uses  {wp-i18n} to internationalize the block's text.
 * @uses  {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function gb_animate_block_assets() {
	// Register block styles for both frontend + backend.
	wp_register_style(
			'gb-animate-style-css',
			plugins_url('build/style-index.css', __FILE__),
			[], // dependencies are imported & pre-packaged
			'v2.0.3');

	// Register block editor script for backend.
	wp_register_script(
			'gb-animate-block-js',
			plugins_url('build/index.js', __FILE__),
			[],
			null,
			true
	);

	// Register block editor styles for backend.
	wp_register_style(
			'gb-animate-block-editor-css',
			plugins_url('build/index.css', __FILE__),
			['wp-edit-blocks'],
			null
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `animateGlobal` object.
	wp_localize_script(
			'gb-animate-block-js',
			'animateGlobal',
			[
					'pluginDirPath' => plugin_dir_path(__FILE__),
					'pluginDirUrl'  => plugin_dir_url(__FILE__),
					'scrollTrigger' => get_option('gb-animate-scroll-trigger', 0),
			]
	);

	// Enqueue frontend script
	if (!is_admin()) {
		wp_enqueue_script(
				'gb-animate-animate-script',
				plugins_url('src/assets/animate.js', __FILE__),
				[],
				null,
				true
		);
		wp_localize_script(
				'gb-animate-animate-script',
				'animateGlobal',
				[
						'pluginDirPath' => plugin_dir_path(__FILE__),
						'pluginDirUrl'  => plugin_dir_url(__FILE__),
						'scrollTrigger' => get_option('gb-animate-scroll-trigger', 0),
				]
		);
	}

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link  https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type('dkress/gb-animate', [// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'gb-animate-style-css', // Enqueue blocks.build.js in the editor only.
			'editor_script' => 'gb-animate-block-js', // Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'gb-animate-block-editor-css',
	]);
}


// Plugin Settings Page
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'gb_animate_settings_page');
function gb_animate_settings_page(array $links): array {
	return array_merge($links, ['<a href="' . admin_url('options-general.php?page=animate-wp-blocks') . '">Settings</a>']);
}

add_action('admin_menu', 'gb_animate_custom_plugin_page');
function gb_animate_custom_plugin_page() {
	add_options_page(
			'Animate WP Blocks – Settings',
			'Animate Blocks',
			'manage_options',
			'animate-wp-blocks',
			'gb_animate_options_page'
	);
}

add_action('admin_init', 'register_gb_animate_settings');
function register_gb_animate_settings() {
	register_setting('gb-animate-options', 'gb-animate-scroll-trigger');
}

add_action('admin_enqueue_scripts', 'enqueue_select2_jquery');
function enqueue_select2_jquery() {
	wp_register_style('select2css', '//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.css', false, '1.0', 'all');
	wp_register_script('select2', '//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.js', ['jquery'], '1.0', true);
	wp_enqueue_style('select2css');
	wp_enqueue_script('select2');
}

function gb_animate_options_page() {
	?>
	<style type="text/css">
		.select2-container {
			margin: 0 2px 0 2px;
		}

		.tablenav.top #doaction, #doaction2, #post-query-submit {
			margin: 0px 4px 0 4px;
		}
	</style>
	<script type='text/javascript'>
		jQuery(document).ready(function ($) {
			if( $( 'select' ).length > 0 ) {
				$( 'select' ).select2();
				$( document.body ).on( "click", function() {
					 $( 'select' ).select2();
				  });
			}
		});
	</script>
	<div class="wrap">
		<h1>Settings – Animate WP Blocks</h1>
		<p>Default settings for 'onScroll' elements:</p>
		<form method="post" action="options.php">
			<? settings_fields('gb-animate-options') ?>
			<? do_settings_sections('gb-animate-options') ?>
			<label for="gb-animate-scroll-trigger">
				<?= _('Start animation if element…', 'dkress/gb-animate') ?>
				<select
						name="gb-animate-scroll-trigger"
						value="<? echo esc_attr(get_option('gb-animate-scroll-trigger', 0)) ?>"
				>
					<option value="0">
						<?= _('…is partially inside viewport', 'dkress/gb-animate') ?>
					</option>
					<option value="1">
						<?= _('…completely fits into the viewport', 'dkress/gb-animate') ?>
					</option>
					<option value="2">
						<?= _('…is above or partially inside the viewport', 'dkress/gb-animate') ?>
					</option>
				</select>
			</label>
			<? submit_button() ?>
		</form>
	</div>
	<?php
}
