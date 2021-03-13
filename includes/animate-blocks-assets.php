<?php

class AnimateBlocksAssets
{
	public function __construct() {
		add_action('init', [$this, 'enqueue_gb_animate_assets']);
	}

	function enqueue_gb_animate_assets() {
		// Register block styles for both frontend + backend.
		wp_register_style(
			'gb-animate-style-css',
			plugins_url('build/style-index.css', __DIR__),
			[], // dependencies are imported & pre-packaged
			'v2.0.3');

		// Register block editor script for backend.
		wp_register_script(
			'gb-animate-block-js',
			plugins_url('build/index.js', __DIR__),
			[],
			null,
			true
		);

		// Register block editor styles for backend.
		wp_register_style(
			'gb-animate-block-editor-css',
			plugins_url('build/index.css', __DIR__),
			['wp-edit-blocks'],
			null
		);

		// WP Localized globals. Use dynamic PHP stuff in JavaScript via `animateGlobal` object.
		wp_localize_script(
			'gb-animate-block-js',
			'animateGlobal',
			[
				'pluginDirPath' => plugin_dir_path(__DIR__),
				'pluginDirUrl'  => plugin_dir_url(__DIR__),
				'scrollTrigger' => get_option('gb-animate-scroll-trigger', 0),
			]
		);

		// Enqueue frontend script
		if (!is_admin()) {
			wp_enqueue_script(
				'gb-animate-animate-script',
				plugins_url('src/assets/animate.js', __DIR__),
				[],
				null,
				true
			);
			wp_localize_script(
				'gb-animate-animate-script',
				'animateGlobal',
				[
					'pluginDirPath' => plugin_dir_path(__DIR__),
					'pluginDirUrl'  => plugin_dir_url(__DIR__),
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

}
