(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
            makeSocialFooter()
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
function makeSocialFooter() {
    return nimble_1.h('div.share', {}, [
        nimble_1.h('div', [
            nimble_1.h('a.button.no-style', {
                href: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fsocialicons.co%2F&text=The%20go-to%20place%20for%20social%20vector%20and%20png%20icons%20via%20%40JReeve0',
            }, [
                nimble_1.h('object.icon', {
                    type: 'image/svg+xml',
                    data: '/res/twitter/logo-black.svg',
                })
            ]),
            nimble_1.h('a.button.no-style', {
                href: 'https://github.com/ISNIT0/socialicons',
            }, [
                nimble_1.h('img.icon', {
                    src: '/res/github/mark-black.png',
                })
            ])
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
                    prompt('Image URL', "https://socialicons.co" + filePath);
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

},{"nimble":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var dataModEffectDefinition = {
    kind: 'dataModRequest',
    handler: function (state, effect) {
        effect.action = effect.action || 'set';
        if (!effect.keypath) {
            console.warn("Invalid keypath value [" + effect.keypath + "]");
            return state;
        }
        if (effect.action === 'custom') {
            var curVal = utils_1.get(state, effect.keypath);
            effect.arg = effect.arg(curVal);
        }
        else if (effect.action === 'push') {
            var curVal = utils_1.get(state, effect.keypath);
            if (!Array.isArray(curVal)) {
                console.warn("Pushing to non-array " + JSON.stringify(curVal) + " - replacing value with empty array");
                curVal = [];
            }
            effect.arg = curVal.concat(effect.arg);
        }
        else if (effect.action === 'add') {
            var curVal = utils_1.get(state, effect.keypath);
            if (!(curVal instanceof Set)) {
                console.warn("Adding to non-set " + JSON.stringify(curVal) + " - replacing value with empty set");
                curVal = new Set([]);
            }
            effect.arg = curVal.add(effect.arg);
        }
        else if (effect.action === 'delete') {
            var kpParts = effect.keypath.split('.');
            var deleteKey = kpParts[kpParts.length - 1];
            var newKp = effect.keypath.split('.').slice(0, -1).join('.');
            var curVal = utils_1.get(state, newKp);
            if (!curVal)
                return state;
            if (Array.isArray(curVal) && !isNaN(Number(deleteKey))) {
                curVal.splice(Number(deleteKey), 1);
            }
            else if (curVal[deleteKey] instanceof Set) {
                /*if (curVal[deleteKey].size === 1 || !effect.arg) {
                    delete curVal[deleteKey];
                } else {*/
                curVal[deleteKey].delete(effect.arg);
                curVal = curVal[deleteKey];
                newKp += ('.' + deleteKey);
                /*}*/
            }
            else {
                delete curVal[deleteKey];
            }
            effect.arg = curVal;
            effect.keypath = newKp;
        }
        return utils_1.set(state, effect.keypath, effect.arg);
    }
};
exports.default = dataModEffectDefinition;

},{"./utils":5}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function effectHandler(done, state, effectHandlers) {
    var affect = function Affect(effects, handler) {
        if (!Array.isArray(effects)) {
            console.log("Triggering effect: ", effects);
            effects = [effects];
        }
        else {
            console.log("Triggering [" + effects.length + "] effects: ", effects);
        }
        // TODO: Pretty dataModRequest logging:
        // data.number   | 1 -> 2
        // data.name     | undefined -> "Joe"
        var acc = state;
        var dataMods = [];
        var ret = [];
        for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
            var eff = effects_1[_i];
            var effDefinition = effectHandlers[eff.kind];
            if (!effDefinition) {
                console.warn("Invalid effect kind, could not find [" + eff.kind + "]");
            }
            else {
                if (eff.kind === 'dataModRequest') {
                    if (eff.keypath)
                        dataMods.push(eff.keypath); // Custom type doesn't have a kp
                    var res = effDefinition.handler(acc, eff, affect);
                    if (res && !(res instanceof Promise)) {
                        ret.push(acc = res);
                    }
                    else {
                        console.warn("Expected dataModRequest to return a state value, but instead got [" + res + "]");
                    }
                }
                else {
                    ret.push(effDefinition.handler(acc, eff, affect));
                }
            }
        }
        if (dataMods.length) {
            done(acc, dataMods);
        }
        if (handler) {
            handler(ret);
        }
        console.log("New State:", acc);
    };
    affect.set = function (kp, value) {
        affect({
            kind: 'dataModRequest',
            action: 'set',
            keypath: kp,
            arg: value
        });
    };
    affect.delete = function (kp, value) {
        affect({
            kind: 'dataModRequest',
            action: 'delete',
            keypath: kp,
            arg: value
        });
    };
    affect.push = function (kp, value) {
        affect({
            kind: 'dataModRequest',
            action: 'push',
            keypath: kp,
            arg: value
        });
    };
    affect.add = function (kp, value) {
        affect({
            kind: 'dataModRequest',
            action: 'add',
            keypath: kp,
            arg: value
        });
    };
    return affect;
}
;
exports.default = effectHandler;

},{}],4:[function(require,module,exports){
"use strict";
///<reference path="./index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var ultradom_1 = require("ultradom");
var dataModEffect_1 = require("./dataModEffect");
var utils_1 = require("./utils");
exports.get = utils_1.get;
exports.set = utils_1.set;
var effectHandler_1 = require("./effectHandler");
var virtualHyperscript_1 = require("./virtualHyperscript");
var h = virtualHyperscript_1.default(ultradom_1.h);
exports.h = h;
function makeRenderLoop(target, state, renderApp, effectHandlers) {
    if (effectHandlers === void 0) { effectHandlers = []; }
    if (!target) {
        throw new Error("Please supply a valid target");
    }
    var handlersXKind = utils_1.deepMerge({}, {
        dataModRequest: dataModEffect_1.default
    }, effectHandlers.reduce(function (acc, handler) {
        acc[handler.kind] = handler;
        return acc;
    }, {}));
    var bufferedUpdateState = utils_1.bufferWithTime(function updateState(args) {
        if (args.length) {
            // [[newState, changes], [newState, changes]]
            var changes = args.reduce(function (acc, val) { return acc.concat(val[1]); }, []);
            var newState = args[args.length - 1][0];
            state = newState;
            var $frame = renderApp(utils_1.deepMerge({}, state), effectHandler_1.default(bufferedUpdateState, state, handlersXKind), changes);
            if ($frame) {
                ultradom_1.render($frame, target);
            }
            else {
                // Not yet ready to render
            }
        }
    }, 1, function () {
    });
    bufferedUpdateState(state, []);
    return effectHandler_1.default(bufferedUpdateState, state, handlersXKind);
}
exports.makeRenderLoop = makeRenderLoop;
var nimble = {
    makeRenderLoop: makeRenderLoop,
    h: h,
    get: utils_1.get,
    set: utils_1.set
};
if (window && !window['nimble']) {
    window['nimble'] = nimble;
}

},{"./dataModEffect":2,"./effectHandler":3,"./utils":5,"./virtualHyperscript":6,"ultradom":7}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(obj, key) {
    if (!obj)
        return null;
    var dot = '.';
    var word = '';
    var value = obj;
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var char = key_1[_i];
        if (char != dot) {
            word += char;
        }
        else {
            value = value[word];
            if (value === undefined || value === null)
                return value;
            word = '';
        }
    }
    return value[word];
}
exports.get = get;
function set(obj, path, value) {
    var parts = path.split('.');
    var target = obj;
    var last = parts.pop();
    if (!last) {
        console.warn("Invalid keypath in 'set' [" + path + "]");
        return obj;
    }
    while (parts.length) {
        var part = parts.shift();
        if (part) {
            if (!target[part])
                target[part] = {};
            target = target[part];
        }
    }
    target[last] = value;
    return obj;
}
exports.set = set;
function deepMerge(destination) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var source;
    for (var sI = 0; sI <= sources.length; source = sources[sI++]) {
        for (var property in source) {
            if (source[property] && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepMerge(destination[property], source[property]);
            }
            else {
                destination[property] = source[property];
            }
        }
    }
    return destination;
}
exports.deepMerge = deepMerge;
function bufferWithTime(func, ms, handler) {
    if (typeof func !== 'function') {
        throw new Error("[bufferWithTime] Expected a function, but got [" + typeof func + "]");
    }
    else {
        var bufferTimer_1;
        var bufferedArgs_1 = [];
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            bufferedArgs_1.push(args);
            if (bufferTimer_1) {
                clearTimeout(bufferTimer_1);
            }
            bufferTimer_1 = setTimeout(function () {
                var argsToUse = bufferedArgs_1.slice();
                bufferedArgs_1 = [];
                handler(func(argsToUse));
            }, ms);
        };
    }
}
exports.bufferWithTime = bufferWithTime;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript
function isChildren(children) {
    return !children ||
        Array.isArray(children) ||
        typeof children === 'string' ||
        children.hasOwnProperty('name');
}
function makeVirtualHyperscript(uH) {
    return function wrappedHyperscript(tagName, properties, children) {
        var tag, props;
        if (!children && isChildren(properties)) {
            children = properties;
            props = {};
        }
        props = props || properties || {};
        tag = parseTag(tagName, props);
        return uH(tag, props, children || null);
    };
}
exports.default = makeVirtualHyperscript;
var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;
function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }
    var noId = !(props.hasOwnProperty('id'));
    var tagParts = tag.split(classIdSplit);
    var tagName = null;
    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }
    var classes = [];
    var part;
    var type;
    var i;
    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];
        if (!part) {
            continue;
        }
        type = part.charAt(0);
        if (!tagName) {
            tagName = part;
        }
        else if (type === '.') {
            classes.push(part.substring(1, part.length));
        }
        else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }
    if (classes.length) {
        if (props.className) {
            classes.push(props.className);
        }
        props.className = classes.join(' ');
    }
    tagName = tagName || 'div';
    return props.namespace ? tagName : tagName;
}

},{}],7:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.ultradom={})}(this,function(e){"use strict";function g(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function u(e){return e.currentTarget.events[e.type](e)}function y(e,n,t,r,l){if("key"===n);else if("style"===n)for(var o in g(r,t)){var i=null==t||null==t[o]?"":t[o];"-"===o[0]?e[n].setProperty(o,i):e[n][o]=i}else"o"===n[0]&&"n"===n[1]?(e.events||(e.events={}),(e.events[n=n.slice(2)]=t)?r||e.addEventListener(n,u):e.removeEventListener(n,u)):n in e&&"list"!==n&&!l?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function b(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var l=0;l<t.children.length;l++)e(n.childNodes[l],t.children[l]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var l=t.attributes&&t.attributes.onremove;l?l(n,r):r()}function k(e){return e?e.key:null}function w(e,n,t,r,l,o){if(r===t);else if(null==t||t.name!==r.name){var i=function e(n,t,r){var l="string"==typeof n||"number"==typeof n?document.createTextNode(n):(r=r||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name):document.createElement(n.name),o=n.attributes;if(o){o.oncreate&&t.push(function(){o.oncreate(l)});for(var i=0;i<n.children.length;i++)l.appendChild(e(n.children[i],t,r));for(var u in o)y(l,u,o[u],null,r)}return l}(r,l,o);e.insertBefore(i,n),null!=t&&b(e,n,t),n=i}else if(null==t.name)n.nodeValue=r;else{!function(e,n,t,r,l){for(var o in g(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&y(e,o,t[o],n[o],l);t.onupdate&&r.push(function(){t.onupdate(e,n)})}(n,t.attributes,r.attributes,l,o=o||"svg"===r.name);for(var u={},f={},a=[],s=t.children,c=r.children,d=0;d<s.length;d++){a[d]=n.childNodes[d],null!=(h=k(s[d]))&&(u[h]=[a[d],s[d]])}d=0;for(var v=0;v<c.length;){var h=k(s[d]),p=k(c[v]);if(f[h])d++;else if(null==p||p!==k(s[d+1]))if(null==p||t.recycled)null==h&&(w(n,a[d],s[d],c[v],l,o),v++),d++;else{var m=u[p]||[];h===p?(w(n,m[0],m[1],c[v],l,o),d++):m[0]?w(n,n.insertBefore(m[0],a[d]),m[1],c[v],l,o):w(n,a[d],null,c[v],l,o),f[p]=c[v],v++}else null==h&&b(n,a[d],s[d]),d++}for(;d<s.length;)null==k(s[d])&&b(n,a[d],s[d]),d++;for(var d in u)f[d]||b(n,u[d][0],u[d][1])}return n}e.h=function(e,n){for(var t=[],r=[],l=arguments.length;2<l--;)t.push(arguments[l]);for(;t.length;){var o=t.pop();if(o&&o.pop)for(l=o.length;l--;)t.push(o[l]);else null!=o&&!0!==o&&!1!==o&&r.push(o)}return{name:e,attributes:n||{},children:r,key:n&&n.key}},e.render=function(e,n){var t=[],r=n.children[0];for(w(n,r,r&&r.node,e,t).node=e;t.length;)t.pop()()}});

},{}]},{},[1]);
