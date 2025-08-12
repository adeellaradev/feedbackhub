/// <reference types="D:/laragon/www/feedbackhub/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
const showingNavigationDropdown = ref(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "min-h-screen bg-gray-100" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "border-b border-gray-100 bg-white" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex h-16 justify-between" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex shrink-0 items-center" },
});
const __VLS_0 = {}.Link;
/** @type {[typeof __VLS_components.Link, typeof __VLS_components.Link, ]} */ ;
// @ts-ignore
Link;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    href: (__VLS_ctx.route('dashboard')),
}));
const __VLS_2 = __VLS_1({
    href: (__VLS_ctx.route('dashboard')),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
// @ts-ignore
[route,];
/** @type {[typeof ApplicationLogo, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(ApplicationLogo, new ApplicationLogo({
    ...{ class: "block h-9 w-auto fill-current text-gray-800" },
}));
const __VLS_6 = __VLS_5({
    ...{ class: "block h-9 w-auto fill-current text-gray-800" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex" },
});
/** @type {[typeof NavLink, typeof NavLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(NavLink, new NavLink({
    href: (__VLS_ctx.route('dashboard')),
    active: (__VLS_ctx.route().current('dashboard')),
}));
const __VLS_10 = __VLS_9({
    href: (__VLS_ctx.route('dashboard')),
    active: (__VLS_ctx.route().current('dashboard')),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_12 } = __VLS_11.slots;
// @ts-ignore
[route, route,];
var __VLS_11;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "hidden sm:ms-6 sm:flex sm:items-center" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "relative ms-3" },
});
/** @type {[typeof Dropdown, typeof Dropdown, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(Dropdown, new Dropdown({
    align: "right",
    width: "48",
}));
const __VLS_14 = __VLS_13({
    align: "right",
    width: "48",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_16 } = __VLS_15.slots;
{
    const { trigger: __VLS_17 } = __VLS_15.slots;
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "inline-flex rounded-md" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        type: "button",
        ...{ class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none" },
    });
    (__VLS_ctx.$page.props.auth.user.name);
    // @ts-ignore
    [$page,];
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        ...{ class: "-me-0.5 ms-2 h-4 w-4" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        'fill-rule': "evenodd",
        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        'clip-rule': "evenodd",
    });
}
{
    const { content: __VLS_18 } = __VLS_15.slots;
    /** @type {[typeof DropdownLink, typeof DropdownLink, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(DropdownLink, new DropdownLink({
        href: (__VLS_ctx.route('profile.edit')),
    }));
    const __VLS_20 = __VLS_19({
        href: (__VLS_ctx.route('profile.edit')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const { default: __VLS_22 } = __VLS_21.slots;
    // @ts-ignore
    [route,];
    var __VLS_21;
    /** @type {[typeof DropdownLink, typeof DropdownLink, ]} */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(DropdownLink, new DropdownLink({
        href: (__VLS_ctx.route('logout')),
        method: "post",
        as: "button",
    }));
    const __VLS_24 = __VLS_23({
        href: (__VLS_ctx.route('logout')),
        method: "post",
        as: "button",
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    const { default: __VLS_26 } = __VLS_25.slots;
    // @ts-ignore
    [route,];
    var __VLS_25;
}
var __VLS_15;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "-me-2 flex items-center sm:hidden" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showingNavigationDropdown =
                !__VLS_ctx.showingNavigationDropdown;
            // @ts-ignore
            [showingNavigationDropdown, showingNavigationDropdown,];
        } },
    ...{ class: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none" },
});
__VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
    ...{ class: "h-6 w-6" },
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24",
});
__VLS_asFunctionalElement(__VLS_elements.path)({
    ...{ class: ({
            hidden: __VLS_ctx.showingNavigationDropdown,
            'inline-flex': !__VLS_ctx.showingNavigationDropdown,
        }) },
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    'stroke-width': "2",
    d: "M4 6h16M4 12h16M4 18h16",
});
// @ts-ignore
[showingNavigationDropdown, showingNavigationDropdown,];
__VLS_asFunctionalElement(__VLS_elements.path)({
    ...{ class: ({
            hidden: !__VLS_ctx.showingNavigationDropdown,
            'inline-flex': __VLS_ctx.showingNavigationDropdown,
        }) },
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    'stroke-width': "2",
    d: "M6 18L18 6M6 6l12 12",
});
// @ts-ignore
[showingNavigationDropdown, showingNavigationDropdown,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: ({
            block: __VLS_ctx.showingNavigationDropdown,
            hidden: !__VLS_ctx.showingNavigationDropdown,
        }) },
    ...{ class: "sm:hidden" },
});
// @ts-ignore
[showingNavigationDropdown, showingNavigationDropdown,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "space-y-1 pb-3 pt-2" },
});
/** @type {[typeof ResponsiveNavLink, typeof ResponsiveNavLink, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(ResponsiveNavLink, new ResponsiveNavLink({
    href: (__VLS_ctx.route('dashboard')),
    active: (__VLS_ctx.route().current('dashboard')),
}));
const __VLS_28 = __VLS_27({
    href: (__VLS_ctx.route('dashboard')),
    active: (__VLS_ctx.route().current('dashboard')),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_30 } = __VLS_29.slots;
// @ts-ignore
[route, route,];
var __VLS_29;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "border-t border-gray-200 pb-1 pt-4" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "px-4" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-base font-medium text-gray-800" },
});
(__VLS_ctx.$page.props.auth.user.name);
// @ts-ignore
[$page,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-sm font-medium text-gray-500" },
});
(__VLS_ctx.$page.props.auth.user.email);
// @ts-ignore
[$page,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-3 space-y-1" },
});
/** @type {[typeof ResponsiveNavLink, typeof ResponsiveNavLink, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(ResponsiveNavLink, new ResponsiveNavLink({
    href: (__VLS_ctx.route('profile.edit')),
}));
const __VLS_32 = __VLS_31({
    href: (__VLS_ctx.route('profile.edit')),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_34 } = __VLS_33.slots;
// @ts-ignore
[route,];
var __VLS_33;
/** @type {[typeof ResponsiveNavLink, typeof ResponsiveNavLink, ]} */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(ResponsiveNavLink, new ResponsiveNavLink({
    href: (__VLS_ctx.route('logout')),
    method: "post",
    as: "button",
}));
const __VLS_36 = __VLS_35({
    href: (__VLS_ctx.route('logout')),
    method: "post",
    as: "button",
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
const { default: __VLS_38 } = __VLS_37.slots;
// @ts-ignore
[route,];
var __VLS_37;
if (__VLS_ctx.$slots.header) {
    // @ts-ignore
    [$slots,];
    __VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
        ...{ class: "bg-white shadow" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" },
    });
    var __VLS_39 = {};
}
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({});
var __VLS_41 = {};
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-current']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-8']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:-my-px']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:ms-10']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:ms-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-3']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['-me-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['-me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-150']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
// @ts-ignore
var __VLS_40 = __VLS_39, __VLS_42 = __VLS_41;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ApplicationLogo: ApplicationLogo,
            Dropdown: Dropdown,
            DropdownLink: DropdownLink,
            NavLink: NavLink,
            ResponsiveNavLink: ResponsiveNavLink,
            Link: Link,
            showingNavigationDropdown: showingNavigationDropdown,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
