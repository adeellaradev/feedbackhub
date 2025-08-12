/// <reference types="D:/laragon/www/feedbackhub/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
const __VLS_props = defineProps();
const user = usePage().props.auth.user;
const form = useForm({
    name: user.name,
    email: user.email,
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({});
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-lg font-medium text-gray-900" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "mt-1 text-sm text-gray-600" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.form.patch(__VLS_ctx.route('profile.update'));
            // @ts-ignore
            [form, route,];
        } },
    ...{ class: "mt-6 space-y-6" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "name",
    value: "Name",
}));
const __VLS_1 = __VLS_0({
    for: "name",
    value: "Name",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "name",
    type: "text",
    ...{ class: "block w-full mt-1" },
    modelValue: (__VLS_ctx.form.name),
    required: true,
    autofocus: true,
    autocomplete: "name",
}));
const __VLS_5 = __VLS_4({
    id: "name",
    type: "text",
    ...{ class: "block w-full mt-1" },
    modelValue: (__VLS_ctx.form.name),
    required: true,
    autofocus: true,
    autocomplete: "name",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
// @ts-ignore
[form,];
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(InputError, new InputError({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.name),
}));
const __VLS_9 = __VLS_8({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.name),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "email",
    value: "Email",
}));
const __VLS_13 = __VLS_12({
    for: "email",
    value: "Email",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "email",
    type: "email",
    ...{ class: "block w-full mt-1" },
    modelValue: (__VLS_ctx.form.email),
    required: true,
    autocomplete: "username",
}));
const __VLS_17 = __VLS_16({
    id: "email",
    type: "email",
    ...{ class: "block w-full mt-1" },
    modelValue: (__VLS_ctx.form.email),
    required: true,
    autocomplete: "username",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[form,];
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(InputError, new InputError({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.email),
}));
const __VLS_21 = __VLS_20({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.email),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
// @ts-ignore
[form,];
if (__VLS_ctx.mustVerifyEmail && __VLS_ctx.user.email_verified_at === null) {
    // @ts-ignore
    [mustVerifyEmail, user,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "mt-2 text-sm text-gray-800" },
    });
    const __VLS_24 = {}.Link;
    /** @type {[typeof __VLS_components.Link, typeof __VLS_components.Link, ]} */ ;
    // @ts-ignore
    Link;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        href: (__VLS_ctx.route('verification.send')),
        method: "post",
        as: "button",
        ...{ class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" },
    }));
    const __VLS_26 = __VLS_25({
        href: (__VLS_ctx.route('verification.send')),
        method: "post",
        as: "button",
        ...{ class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const { default: __VLS_28 } = __VLS_27.slots;
    // @ts-ignore
    [route,];
    var __VLS_27;
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "mt-2 text-sm font-medium text-green-600" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.status === 'verification-link-sent') }, null, null);
    // @ts-ignore
    [vShow, status,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center gap-4" },
});
/** @type {[typeof PrimaryButton, typeof PrimaryButton, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(PrimaryButton, new PrimaryButton({
    disabled: (__VLS_ctx.form.processing),
}));
const __VLS_30 = __VLS_29({
    disabled: (__VLS_ctx.form.processing),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const { default: __VLS_32 } = __VLS_31.slots;
// @ts-ignore
[form,];
var __VLS_31;
const __VLS_33 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    enterActiveClass: "transition ease-in-out",
    enterFromClass: "opacity-0",
    leaveActiveClass: "transition ease-in-out",
    leaveToClass: "opacity-0",
}));
const __VLS_35 = __VLS_34({
    enterActiveClass: "transition ease-in-out",
    enterFromClass: "opacity-0",
    leaveActiveClass: "transition ease-in-out",
    leaveToClass: "opacity-0",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_37 } = __VLS_36.slots;
if (__VLS_ctx.form.recentlySuccessful) {
    // @ts-ignore
    [form,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-sm text-gray-600" },
    });
}
var __VLS_36;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-offset-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InputError: InputError,
            InputLabel: InputLabel,
            PrimaryButton: PrimaryButton,
            TextInput: TextInput,
            Link: Link,
            user: user,
            form: form,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
