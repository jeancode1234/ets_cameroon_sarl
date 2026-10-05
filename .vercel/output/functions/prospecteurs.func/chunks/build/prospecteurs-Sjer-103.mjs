import { n as navigateTo } from '../virtual/entry.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { t as BaseTextarea_default } from './BaseTextarea-kaPUo8A9.mjs';
import { defineComponent, reactive, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/prospecteurs.vue?vue&type=script&setup=true&lang.ts
var prospecteurs_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "prospecteurs",
	__ssrInlineRender: true,
	setup(__props) {
		const progressionSteps = [
			{
				period: "Semaine 1",
				title: "Formation + découverte + première sortie accompagnée",
				description: "Découverte du réseau et du terrain."
			},
			{
				period: "Semaines 2–4",
				title: "Premières ventes en autonomie encadrée",
				description: "Des premières missions avec supervision."
			},
			{
				period: "Mois 2–3",
				title: "Autonomie complète",
				description: "La mission s’exécute de manière autonome."
			},
			{
				period: "Mois 6+",
				title: "Référent de zone / évolution",
				description: "Évolution vers un rôle de référent."
			}
		];
		const form = reactive({
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			city: "",
			zone: "",
			experience: "",
			message: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			const _component_BaseInput = BaseInput_default;
			const _component_BaseTextarea = BaseTextarea_default;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="section-shell bg-slate-50 dark:bg-slate-950"><div class="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rejoindre le réseau</p><h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Devenez prospecteur ETS Cameroon Services.</h1><p class="mt-5 max-w-xl text-slate-600 dark:text-slate-300">Rejoignez un réseau professionnel orienté terrain, performance commerciale et accompagnement managérial.</p><div class="mt-8 flex gap-3">`);
			_push(ssrRenderComponent(_component_BaseButton, {
				variant: "primary",
				onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("#candidature")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Candidater`);
					else return [createTextVNode("Candidater")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_BaseButton, {
				variant: "secondary",
				onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/register")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Créer un compte`);
					else return [createTextVNode("Créer un compte")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card p-6"><div class="space-y-4"><div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pourquoi</p><p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Un modèle de progression clair</p></div><div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rôle</p><p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Prospecter, accompagner et vendre</p></div></div></div></div></section><section class="section-shell"><div class="container-shell"><div class="mb-10"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Progression</p><h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Les étapes clés</h2></div><div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
			ssrRenderList(progressionSteps, (step) => {
				_push(`<div class="site-card p-5"><p class="text-xs uppercase tracking-[0.2em] text-primary">${ssrInterpolate(step.period)}</p><h3 class="mt-3 text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate(step.title)}</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(step.description)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section id="candidature" class="section-shell bg-slate-100 dark:bg-slate-900/70"><div class="container-shell max-w-4xl"><div class="mb-8"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Candidature</p><h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Candidatez au réseau prospecteur</h2></div><form class="site-card p-6 md:p-8"><div class="grid gap-5 md:grid-cols-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).firstName,
				"onUpdate:modelValue": ($event) => unref(form).firstName = $event,
				label: "Prénom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).lastName,
				"onUpdate:modelValue": ($event) => unref(form).lastName = $event,
				label: "Nom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).phone,
				"onUpdate:modelValue": ($event) => unref(form).phone = $event,
				label: "Téléphone",
				type: "tel"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				label: "Email",
				type: "email"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).city,
				"onUpdate:modelValue": ($event) => unref(form).city = $event,
				label: "Ville"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).zone,
				"onUpdate:modelValue": ($event) => unref(form).zone = $event,
				label: "Zone"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).experience,
				"onUpdate:modelValue": ($event) => unref(form).experience = $event,
				label: "Expérience"
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
					if (_push) _push(`Soumettre ma candidature`);
					else return [createTextVNode("Soumettre ma candidature")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/prospecteurs.vue
var _sfc_setup = prospecteurs_vue_vue_type_script_setup_true_lang_default.setup;
prospecteurs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prospecteurs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var prospecteurs_default = prospecteurs_vue_vue_type_script_setup_true_lang_default;

export { prospecteurs_default as default };
//# sourceMappingURL=prospecteurs-Sjer-103.mjs.map
