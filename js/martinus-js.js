(function () {
    tinymce.create('tinymce.plugins.martinusps', {
        init: function (ed, url) {
            ed.addButton('martinusps', {
                title: 'Martinus partnerský systém',
                image: url + '/martinus-16x16.png',
                onclick: function () {
                    ed.windowManager.open({
                        title: 'Nastavenie banneru',
                        body: [{type: 'textbox', name: 'url', label: 'Url knihy'},
                            {
                                type: 'listbox',
                                name: 'size',
                                minWidth: 300,
                                label: 'Veľkosť',
                                'values': [
                                    {text: 'Full banner (468x60)', value: 'full'},
                                    {text: 'Square (300x300)', value: 'square'},
                                    {text: 'Skyscraper (160x600)', value: 'skyscraper'},
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'color',
                                minWidth: 300,
                                label: 'Farba',
                                'values': [
                                    {value: 'white', text: 'Biela'},
                                    {value: 'violet', text: 'Fialová'},
                                    {value: 'brown', text: 'Hnedá'},
                                    {value: 'blue', text: 'Modrá'},
                                    {value: 'orange', text: 'Oranžová'},
                                    {value: 'teal', text: 'Tyrkysová'},
                                    {value: 'green', text: 'Zelená'},
                                    {value: 'yellow', text: 'Žltá'},
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'price',
                                minWidth: 300,
                                label: 'Cena',
                                'values': [
                                    {text: 'S cenou', value: '1'},
                                    {text: 'Bez ceny', value: '0'},
                                ]
                            },{
                                type: 'listbox',
                                name: 'align',
                                label: 'Zarovnanie',
                                'values': [
                                    {text: 'Žiadne', value: ''},
                                    {text: 'Vľavo', value: 'm-left'},
                                    {text: 'Stred', value: 'm-center'},
                                    {text: 'Vpravo', value: 'm-right'}
                                ]
                            }
                        ],
                        onsubmit: function (e) {

                            // Insert content when the window form is submitted
                            ed.insertContent('[martinus size="' + e.data.size + '" color="' + e.data.color + '" price="' + e.data.price + '" url="' + e.data.url + '" align="' + e.data.align + '" ]');
                        }
                    });
                }
            });
        },
        createControl: function (n, cm) {
            return null;
        },
        getInfo: function () {
            return {
                longname: "Martinus partnerský systém",
                author: 'Maxo Matos',
                authorurl: 'http://www.matos.sk',
                infourl: 'http://wp.matos.sk',
                version: "1.6"
            };
        }

    });

    tinymce.PluginManager.add('martinusps', tinymce.plugins.martinusps);
})();