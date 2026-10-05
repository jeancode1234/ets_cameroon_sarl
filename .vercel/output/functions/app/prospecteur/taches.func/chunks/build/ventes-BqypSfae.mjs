import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/prospecteur/ventes.vue?vue&type=script&setup=true&lang.ts
var ventes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ventes",
	__ssrInlineRender: true,
	setup(__props) {
		const sales = [{
			id: "1",
			client: "Hotel A",
			project: "Rénovation cuisine",
			amount: 245e4,
			status: "VALIDÉ",
			date: "2026-09-20",
			commission: 45e4
		}, {
			id: "2",
			client: "Restaurant B",
			project: "Finitions restauration",
			amount: 18e5,
			status: "EN ATTENTE",
			date: "2026-09-17",
			commission: 32e4
		}];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Client</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Projet</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Commission</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(sales, (sale) => {
				_push(`<tr class="border-t border-slate-200 dark:border-slate-700"><td class="px-4 py-3">${ssrInterpolate(sale.client)}</td><td class="px-4 py-3">${ssrInterpolate(sale.project)}</td><td class="px-4 py-3">${ssrInterpolate(sale.amount)} FCFA</td><td class="px-4 py-3">${ssrInterpolate(sale.status)}</td><td class="px-4 py-3">${ssrInterpolate(sale.date)}</td><td class="px-4 py-3">${ssrInterpolate(sale.commission)} FCFA</td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/ventes.vue
var _sfc_setup = ventes_vue_vue_type_script_setup_true_lang_default.setup;
ventes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/ventes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ventes_default = ventes_vue_vue_type_script_setup_true_lang_default;

export { ventes_default as default };
//# sourceMappingURL=ventes-BqypSfae.mjs.map
