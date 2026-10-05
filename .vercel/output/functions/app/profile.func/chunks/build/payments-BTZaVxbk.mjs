import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/client/payments.vue?vue&type=script&setup=true&lang.ts
var payments_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "payments",
	__ssrInlineRender: true,
	setup(__props) {
		const { paymentData } = useBusinessData();
		const payments = paymentData;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Client</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Paiements</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Ajouter paiement`);
					else return [createTextVNode("Ajouter paiement")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Libellé</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Type</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th><th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(unref(payments), (payment) => {
				_push(`<tr class="border-t border-slate-200 dark:border-slate-700"><td class="px-4 py-3">${ssrInterpolate(payment.label)}</td><td class="px-4 py-3">${ssrInterpolate(payment.type)}</td><td class="px-4 py-3">${ssrInterpolate(payment.amount.toLocaleString())} FCFA</td><td class="px-4 py-3"><span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">${ssrInterpolate(payment.status)}</span></td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/client/payments.vue
var _sfc_setup = payments_vue_vue_type_script_setup_true_lang_default.setup;
payments_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/client/payments.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var payments_default = payments_vue_vue_type_script_setup_true_lang_default;

export { payments_default as default };
//# sourceMappingURL=payments-BTZaVxbk.mjs.map
