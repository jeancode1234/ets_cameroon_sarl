import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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

//#region app/pages/auth/login.vue?vue&type=script&setup=true&lang.ts
var login_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "login",
	__ssrInlineRender: true,
	setup(__props) {
		const form = reactive({
			email: "",
			password: ""
		});
		const loading = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseInput = BaseInput_default;
			const _component_NuxtLink = NuxtLink;
			const _component_BaseButton = BaseButton_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.08),_transparent_30%)]" }, _attrs))}><div class="container-shell max-w-5xl"><div class="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.1fr_0.9fr] dark:border-slate-800 dark:bg-slate-900"><div class="relative hidden bg-gradient-to-br from-primary via-[#0d2d53] to-sky-700 p-8 text-white lg:flex lg:flex-col lg:justify-between"><div><p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-200">ETS Cameroon Services</p><h1 class="mt-6 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.05em]">Accédez à votre espace professionnel</h1><p class="mt-4 max-w-sm text-sm leading-7 text-slate-200">Suivez vos projets, gérez vos demandes et pilotez vos opérations avec un accès sécurisé.</p></div><div class="grid gap-3 pt-8"><div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"><p class="text-sm font-semibold text-sky-200">Suivi de chantier</p><p class="mt-1 text-2xl font-extrabold">24/7</p></div><div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"><p class="text-sm font-semibold text-sky-200">Vues temps réel</p><p class="mt-1 text-2xl font-extrabold">98%</p></div></div></div><div class="p-6 md:p-8 lg:p-10"><div class="mb-6 flex items-center justify-between"><div><p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Connexion</p><h2 class="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white">Bienvenue</h2></div><div class="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Secure</div></div><form class="mt-6 space-y-5">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.email,
				"onUpdate:modelValue": ($event) => form.email = $event,
				label: "Email",
				type: "email",
				placeholder: "user@cameroonservices.cm"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: form.password,
				"onUpdate:modelValue": ($event) => form.password = $event,
				label: "Mot de passe",
				type: "password",
				placeholder: "••••••••"
			}, null, _parent));
			_push(`<div class="flex items-center justify-between text-sm"><label class="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300"><input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"> Se souvenir de moi </label>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "font-semibold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Besoin d’aide ?`);
					else return [createTextVNode("Besoin d’aide ?")];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_component_BaseButton, {
				type: "submit",
				class: "w-full",
				loading: loading.value
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Se connecter`);
					else return [createTextVNode("Se connecter")];
				}),
				_: 1
			}, _parent));
			_push(`</form><div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-300"> Pas encore membre ? `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/auth/register",
				class: "ml-2 font-bold text-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Créer un compte`);
					else return [createTextVNode("Créer un compte")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/auth/login.vue
var _sfc_setup = login_vue_vue_type_script_setup_true_lang_default.setup;
login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var login_default = login_vue_vue_type_script_setup_true_lang_default;

export { login_default as default };
//# sourceMappingURL=login-BraF5ycM.mjs.map
