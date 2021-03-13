<?php

class AnimateBlocksAdmin
{

	public function __construct() {
		add_filter('plugin_action_links_' . plugin_basename(__DIR__), [$this, 'plugin_settings_page_link']);
		add_action('admin_menu', [$this, 'custom_plugin_page']);
		add_action('admin_init', [$this, 'register_settings']);
		add_action('admin_enqueue_scripts', [$this, 'enqueue_select2_jquery']);
	}

	public function plugin_settings_page_link(array $links) {
		return array_merge($links, ['<a href="' . admin_url('options-general.php?page=animate-wp-blocks') . '">Settings</a>']);
	}

	public function custom_plugin_page() {
		add_options_page(
				'Animate WP Blocks – Settings',
				'Animate Blocks',
				'manage_options',
				'animate-wp-blocks',
				[$this, 'options_page']
		);
	}

	public function register_settings() {
		register_setting('gb-animate-options', 'gb-animate-scroll-trigger');
	}

	public function enqueue_select2_jquery() {
		wp_register_style('select2css', '//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.css', false, '1.0', 'all');
		wp_register_script('select2', '//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.js', ['jquery'], '1.0', true);
		wp_enqueue_style('select2css');
		wp_enqueue_script('select2');
		wp_enqueue_script('select2-gba-admin', plugins_url('src/assets/admin-options-page.js', __DIR__), ['select2'], '1
	.0', true);
	}

	public function options_page() {
		?>
		<style type="text/css">
			.select2-container {
				margin: 0 2px 0 2px;
			}

			.tablenav.top #doaction, #doaction2, #post-query-submit {
				margin: 0px 4px 0 4px;
			}
		</style>
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

}
