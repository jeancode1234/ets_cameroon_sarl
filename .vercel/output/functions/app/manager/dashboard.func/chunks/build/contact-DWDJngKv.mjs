import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { t as BaseTextarea_default } from './BaseTextarea-kaPUo8A9.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/contact.vue?vue&type=script&setup=true&lang.ts
var contact_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "contact",
	__ssrInlineRender: true,
	setup(__props) {
		const form = reactive({
			name: "",
			email: "",
			phone: "",
			message: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseInput = BaseInput_default;
			const _component_BaseTextarea = BaseTextarea_default;
			const _component_BaseButton = BaseButton_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p><h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Discutons votre projet</h1><div class="mt-8 space-y-4 text-slate-600 dark:text-slate-300"><p>Email : recrutement@cameroonservices.cm</p><p>WhatsApp : +237 6XX XX XX XX</p><p>Site : cameroonservices.com</p></div></div><form class="site-card p-6 md:p-8"><div class="grid gap-5 md:grid-cols-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).name,
				"onUpdate:modelValue": ($event) => unref(form).name = $event,
				label: "Nom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				label: "Email",
				type: "email"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).phone,
				"onUpdate:modelValue": ($event) => unref(form).phone = $event,
				label: "Téléphone",
				type: "tel",
				class: "md:col-span-2"
			}, null, _parent));
			_push(`<div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseTextarea, {
				modelValue: unref(form).message,
				"onUpdate:modelValue": ($event) => unref(form).message = $event,
				label: "Message",
				rows: 6
			}, null, _parent));
			_push(`</div></div><div class="mt-6 flex justify-end">`);
			_push(ssrRenderComponent(_component_BaseButton, { type: "submit" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Envoyer`);
					else return [createTextVNode("Envoyer")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/contact.vue
var _sfc_setup = contact_vue_vue_type_script_setup_true_lang_default.setup;
contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = contact_vue_vue_type_script_setup_true_lang_default;

export { contact_default as default };
//# sourceMappingURL=contact-DWDJngKv.mjs.map
