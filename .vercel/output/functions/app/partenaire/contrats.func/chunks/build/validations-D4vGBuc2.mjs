import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/manager/validations.vue?vue&type=script&setup=true&lang.ts
var validations_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "validations",
	__ssrInlineRender: true,
	setup(__props) {
		const items = [
			{
				id: 1,
				label: "Rapport prospecteur",
				status: "À revoir"
			},
			{
				id: 2,
				label: "Demande de devis client",
				status: "Validé"
			},
			{
				id: 3,
				label: "Commission équipe",
				status: "En attente"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Validations</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(items, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.label)}</span><span>${ssrInterpolate(item.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/validations.vue
var _sfc_setup = validations_vue_vue_type_script_setup_true_lang_default.setup;
validations_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/validations.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var validations_default = validations_vue_vue_type_script_setup_true_lang_default;

export { validations_default as default };
//# sourceMappingURL=validations-D4vGBuc2.mjs.map
