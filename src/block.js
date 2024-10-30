/**
 * Internal block libraries
 */
const {__} = wp.i18n;

const {registerBlockType} = wp.blocks;

const {
    InspectorControls,
    PlainText,
} = wp.editor;

const {
    PanelBody,
    TextControl,
    SelectControl,
} = wp.components;



/**
 * Example of a custom SVG path taken from fontastic
 */
// Import the element creator function (React abstraction layer)
const iconElement = wp.element.createElement;
const iconMartinus = iconElement('svg', { viewBox: "2 -2 40 40" },
    iconElement('path', { d: "M36.94 18.617l-4.314-4.314c-1.804-1.804-3.546-3.89-7.09.218l7.75 7.749-3.554 3.554L18.148 14.24c-1.893-1.893-3.723-3.726-7.016.291l14.946 14.945v.001l-3.553 3.553L4.55 15.056c9.806-13.877 14.488-7.166 17.56-3.953 6.957-7.326 10.177-4.417 14.485.063l3.897 3.897-3.552 3.554z" } )
);

/**
 * Register block
 */
export default registerBlockType('martinus-patnersky-system/shortcode-block', {
    // Block Title
    title: __('Martinus'),
    // Block Description
    description: __('Jednoduché vkladanie knižných bannerov'),
    // Block Category
    category: 'common',
    // Block Icon
    icon: iconMartinus,
    // Block Keywords
    keywords: [
        __('Martinus'),
        __('Partnerský systém'),
        __('Banner'),
    ],
    attributes: {
        url: {
            type: 'string',
            default: 'https://www.martinus.sk/?uItem=260571',
        },
        size: {
            type: 'string',
            default: 'full',
        },
        color: {
            type: 'string',
            default: 'white',
        },
        price: {
            type: 'boolean',
            default: 1,
        },
        align: {
            type: 'string',
            default: 'none',
        },
    },
    // Defining the edit interface
    edit: props => {
        const getShortCode = () => {
            return '[martinus size="' + props.attributes.size + '" color="' + props.attributes.color + '" price="' + props.attributes.price + '" url="' + props.attributes.url + '" align="' + props.attributes.align + '"]';
        }

        const setUrl = value => {
            props.setAttributes({url: value});
        };
        const setSize = value => {
            props.setAttributes({size: value});
        };
        const setColor = value => {
            props.setAttributes({color: value});
        };
        const setPrice = value => {
            props.setAttributes({price: value});
        };
        const setAlign = value => {
            props.setAttributes({align: value});
        };
        return [
            !!props.isSelected && (
                <InspectorControls key="inspector">
                    <PanelBody title={__('Nastavenie bannera')}>
                        <TextControl
                            label={__('URL knihy')}
                            value={props.attributes.url}
                            onChange={setUrl}
                        />

                    </PanelBody>
                    <SelectControl
                        key="size"
                        label={__('Veľkosť')}
                        value={props.attributes.size}
                        options={[
                            {label: __('Full banner (468x60)'), value: 'full',},
                            {label: __('Square (300x300)'), value: 'square',},
                            {label: __('Skyscraper (160x600)'), value: 'skyscraper',},
                        ]}
                        onChange={setSize}
                    />
                    <SelectControl
                        key="color"
                        label={__('Farba')}
                        value={props.attributes.color}
                        options={[
                            {label: __('Biela'), value: 'white',},
                            {label: __('Fialová'), value: 'violet',},
                            {label: __('Hnedá'), value: 'brown',},
                            {label: __('Modrá'), value: 'blue',},
                            {label: __('Oranžová'), value: 'orange',},
                            {label: __('Tyrkysová'), value: 'teal',},
                            {label: __('Zelená'), value: 'green',},
                            {label: __('Žltá'), value: 'yellow',},
                        ]}
                        onChange={setColor}
                    />
                    <SelectControl
                        key="price"
                        label={__('Cena')}
                        value={props.attributes.price}
                        options={[
                            {label: 'S cenou', value: '1'},
                            {label: 'Bez ceny', value: '0'},
                        ]}
                        onChange={setPrice}
                    />
                    <SelectControl
                        key="align"
                        label={__('Zarovnanie')}
                        value={props.attributes.align}
                        options={[
                            {label: 'Žiadne', value: 'none'},
                            {label: 'Vľavo', value: 'm-left'},
                            {label: 'Stred', value: 'm-center'},
                            {label: 'Vpravo', value: 'm-right'}
                        ]}
                        onChange={setAlign}
                    />
                </InspectorControls>
            ),

            (
                <div className="ctt-text">
                    <PlainText
                        key="shortcode"
                        format="string"
                        formattingControls={[]}
                        value={getShortCode()}
                    />
                </div>
            ),

        ];

    },
    // Defining the front-end interface
    save: props => {
        const getShortCode = () => {
            return '[martinus size="' + props.attributes.size + '" color="' + props.attributes.color + '" price="' + props.attributes.price + '" url="' + props.attributes.url + '" align="' + props.attributes.align + '"]';
        }
        return (getShortCode());
    },
});