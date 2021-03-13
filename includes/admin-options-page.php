<?php

class AnimateBlocksAdmin
{
	public $option_group = 'gb-animate-options';
	public $option_name  = 'gb-animate-scroll-trigger';

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
				_('Animate WP Blocks – Settings', 'dkress/gb-animate'),
				_('Animate Blocks', 'dkress/gb-animate'),
				'manage_options',
				'animate-wp-blocks',
				[$this, 'options_page']
		);
	}

	public function register_settings() {
		register_setting($this->option_group, $this->option_name);
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
				margin: 0;
			}

			#description {
				display: flex;
				flex-wrap: wrap;
			}

			#description > h2 {
				flex-basis: 100%;
				padding: 0;
			}

			#description > div {
				flex: 1;
				flex-basis: 320px;
				margin-right: 1em;
			}

			#description p + p {
				margin-top: -1em;
			}
		</style>
		<h1><?= _('Settings – Animate WP Blocks', 'dkress/gb-animate') ?></h1>
		<div class="wrap">
			<div id="poststuff">
				<div id="post-body" class="metabox-holder columns-2">
					<? $this->metabox() ?>
					<div id="post-body-content">
						<div id="description">
							<h2><?= _('There are seven animation controls available on every Gutenberg Block:',
									  'dkress/gb-animate') ?></h2>
							<div>
								<h3><?= _('Type', 'dkress/gb-animate') ?></h3>
								<p><?= _('You can choose from almost a hundred animation types for your blocks and you will get a preview of the animation directly inside of Gutenberg.', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('Repetitions', 'dkress/gb-animate') ?></h3>
								<p><?= _('Your animations can be repeated for several times. The values of "0" and "1" will both result in an one-off animation (1 iteration, 0 repetitions).', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('Duration', 'dkress/gb-animate') ?></h3>
								<p><?= _('The duration of your animations can be controlled by passing in a value in milliseconds for this animation control.', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('Delay', 'dkress/gb-animate') ?></h3>
								<p><?= _('With this animation control your animations can be delayed for any number of milliseconds.', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('On scroll', 'dkress/gb-animate') ?></h3>
								<p><?= _('When set to "true", the animation of your block will only begin if your block is inside of the viewport (for example: after scrolling downwards).', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('Relative', 'dkress/gb-animate') ?></h3>
								<p><?= _('If "On scroll" is set to true, you can pass in the CSS selector for another element in here. The animation of your block will then only begin if this "relative" element is inside of the viewport.', 'dkress/gb-animate') ?></p>
							</div>
							<div>
								<h3><?= _('Condition', 'dkress/gb-animate') ?></h3>
								<h4><?= _('If "On scroll" is set to true, you have three options to control how the  plugins should determine, if an element is considered being inside of the viewport:', 'dkress/gb-animate') ?></h4>
								<p>
									<strong><?= _('Partial:', 'dkress/gb-animate') ?></strong> <?= _('The viewport might not entirely cover the block, but at least parts of the block are positioned inside of it.', 'dkress/gb-animate') ?>
								</p>
								<p>
									<strong><?= _('Complete:', 'dkress/gb-animate') ?></strong> <?= _('Only animates if the entire element fits into the viewport, where the block\'s width and its height are both taken into account).', 'dkress/gb-animate') ?>
								</p>
								<p>
									<strong><?= _('Above:', 'dkress/gb-animate') ?></strong> <?= _('Your block is partially inside of it, or above of it (for example, it has been scrolled-past, or after a page reload).', 'dkress/gb-animate') ?>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?
	}

	public function metabox() {
		?>
		<div id="postbox-container-1" class="postbox-container">

			<div class="meta-box-sortables">

				<div class="postbox">
					<h3><span><?= _('Default Condition', 'dkress/gb-animate') ?></span></h3>
					<div class="inside">
						<form method="post" action="options.php">
							<? settings_fields($this->option_group) ?>
							<? do_settings_sections($this->option_group) ?>
							<label for="<?= $this->option_name ?>">
								<?= _('Start animation if element', 'dkress/gb-animate') ?>
								<select
										name="<?= $this->option_name ?>"
										value="<?= esc_attr(get_option($this->option_name, 0)) ?>"
								>
									<option value="0">
										<?= _('is partially inside viewport', 'dkress/gb-animate') ?>
									</option>
									<option value="1">
										<?= _('completely fits into the viewport', 'dkress/gb-animate') ?>
									</option>
									<option value="2">
										<?= _('is above or partially inside the viewport', 'dkress/gb-animate') ?>
									</option>
								</select>
							</label>
							<? submit_button() ?>
						</form>
					</div> <!-- .inside -->
				</div> <!-- .postbox -->

			</div> <!-- .meta-box-sortables -->

		</div>
		<?
	}

}
