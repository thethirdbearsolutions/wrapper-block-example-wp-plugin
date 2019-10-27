/**
 * BLOCK: wrapper-block-example/background
 */

import classNames from 'classnames'; // Used to to join classes together

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	Fragment, // Used to wrap our edit component and only have one root element
} = wp.element;
const {
	InnerBlocks, // Allows it to place child blocks inside our block
	InspectorControls, // We place our select control inside the inspector contorls which show up on the right of the editor
} = wp.editor;
const {
	PanelBody, // A panel where we place our select control in (creates a colapsable element)
	SelectControl, // Our select control to choose the background color
} = wp.components;

registerBlockType( 'sos-section/sos-section-group', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Story of Stuff Section Group', 'sos-section-group' ), // Block title.
	icon: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Story of Stuff Section', 'sos-section-group' ),
	],

	attributes: {
	  color: {
	    type: 'string',
	  },
          pattern: {
            type: 'string',
          },
          topSlant: {
            type: 'string',
          },
          bottomSlant: {
            type: 'string',
          },
          widthExtent: {
            type: 'string',
          },
	},

	edit( { attributes, setAttributes, className } ) {
		const {
		  color = '',
                  pattern = '',
                  topSlant = '',
                  bottomSlant = '',
                  widthExtent = '',
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Story of Stuff Section Settings', 'story-of-stuff-section-group' ) }
						initialOpen={ true }
					>
						<SelectControl
							label={ __( 'Background Color', 'story-of-stuff-section-group' ) }
							value={ color }
							options={ [
								{
									value: '',
									label: __( 'No Background Color', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--light-blue',
									label: __( 'Light Blue', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--dark-blue',
									label: __( 'Dark Blue', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--red',
									label: __( 'Red', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--yellow',
									label: __( 'Yellow', 'story-of-stuff-section-group' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { color: selectedOption } ) }
						/>
						<SelectControl
							label={ __( 'Pattern', 'story-of-stuff-section-group' ) }
							value={ pattern }
							options={ [
								{
									value: '',
									label: __( 'No Pattern', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--wave',
									label: __( 'Wave', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--noodles',
									label: __( 'Noodles', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--ramen',
									label: __( 'Ramen', 'story-of-stuff-section-group' ),
								},
								{
									value: 'patterned--halfshell',
									label: __( 'Halfshell', 'story-of-stuff-section-group' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { pattern: selectedOption } ) }
						/>
						<SelectControl
							label={ __( 'Top Slant', 'story-of-stuff-section-group' ) }
							value={ topSlant }
							options={ [
								{
									value: '',
									label: __( 'No Slant', 'story-of-stuff-section-group' ),
								},
								{
									value: 'slant--top-up',
									label: __( 'Slant upwards from top left to right', 'story-of-stuff-section-group' ),
								},
								{
									value: 'slant--top-down',
									label: __( 'Slant downwards from top left to right', 'story-of-stuff-section-group' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { topSlant: selectedOption } ) }
		                                />
						<SelectControl
							label={ __( 'Bottom Slant', 'story-of-stuff-section-group' ) }
							value={ bottomSlant }
							options={ [
								{
									value: '',
									label: __( 'No Slant', 'story-of-stuff-section-group' ),
								},
								{
									value: 'slant--bottom-up',
									label: __( 'Slant upwards from bottom left to right', 'story-of-stuff-section-group' ),
								},
								{
									value: 'slant--bottom-down',
									label: __( 'Slant downwards from bottom left to right', 'story-of-stuff-section-group' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { bottomSlant: selectedOption } ) }
		                                />
		    				<SelectControl
							label={ __( 'Extend to full width?', 'story-of-stuff-section-group' ) }
							value={ widthExtent }
							options={ [
								{
									value: '',
									label: __( 'No', 'story-of-stuff-section-group' ),
								},
								{
									value: 'flush-left',
									label: __( 'Left Side Only', 'story-of-stuff-section-group' ),
								},
								{
									value: 'flush-right',
									label: __( 'Right Side Only', 'story-of-stuff-section-group' ),
								},
								{
									value: 'flush-left-and-right',
									label: __( 'Full Width - Left & Right', 'story-of-stuff-section-group' ),
								},
							] }
							onChange={ ( selectedOption ) => setAttributes( { widthExtent: selectedOption } ) }
		    />
                    </PanelBody>
				</InspectorControls>
				<div
					className={ className }
				>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const {
		  color = '',
                  pattern = '',
                  topSlant = '',
                  bottomSlant = '',
                  widthExtent = '',
		} = attributes;

	  let styles = {};
	  let classes = className;

          let patterned = pattern || color ? 'patterned' : '';
          let slanted = topSlant || bottomSlant ? 'slant' : '';
          
	  // Use classnames library to join all classes together
	  classes = classNames( patterned, color, pattern, slanted, topSlant, bottomSlant, widthExtent, classes );
	  return (
			<div
				className={ classes }
			><div className='container'>
				<InnerBlocks.Content />
			</div></div>
	  );
	},
} );
