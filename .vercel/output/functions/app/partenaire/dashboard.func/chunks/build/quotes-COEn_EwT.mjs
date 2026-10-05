import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/admin/quotes.vue?vue&type=script&setup=true&lang.ts
var quotes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "quotes",
	__ssrInlineRender: true,
	setup(__props) {
		const { quoteData } = useBusinessData();
		const quotes = quoteData;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Administration</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Devis</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Créer un devis`);
					else return [createTextVNode("Créer un devis")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Client</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(unref(quotes), (quote) => {
				_push(`<tr class="border-t border-slate-200 dark:border-slate-700"><td class="px-4 py-3">${ssrInterpolate(quote.client)}</td><td class="px-4 py-3">${ssrInterpolate(quote.amount.toLocaleString())} FCFA</td><td class="px-4 py-3"><span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">${ssrInterpolate(quote.status)}</span></td><td class="px-4 py-3">${ssrInterpolate(quote.date)}</td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/quotes.vue
var _sfc_setup = quotes_vue_vue_type_script_setup_true_lang_default.setup;
quotes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/quotes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var quotes_default = quotes_vue_vue_type_script_setup_true_lang_default;

export { quotes_default as default };
//# sourceMappingURL=quotes-COEn_EwT.mjs.map
