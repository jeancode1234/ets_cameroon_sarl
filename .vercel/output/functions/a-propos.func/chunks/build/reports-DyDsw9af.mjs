import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/admin/reports.vue?vue&type=script&setup=true&lang.ts
var reports_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "reports",
	__ssrInlineRender: true,
	setup(__props) {
		const reports = [
			{
				title: "Performance commerciale",
				status: "Validé"
			},
			{
				title: "Suivi chantier",
				status: "À vérifier"
			},
			{
				title: "Analyse de satisfaction",
				status: "Valide"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rapports</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(reports, (report) => {
				_push(`<li class="rounded-xl border border-slate-200 p-3 dark:border-slate-700"><div class="flex items-center justify-between"><span>${ssrInterpolate(report.title)}</span><span class="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">${ssrInterpolate(report.status)}</span></div></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/reports.vue
var _sfc_setup = reports_vue_vue_type_script_setup_true_lang_default.setup;
reports_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/reports.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var reports_default = reports_vue_vue_type_script_setup_true_lang_default;

export { reports_default as default };
//# sourceMappingURL=reports-DyDsw9af.mjs.map
