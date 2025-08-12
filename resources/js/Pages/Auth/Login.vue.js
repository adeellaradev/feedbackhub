/// <reference types="D:/laragon/www/feedbackhub/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
const __VLS_props = defineProps();
const form = useForm({
    email: '',
    password: '',
    remember: false,
});
const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof GuestLayout, typeof GuestLayout, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(GuestLayout, new GuestLayout({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
const { default: __VLS_4 } = __VLS_2.slots;
const __VLS_5 = {}.Head;
/** @type {[typeof __VLS_components.Head, ]} */ ;
// @ts-ignore
Head;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    title: "Log in",
}));
const __VLS_7 = __VLS_6({
    title: "Log in",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
if (__VLS_ctx.status) {
    // @ts-ignore
    [status,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "mb-4 text-sm font-medium text-green-600" },
    });
    (__VLS_ctx.status);
    // @ts-ignore
    [status,];
}
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.submit) },
});
// @ts-ignore
[submit,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "email",
    value: "Email",
}));
const __VLS_11 = __VLS_10({
    for: "email",
    value: "Email",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "email",
    type: "email",
    ...{ class: "mt-1 block w-full" },
    modelValue: (__VLS_ctx.form.email),
    required: true,
    autofocus: true,
    autocomplete: "username",
}));
const __VLS_15 = __VLS_14({
    id: "email",
    type: "email",
    ...{ class: "mt-1 block w-full" },
    modelValue: (__VLS_ctx.form.email),
    required: true,
    autofocus: true,
    autocomplete: "username",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[form,];
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(InputError, new InputError({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.email),
}));
const __VLS_19 = __VLS_18({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.email),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-4" },
});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "password",
    value: "Password",
}));
const __VLS_23 = __VLS_22({
    for: "password",
    value: "Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "password",
    type: "password",
    ...{ class: "mt-1 block w-full" },
    modelValue: (__VLS_ctx.form.password),
    required: true,
    autocomplete: "current-password",
}));
const __VLS_27 = __VLS_26({
    id: "password",
    type: "password",
    ...{ class: "mt-1 block w-full" },
    modelValue: (__VLS_ctx.form.password),
    required: true,
    autocomplete: "current-password",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[form,];
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(InputError, new InputError({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.password),
}));
const __VLS_31 = __VLS_30({
    ...{ class: "mt-2" },
    message: (__VLS_ctx.form.errors.password),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-4 block" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "flex items-center" },
});
/** @type {[typeof Checkbox, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(Checkbox, new Checkbox({
    name: "remember",
    checked: (__VLS_ctx.form.remember),
}));
const __VLS_35 = __VLS_34({
    name: "remember",
    checked: (__VLS_ctx.form.remember),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "ms-2 text-sm text-gray-600" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-4 flex items-center justify-end" },
});
if (__VLS_ctx.canResetPassword) {
    // @ts-ignore
    [canResetPassword,];
    const __VLS_38 = {}.Link;
    /** @type {[typeof __VLS_components.Link, typeof __VLS_components.Link, ]} */ ;
    // @ts-ignore
    Link;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
        href: (__VLS_ctx.route('password.request')),
        ...{ class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" },
    }));
    const __VLS_40 = __VLS_39({
        href: (__VLS_ctx.route('password.request')),
        ...{ class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const { default: __VLS_42 } = __VLS_41.slots;
    // @ts-ignore
    [route,];
    var __VLS_41;
}
/** @type {[typeof PrimaryButton, typeof PrimaryButton, ]} */ ;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(PrimaryButton, new PrimaryButton({
    ...{ class: "ms-4" },
    ...{ class: ({ 'opacity-25': __VLS_ctx.form.processing }) },
    disabled: (__VLS_ctx.form.processing),
}));
const __VLS_44 = __VLS_43({
    ...{ class: "ms-4" },
    ...{ class: ({ 'opacity-25': __VLS_ctx.form.processing }) },
    disabled: (__VLS_ctx.form.processing),
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
const { default: __VLS_46 } = __VLS_45.slots;
// @ts-ignore
[form, form,];
var __VLS_45;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-offset-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Checkbox: Checkbox,
            GuestLayout: GuestLayout,
            InputError: InputError,
            InputLabel: InputLabel,
            PrimaryButton: PrimaryButton,
            TextInput: TextInput,
            Head: Head,
            Link: Link,
            form: form,
            submit: submit,
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
