import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/prospecteur/prospects.vue?vue&type=script&setup=true&lang.ts
var prospects_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "prospects",
	__ssrInlineRender: true,
	setup(__props) {
		const prospects = [{
			id: "1",
			fullName: "Jean Mvogo",
			phone: "+237 6XX XX XX XX",
			project: "Construction villa",
			location: "Douala",
			status: "QUALIFIED",
			createdAt: "2026-09-20"
		}, {
			id: "2",
			fullName: "Françoise Tchou",
			phone: "+237 6XX XX XX XX",
			project: "Rénovation hôtel",
			location: "Yaoundé",
			status: "CONTACTED",
			createdAt: "2026-09-18"
		}];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Prospects</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Gestion des prospects</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Ajouter un prospect`);
					else return [createTextVNode("Ajouter un prospect")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Nom</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Téléphone</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Projet</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Localisation</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Actions</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(prospects, (prospect) => {
				_push(`<tr class="border-t border-slate-200 dark:border-slate-700"><td class="px-4 py-3">${ssrInterpolate(prospect.fullName)}</td><td class="px-4 py-3">${ssrInterpolate(prospect.phone)}</td><td class="px-4 py-3">${ssrInterpolate(prospect.project)}</td><td class="px-4 py-3">${ssrInterpolate(prospect.location)}</td><td class="px-4 py-3"><span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">${ssrInterpolate(prospect.status)}</span></td><td class="px-4 py-3">${ssrInterpolate(prospect.createdAt)}</td><td class="px-4 py-3"><button class="text-primary hover:underline">Voir</button></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/prospects.vue
var _sfc_setup = prospects_vue_vue_type_script_setup_true_lang_default.setup;
prospects_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/prospects.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var prospects_default = prospects_vue_vue_type_script_setup_true_lang_default;

export { prospects_default as default };
//# sourceMappingURL=prospects-B8cNDbKL.mjs.map
