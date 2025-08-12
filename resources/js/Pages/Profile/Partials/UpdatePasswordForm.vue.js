/// <reference types="D:/laragon/www/feedbackhub/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
const passwordInput = ref(null);
const currentPasswordInput = ref(null);
const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});
const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value?.focus();
            }
        },
    });
};
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
    ...{ onSubmit: (__VLS_ctx.updatePassword) },
    ...{ class: "mt-6 space-y-6" },
});
// @ts-ignore
[updatePassword,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "current_password",
    value: "Current Password",
}));
const __VLS_1 = __VLS_0({
    for: "current_password",
    value: "Current Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "current_password",
    ref: "currentPasswordInput",
    modelValue: (__VLS_ctx.form.current_password),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "current-password",
}));
const __VLS_5 = __VLS_4({
    id: "current_password",
    ref: "currentPasswordInput",
    modelValue: (__VLS_ctx.form.current_password),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "current-password",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {typeof __VLS_ctx.currentPasswordInput} */ ;
var __VLS_7 = {};
// @ts-ignore
[form, currentPasswordInput,];
var __VLS_6;
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(InputError, new InputError({
    message: (__VLS_ctx.form.errors.current_password),
    ...{ class: "mt-2" },
}));
const __VLS_11 = __VLS_10({
    message: (__VLS_ctx.form.errors.current_password),
    ...{ class: "mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "password",
    value: "New Password",
}));
const __VLS_15 = __VLS_14({
    for: "password",
    value: "New Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "password",
    ref: "passwordInput",
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "new-password",
}));
const __VLS_19 = __VLS_18({
    id: "password",
    ref: "passwordInput",
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "new-password",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {typeof __VLS_ctx.passwordInput} */ ;
var __VLS_21 = {};
// @ts-ignore
[form, passwordInput,];
var __VLS_20;
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(InputError, new InputError({
    message: (__VLS_ctx.form.errors.password),
    ...{ class: "mt-2" },
}));
const __VLS_25 = __VLS_24({
    message: (__VLS_ctx.form.errors.password),
    ...{ class: "mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "password_confirmation",
    value: "Confirm Password",
}));
const __VLS_29 = __VLS_28({
    for: "password_confirmation",
    value: "Confirm Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    id: "password_confirmation",
    modelValue: (__VLS_ctx.form.password_confirmation),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "new-password",
}));
const __VLS_33 = __VLS_32({
    id: "password_confirmation",
    modelValue: (__VLS_ctx.form.password_confirmation),
    type: "password",
    ...{ class: "mt-1 block w-full" },
    autocomplete: "new-password",
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
// @ts-ignore
[form,];
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(InputError, new InputError({
    message: (__VLS_ctx.form.errors.password_confirmation),
    ...{ class: "mt-2" },
}));
const __VLS_37 = __VLS_36({
    message: (__VLS_ctx.form.errors.password_confirmation),
    ...{ class: "mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center gap-4" },
});
/** @type {[typeof PrimaryButton, typeof PrimaryButton, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(PrimaryButton, new PrimaryButton({
    disabled: (__VLS_ctx.form.processing),
}));
const __VLS_41 = __VLS_40({
    disabled: (__VLS_ctx.form.processing),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
const { default: __VLS_43 } = __VLS_42.slots;
// @ts-ignore
[form,];
var __VLS_42;
const __VLS_44 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    enterActiveClass: "transition ease-in-out",
    enterFromClass: "opacity-0",
    leaveActiveClass: "transition ease-in-out",
    leaveToClass: "opacity-0",
}));
const __VLS_46 = __VLS_45({
    enterActiveClass: "transition ease-in-out",
    enterFromClass: "opacity-0",
    leaveActiveClass: "transition ease-in-out",
    leaveToClass: "opacity-0",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_48 } = __VLS_47.slots;
if (__VLS_ctx.form.recentlySuccessful) {
    // @ts-ignore
    [form,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-sm text-gray-600" },
    });
}
var __VLS_47;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
// @ts-ignore
var __VLS_8 = __VLS_7, __VLS_22 = __VLS_21;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InputError: InputError,
            InputLabel: InputLabel,
            PrimaryButton: PrimaryButton,
            TextInput: TextInput,
            passwordInput: passwordInput,
            currentPasswordInput: currentPasswordInput,
            form: form,
            updatePassword: updatePassword,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
