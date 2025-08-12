/// <reference types="D:/laragon/www/feedbackhub/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);
const form = useForm({
    password: '',
});
const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
    nextTick(() => passwordInput.value?.focus());
};
const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};
const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.clearErrors();
    form.reset();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "space-y-6" },
});
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-lg font-medium text-gray-900" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "mt-1 text-sm text-gray-600" },
});
/** @type {[typeof DangerButton, typeof DangerButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DangerButton, new DangerButton({
    ...{ 'onClick': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ click: {} },
    { onClick: (__VLS_ctx.confirmUserDeletion) });
const { default: __VLS_6 } = __VLS_2.slots;
// @ts-ignore
[confirmUserDeletion,];
var __VLS_2;
/** @type {[typeof Modal, typeof Modal, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Modal, new Modal({
    ...{ 'onClose': {} },
    show: (__VLS_ctx.confirmingUserDeletion),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onClose': {} },
    show: (__VLS_ctx.confirmingUserDeletion),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
const __VLS_12 = ({ close: {} },
    { onClose: (__VLS_ctx.closeModal) });
const { default: __VLS_13 } = __VLS_9.slots;
// @ts-ignore
[confirmingUserDeletion, closeModal,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "p-6" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-lg font-medium text-gray-900" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "mt-1 text-sm text-gray-600" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-6" },
});
/** @type {[typeof InputLabel, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(InputLabel, new InputLabel({
    for: "password",
    value: "Password",
    ...{ class: "sr-only" },
}));
const __VLS_15 = __VLS_14({
    for: "password",
    value: "Password",
    ...{ class: "sr-only" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {[typeof TextInput, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(TextInput, new TextInput({
    ...{ 'onKeyup': {} },
    id: "password",
    ref: "passwordInput",
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    ...{ class: "mt-1 block w-3/4" },
    placeholder: "Password",
}));
const __VLS_19 = __VLS_18({
    ...{ 'onKeyup': {} },
    id: "password",
    ref: "passwordInput",
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    ...{ class: "mt-1 block w-3/4" },
    placeholder: "Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
const __VLS_23 = ({ keyup: {} },
    { onKeyup: (__VLS_ctx.deleteUser) });
/** @type {typeof __VLS_ctx.passwordInput} */ ;
var __VLS_24 = {};
// @ts-ignore
[form, deleteUser, passwordInput,];
var __VLS_20;
/** @type {[typeof InputError, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(InputError, new InputError({
    message: (__VLS_ctx.form.errors.password),
    ...{ class: "mt-2" },
}));
const __VLS_28 = __VLS_27({
    message: (__VLS_ctx.form.errors.password),
    ...{ class: "mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
// @ts-ignore
[form,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-6 flex justify-end" },
});
/** @type {[typeof SecondaryButton, typeof SecondaryButton, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(SecondaryButton, new SecondaryButton({
    ...{ 'onClick': {} },
}));
const __VLS_32 = __VLS_31({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
let __VLS_34;
let __VLS_35;
const __VLS_36 = ({ click: {} },
    { onClick: (__VLS_ctx.closeModal) });
const { default: __VLS_37 } = __VLS_33.slots;
// @ts-ignore
[closeModal,];
var __VLS_33;
/** @type {[typeof DangerButton, typeof DangerButton, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(DangerButton, new DangerButton({
    ...{ 'onClick': {} },
    ...{ class: "ms-3" },
    ...{ class: ({ 'opacity-25': __VLS_ctx.form.processing }) },
    disabled: (__VLS_ctx.form.processing),
}));
const __VLS_39 = __VLS_38({
    ...{ 'onClick': {} },
    ...{ class: "ms-3" },
    ...{ class: ({ 'opacity-25': __VLS_ctx.form.processing }) },
    disabled: (__VLS_ctx.form.processing),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_41;
let __VLS_42;
const __VLS_43 = ({ click: {} },
    { onClick: (__VLS_ctx.deleteUser) });
const { default: __VLS_44 } = __VLS_40.slots;
// @ts-ignore
[form, form, deleteUser,];
var __VLS_40;
var __VLS_9;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-3']} */ ;
// @ts-ignore
var __VLS_25 = __VLS_24;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DangerButton: DangerButton,
            InputError: InputError,
            InputLabel: InputLabel,
            Modal: Modal,
            SecondaryButton: SecondaryButton,
            TextInput: TextInput,
            confirmingUserDeletion: confirmingUserDeletion,
            passwordInput: passwordInput,
            form: form,
            confirmUserDeletion: confirmUserDeletion,
            deleteUser: deleteUser,
            closeModal: closeModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
