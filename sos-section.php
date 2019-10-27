<?php
/**
 * Plugin Name: Story of Stuff Section Group Block 
 * Description: A wrapper block for Gutenberg in WordPress.
 * Author: Third Bear Solutions
 * Author URI: https://thirdbearsolutions.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: story-of-stuff-section-group
 * Domain Path: /languages/
 *
 * @package story-of-stuff-section-group
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'enqueue_block_editor_assets', 'sos_section_enqueue_block_editor_assets' );

function sos_section_enqueue_block_editor_assets() {
    // Enqueue our script
    wp_enqueue_script(
        'sos-section-js',
        esc_url( plugins_url( '/sos-section.js', __FILE__ ) ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        '1.0.0',
        true // Enqueue the script in the footer.
    );
}
