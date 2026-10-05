import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/prospecteur/progression.vue?vue&type=script&setup=true&lang.ts
var progression_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "progression",
	__ssrInlineRender: true,
	setup(__props) {
		const steps = [
			{
				period: "Semaine 1",
				title: "Formation + découverte + première sortie accompagnée",
				description: "Découverte des produits, du contexte terrain et de la méthode commerciale."
			},
			{
				period: "Semaines 2–4",
				title: "Premières ventes en autonomie encadrée",
				description: "Début des missions de prospection avec accompagnement du manager."
			},
			{
				period: "Mois 2–3",
				title: "Autonomie complète",
				description: "Le prospecteur conduit ses activités avec une autonomie progressive."
			},
			{
				period: "Mois 6+",
				title: "Référent de zone / évolution",
				description: "Évolution vers un rôle de gestion de zone ou de référent."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Progression</h1></div><div class="space-y-5"><!--[-->`);
			ssrRenderList(steps, (step, index) => {
				_push(`<div class="site-card p-5"><div class="flex gap-4"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">${ssrInterpolate(index + 1)}</div><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">${ssrInterpolate(step.period)}</p><h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate(step.title)}</h2><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(step.description)}</p></div></div></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/progression.vue
var _sfc_setup = progression_vue_vue_type_script_setup_true_lang_default.setup;
progression_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/progression.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var progression_default = progression_vue_vue_type_script_setup_true_lang_default;

export { progression_default as default };
//# sourceMappingURL=progression-j0kc3w3L.mjs.map
