import { h, makeRenderLoop } from 'nimble';

const target = <HTMLElement>document.getElementById('frame');

type SocialIcon = {
    name: string,
    path: string,
    backgroundColor?: string
};

type State = {
    route: Location,
    socialIcons: {
        [social: string]: {
            brandGuideline: string,
            icons: SocialIcon[]
        }
    }
};

const socialIcons = {
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
            // { name: 'icon-black', path: '/res/instagram/icon-black.ext' },
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

const affect = makeRenderLoop<State>(
    target,
    {
        route: window.location,
        socialIcons
    },
    function (state, affect, changes) {
        return h('div.app', [
            h('div.title', 'Social Icons'),
            h(`div.page`, [
                h('div.format', [
                    // h(`button.skinny`, `PNG`),
                    // h(`button.skinny`, `SVG`)
                ]),
                h('div.body-cont', [
                    makeSelectRow(state, affect),
                    makePageBody(state, affect)
                ]),
                makeSocialFooter()
            ]),
        ])
    }
);

function makeSelectRow(state: State, affect: Affect) {
    return h('div.social-selector', [
        h(`a${state.route.hash === 'twitter' ? '.selected' : ''}`, { href: '#twitter' }, 'Twitter'),
        h(`a${state.route.hash === 'facebook' ? '.selected' : ''}`, { href: '#facebook' }, 'Facebook'),
        h(`a${state.route.hash === 'instagram' ? '.selected' : ''}`, { href: '#instagram' }, 'Instagram'),
        // h(`a${state.route.hash === 'google' ? '.selected' : ''}`, { href: '#google' }, 'Google'),
        h(`a${state.route.hash === 'github' ? '.selected' : ''}`, { href: '#github' }, 'GitHub'),
        h(`a${state.route.hash === 'pinterest' ? '.selected' : ''}`, { href: '#pinterest' }, 'Pinterest')
    ]);
}

function makePageBody(state: State, affect: Affect) {
    const iconGroup = state.socialIcons[state.route.hash.slice(1)] || state.socialIcons.twitter;
    return h('div.body', [
        h('div.icon-cont',
            iconGroup.icons.map(renderIcon)
        ),
        h('div.body-footer', [
            h('a', { href: iconGroup.brandGuideline, target: '_blank' }, 'View Brand Guidelines')
        ])
    ]);
}

function makeSocialFooter() {
    return h('div.share', {}, [
        h('div', [
            h('a.button.no-style', {
                href: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fsocialicons.co%2F&text=The%20go-to%20place%20for%20social%20vector%20and%20png%20icons%20via%20%40JReeve0',
            }, [
                    h('object.icon', {
                        type: 'image/svg+xml',
                        data: '/res/twitter/logo-black.svg',
                    })
                ]),
            h('a.button.no-style', {
                href: 'https://github.com/ISNIT0/socialicons',
            }, [
                    h('img.icon', {
                        src: '/res/github/mark-black.png',
                    })
                ])
        ])
    ]);
}


function renderIcon(icon: SocialIcon) {
    const filePath = icon.path.replace('.ext', '.svg');
    const imgIsSVG = !!~filePath.indexOf('.svg');
    const fileName = filePath.split('/').slice(-1)[0];

    return h('div.icon', {}, [
        (imgIsSVG ?
            h('object.shadowFilter', {
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundColor: icon.backgroundColor
                },
                type: 'image/svg+xml',
                data: icon.path.replace('.ext', '.svg'),
                // alt: icon.name,
                // name: icon.name
            }) : h('img', {
                style: {
                    width: '100%',
                    backgroundColor: icon.backgroundColor
                },
                src: filePath
            })),
        h('div.controls', [
            h('button.no-style', {
                onclick() {
                    // TODO: Download SVG OR PNG
                    const download = (window as any).download;

                    var x = new XMLHttpRequest();
                    x.open('GET', filePath, true);
                    x.responseType = 'blob';
                    x.onload = function (e) { download(x.response, fileName, 'image/svg+xml'); }
                    x.send();
                }
            }, [
                    h('img', { src: 'res/download.svg' })
                ]),
            h('button.no-style', {
                onclick() {
                    prompt('Image URL', `https://socialicons.co${filePath}`);
                }
            }, [
                    h('img', { src: 'res/link.svg' })
                ]),
        ])
    ]);
}


window.addEventListener('popstate', function () {
    affect.set('route', window.location);
});