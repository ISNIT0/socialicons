"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nimble_1 = require("nimble");
var target = document.getElementById('frame');
var socialIcons = {
    twitter: {
        brandGuideline: 'https://about.twitter.com/en_us/company/brand-resources.html',
        icons: [{
                name: 'Square Blue',
                path: '/res/twitter/square-blue.ext'
            }, {
                name: 'Square White',
                path: '/res/twitter/square-white.ext'
            }, {
                name: 'Rounded Square Blue',
                path: '/res/twitter/rounded-square-blue.ext'
            }, {
                name: 'Rounded Square White',
                path: '/res/twitter/rounded-square-white.ext'
            }, {
                name: 'Circle Blue',
                path: '/res/twitter/circle-blue.ext'
            }, {
                name: 'Circle White',
                path: '/res/twitter/circle-white.ext'
            }, {
                name: 'Logo Blue',
                path: '/res/twitter/logo-blue.ext'
            }, {
                name: 'Logo White',
                path: '/res/twitter/logo-white.ext'
            }]
    },
    facebook: {
        brandGuideline: 'https://facebookbrand.com/',
        icons: [{
                name: 'F Blue',
                path: '/res/facebook/f-blue.ext'
            }, {
                name: 'F White',
                path: '/res/facebook/f-white.ext'
            }, {
                name: 'Like',
                path: '/res/facebook/like.ext'
            }, {
                name: 'Messenger',
                path: '/res/facebook/messenger.ext'
            }, {
                name: 'Thumb',
                path: '/res/facebook/thumb.ext'
            }, {
                name: 'Find Us',
                path: '/res/facebook/find-us.ext'
            }, {
                name: 'FB Live',
                path: '/res/facebook/fb-live.ext'
            }]
    },
    google: {
        brandGuideline: 'https://www.google.com/permissions/',
        icons: [
            { name: 'logo_admin', path: '/res/google/logo_admin_128px.png' },
            { name: 'logo_calendar', path: '/res/google/logo_calendar_128px.png' },
            { name: 'logo_contacts', path: '/res/google/logo_contacts_128px.png' },
            { name: 'logo_docs', path: '/res/google/logo_docs_128px.png' },
            { name: 'logo_drive', path: '/res/google/logo_drive_128px.png' },
            { name: 'logo_forms', path: '/res/google/logo_forms_128px.png' },
            { name: 'logo_gmail', path: '/res/google/logo_gmail_128px.png' },
            { name: 'logo_google_cloud_search', path: '/res/google/logo_google_cloud_search_128px.png' },
            { name: 'logo_google_plus', path: '/res/google/logo_google_plus_128px.png' },
            { name: 'logo_groups', path: '/res/google/logo_groups_128px.png' },
            { name: 'logo_hangouts', path: '/res/google/logo_hangouts_128px.png' },
            { name: 'logo_keep', path: '/res/google/logo_keep_128px.png' },
            { name: 'logo_meet', path: '/res/google/logo_meet_128px.png' },
            { name: 'logo_mobile', path: '/res/google/logo_mobile_128px.png' },
            { name: 'logo_sheets', path: '/res/google/logo_sheets_128px.png' },
            { name: 'logo_sites', path: '/res/google/logo_sites_128px.png' },
            { name: 'logo_slides', path: '/res/google/logo_slides_128px.png' },
            { name: 'logo_vault', path: '/res/google/logo_vault_128px.png' }
        ]
    },
    github: {
        brandGuideline: 'https://github.com/logos',
        icons: [
            { name: 'logo black', path: '/res/github/logo-black.ext' },
            { name: 'logo white', path: '/res/github/logo-white.ext' },
            { name: 'mark black', path: '/res/github/mark-black.png' },
            { name: 'mark white', path: '/res/github/mark-white.png', backgroundColor: 'rgba(0,0,0,0.75)' },
            { name: 'octocat', path: '/res/github/octocat.png' },
        ]
    },
    instagram: {
        brandGuideline: 'https://instagram-brand.com/',
        icons: [
            { name: 'icon-color', path: '/res/instagram/icon-color.png' },
            { name: 'icon-black', path: '/res/instagram/icon-black.png' },
            { name: 'igtv color', path: '/res/instagram/igtv-color.png' },
            { name: 'igtv black', path: '/res/instagram/igtv-black.png' },
            { name: 'boomerang', path: '/res/instagram/boomerang.png' },
            { name: 'hyperlapse', path: '/res/instagram/hyperlapse.png' },
            { name: 'layout', path: '/res/instagram/layout.png' },
        ]
    },
    pinterest: {
        brandGuideline: 'https://business.pinterest.com/en/pinterest-brand-guidelines',
        icons: [
            { name: 'badge red', path: '/res/pinterest/badge-red.ext' },
            { name: 'badge white', path: '/res/pinterest/badge-white.ext' },
        ]
    }
};
var affect = nimble_1.makeRenderLoop(target, {
    route: window.location,
    socialIcons: socialIcons
}, function (state, affect, changes) {
    return nimble_1.h('div.app', [
        nimble_1.h('div.title', 'Social Icons'),
        nimble_1.h("div.page", [
            nimble_1.h('div.format', [
            // h(`button.skinny`, `PNG`),
            // h(`button.skinny`, `SVG`)
            ]),
            nimble_1.h('div.body-cont', [
                makeSelectRow(state, affect),
                makePageBody(state, affect)
            ]),
            nimble_1.h('div.share', [
            // h('a', 'TW'),
            // h('a', 'GH')
            ])
        ]),
    ]);
});
function makeSelectRow(state, affect) {
    return nimble_1.h('div.social-selector', [
        nimble_1.h("a" + (state.route.hash === 'twitter' ? '.selected' : ''), { href: '#twitter' }, 'Twitter'),
        nimble_1.h("a" + (state.route.hash === 'facebook' ? '.selected' : ''), { href: '#facebook' }, 'Facebook'),
        nimble_1.h("a" + (state.route.hash === 'instagram' ? '.selected' : ''), { href: '#instagram' }, 'Instagram'),
        // h(`a${state.route.hash === 'google' ? '.selected' : ''}`, { href: '#google' }, 'Google'),
        nimble_1.h("a" + (state.route.hash === 'github' ? '.selected' : ''), { href: '#github' }, 'GitHub'),
        nimble_1.h("a" + (state.route.hash === 'pinterest' ? '.selected' : ''), { href: '#pinterest' }, 'Pinterest')
    ]);
}
function makePageBody(state, affect) {
    var iconGroup = state.socialIcons[state.route.hash.slice(1)] || state.socialIcons.twitter;
    return nimble_1.h('div.body', [
        nimble_1.h('div.icon-cont', iconGroup.icons.map(renderIcon)),
        nimble_1.h('div.body-footer', [
            nimble_1.h('a', { href: iconGroup.brandGuideline, target: '_blank' }, 'View Brand Guidelines')
        ])
    ]);
}
function renderIcon(icon) {
    var filePath = icon.path.replace('.ext', '.svg');
    var imgIsSVG = !!~filePath.indexOf('.svg');
    var fileName = filePath.split('/').slice(-1)[0];
    return nimble_1.h('div.icon', {}, [
        (imgIsSVG ?
            nimble_1.h('object.shadowFilter', {
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundColor: icon.backgroundColor
                },
                type: 'image/svg+xml',
                data: icon.path.replace('.ext', '.svg'),
            }) : nimble_1.h('img', {
            style: {
                width: '100%',
                backgroundColor: icon.backgroundColor
            },
            src: filePath
        })),
        nimble_1.h('div.controls', [
            nimble_1.h('button.no-style', {
                onclick: function () {
                    // TODO: Download SVG OR PNG
                    var download = window.download;
                    var x = new XMLHttpRequest();
                    x.open('GET', filePath, true);
                    x.responseType = 'blob';
                    x.onload = function (e) { download(x.response, fileName, 'image/svg+xml'); };
                    x.send();
                }
            }, [
                nimble_1.h('img', { src: 'res/download.svg' })
            ]),
            nimble_1.h('button.no-style', {
                onclick: function () {
                    prompt('Image URL', "https://socialicons.io" + filePath);
                }
            }, [
                nimble_1.h('img', { src: 'res/link.svg' })
            ]),
        ])
    ]);
}
window.addEventListener('popstate', function () {
    affect.set('route', window.location);
});
