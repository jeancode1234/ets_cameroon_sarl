import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/client/factures.vue?vue&type=script&setup=true&lang.ts
var factures_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "factures",
	__ssrInlineRender: true,
	setup(__props) {
		const invoices = [
			{
				id: 1,
				label: "Facture nº 2026-01",
				amount: 22e5
			},
			{
				id: 2,
				label: "Facture nº 2026-02",
				amount: 98e4
			},
			{
				id: 3,
				label: "Facture nº 2026-03",
				amount: 145e4
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Client</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Factures</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Télécharger`);
					else return [createTextVNode("Télécharger")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(invoices, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.label)}</span><span>${ssrInterpolate(item.amount)} FCFA</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/client/factures.vue
var _sfc_setup = factures_vue_vue_type_script_setup_true_lang_default.setup;
factures_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/client/factures.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var factures_default = factures_vue_vue_type_script_setup_true_lang_default;

export { factures_default as default };
//# sourceMappingURL=factures-Cq2CUw3E.mjs.map
