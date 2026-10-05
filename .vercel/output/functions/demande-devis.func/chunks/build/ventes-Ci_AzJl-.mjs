import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/manager/ventes.vue?vue&type=script&setup=true&lang.ts
var ventes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ventes",
	__ssrInlineRender: true,
	setup(__props) {
		const sales = [
			{
				id: 1,
				name: "Projet hôtel",
				amount: 245e4
			},
			{
				id: 2,
				name: "Restaurant B",
				amount: 185e4
			},
			{
				id: 3,
				name: "Chantier villa",
				amount: 31e5
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Ventes</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(sales, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.name)}</span><span>${ssrInterpolate(item.amount)} FCFA</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/ventes.vue
var _sfc_setup = ventes_vue_vue_type_script_setup_true_lang_default.setup;
ventes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/ventes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ventes_default = ventes_vue_vue_type_script_setup_true_lang_default;

export { ventes_default as default };
//# sourceMappingURL=ventes-Ci_AzJl-.mjs.map
