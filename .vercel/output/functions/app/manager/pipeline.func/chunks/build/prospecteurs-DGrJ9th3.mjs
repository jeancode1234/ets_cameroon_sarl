import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/manager/prospecteurs.vue?vue&type=script&setup=true&lang.ts
var prospecteurs_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "prospecteurs",
	__ssrInlineRender: true,
	setup(__props) {
		const list = [
			{
				name: "Awa Ngnou",
				status: "Actif"
			},
			{
				name: "Marc Tchou",
				status: "À superviser"
			},
			{
				name: "Jules Ango",
				status: "Actif"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Prospecteurs</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(list, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.name)}</span><span>${ssrInterpolate(item.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/prospecteurs.vue
var _sfc_setup = prospecteurs_vue_vue_type_script_setup_true_lang_default.setup;
prospecteurs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/prospecteurs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var prospecteurs_default = prospecteurs_vue_vue_type_script_setup_true_lang_default;

export { prospecteurs_default as default };
//# sourceMappingURL=prospecteurs-DGrJ9th3.mjs.map
