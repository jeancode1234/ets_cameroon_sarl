import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/prospecteur/commissions.vue?vue&type=script&setup=true&lang.ts
var commissions_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "commissions",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				label: "Total commissions",
				value: "—"
			},
			{
				label: "Commissions validées",
				value: "—"
			},
			{
				label: "Commissions en attente",
				value: "—"
			}
		];
		const commissions = [{
			id: "1",
			project: "Projet A",
			commission: 125e3
		}, {
			id: "2",
			project: "Projet B",
			commission: 202e3
		}];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid gap-4 md:grid-cols-3"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(card.label)}</p><p class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(card.value)}</p></div>`);
			});
			_push(`<!--]--></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Historique</h2><ul class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(commissions, (item) => {
				_push(`<li class="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700"><span>${ssrInterpolate(item.project)}</span><span class="font-medium text-primary">${ssrInterpolate(item.commission)} FCFA</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/commissions.vue
var _sfc_setup = commissions_vue_vue_type_script_setup_true_lang_default.setup;
commissions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/commissions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var commissions_default = commissions_vue_vue_type_script_setup_true_lang_default;

export { commissions_default as default };
//# sourceMappingURL=commissions-DpM0GQ01.mjs.map
