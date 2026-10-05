import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { defineComponent, reactive, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/auth/register.vue?vue&type=script&setup=true&lang.ts
var register_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "register",
	__ssrInlineRender: true,
	setup(__props) {
		const form = reactive({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			city: "",
			password: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseInput = BaseInput_default;
			const _component_BaseButton = BaseButton_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.08),_transparent_30%)]" }, _attrs))}><div class="container-shell max-w-6xl"><div class="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] dark:border-slate-800 dark:bg-slate-900"><div class="relative hidden bg-gradient-to-br from-slate-950 via-primary to-sky-700 p-8 text-white lg:flex lg:flex-col lg:justify-between"><div><p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-200">Rejoignez-nous</p><h1 class="mt-6 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.05em]">Créez votre compte partenaire</h1><p class="mt-4 max-w-sm text-sm leading-7 text-slate-200">Développez vos opportunités avec un réseau de professionnels, fournisseurs et gestionnaires de projet.</p></div><div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"><p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-sky-200">Pourquoi nous rejoindre ?</p><ul class="mt-4 space-y-3 text-sm text-slate-200"><li>• Suivi des demandes et projets en temps réel</li><li>• Accès rapide à nos services et solutions</li><li>• Support dédié à l’échelle de votre activité</li></ul></div></div><div class="p-6 md:p-8 lg:p-10"><div class="mb-6"><p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Inscription</p><h2 class="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white">Créer un compte</h2></div><form class="mt-6 grid gap-5 md:grid-cols-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.firstName,
				"onUpdate:modelValue": ($event) => form.firstName = $event,
				label: "Prénom",
				placeholder: "Votre prénom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.lastName,
				"onUpdate:modelValue": ($event) => form.lastName = $event,
				label: "Nom",
				placeholder: "Votre nom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.email,
				"onUpdate:modelValue": ($event) => form.email = $event,
				label: "Email",
				type: "email",
				class: "md:col-span-2",
				placeholder: "vous@exemple.com"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.phone,
				"onUpdate:modelValue": ($event) => form.phone = $event,
				label: "Téléphone",
				type: "tel",
				placeholder: "+237 ..."
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.city,
				"onUpdate:modelValue": ($event) => form.city = $event,
				label: "Ville",
				placeholder: "Douala"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.password,
				"onUpdate:modelValue": ($event) => form.password = $event,
				label: "Mot de passe",
				type: "password",
				class: "md:col-span-2",
				placeholder: "••••••••"
			}, null, _parent));
			_push(`<div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseButton, {
				type: "submit",
				class: "w-full"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Créer mon compte`);
					else return [createTextVNode("Créer mon compte")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form><div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-300"> Vous avez déjà un compte ? `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/auth/login",
				class: "ml-2 font-bold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Se connecter`);
					else return [createTextVNode("Se connecter")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/auth/register.vue
var _sfc_setup = register_vue_vue_type_script_setup_true_lang_default.setup;
register_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var register_default = register_vue_vue_type_script_setup_true_lang_default;

export { register_default as default };
//# sourceMappingURL=register-ZU3cQG12.mjs.map
