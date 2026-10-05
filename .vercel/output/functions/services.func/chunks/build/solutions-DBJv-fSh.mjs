import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/solutions.vue?vue&type=script&setup=true&lang.ts
var solutions_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "solutions",
	__ssrInlineRender: true,
	setup(__props) {
		const solutions = [
			{
				title: "Construction",
				problem: "Besoin d’un approvisionnement fiable et régulier.",
				solution: "Sélection de matériaux et équipements adaptés au cahier des charges.",
				benefit: "Des chantiers mieux pilotés et plus durables."
			},
			{
				title: "Rénovation",
				problem: "Un espace ancien ou obsolète nécessite une mise à niveau.",
				solution: "Diagnostic et approvisionnement sur mesure.",
				benefit: "Des rénovations utiles, esthétiques et fonctionnelles."
			},
			{
				title: "Hôtellerie",
				problem: "Les établissements doivent offrir qualité et confort.",
				solution: "Équipement complet pour chambres, cuisine et espaces clients.",
				benefit: "Une meilleure expérience pour les clients."
			},
			{
				title: "Restauration",
				problem: "Les besoins en cuisine et mobilier sont exigeants.",
				solution: "Approvisionnement et conseils fonctionnels.",
				benefit: "Une meilleure fluidité opérationnelle."
			},
			{
				title: "Décoration",
				problem: "L’ambiance et la qualité visuelle sont essentielles.",
				solution: "Mobilier et luminaires pour une décoration premium.",
				benefit: "Un environnement plus attractif."
			},
			{
				title: "Chantier",
				problem: "Le terrain doit avancer sans rupture de stock ni retards.",
				solution: "Livraison et accompagnement terrain.",
				benefit: "Une exécution plus efficace."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell"><div class="mb-10 max-w-4xl"><p class="section-kicker">Solutions</p><h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Des réponses adaptées à chaque contexte de projet.</h1><p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Nous associons expertise, rapidité et fiabilité pour aider les structures à avancer sans rupture d’approvisionnement ni perte de temps.</p></div><div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
			ssrRenderList(solutions, (item) => {
				_push(`<article class="site-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]"><div class="mb-4 h-1.5 w-14 rounded-full bg-primary/80"></div><h2 class="text-xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate(item.title)}</h2><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Problème :</strong> ${ssrInterpolate(item.problem)}</p><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Solution :</strong> ${ssrInterpolate(item.solution)}</p><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Bénéfice :</strong> ${ssrInterpolate(item.benefit)}</p><div class="mt-5">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/demande-devis",
					class: "text-sm font-semibold text-primary"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Demander un devis`);
						else return [createTextVNode("Demander un devis")];
					}),
					_: 2
				}, _parent));
				_push(`</div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/solutions.vue
var _sfc_setup = solutions_vue_vue_type_script_setup_true_lang_default.setup;
solutions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var solutions_default = solutions_vue_vue_type_script_setup_true_lang_default;

export { solutions_default as default };
//# sourceMappingURL=solutions-DBJv-fSh.mjs.map
