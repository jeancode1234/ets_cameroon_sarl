import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/manager/chantiers.vue?vue&type=script&setup=true&lang.ts
var chantiers_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "chantiers",
	__ssrInlineRender: true,
	setup(__props) {
		const { jobSiteData } = useBusinessData();
		const jobs = jobSiteData;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Manager</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Suivi de chantiers</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Nouveau chantier`);
					else return [createTextVNode("Nouveau chantier")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(unref(jobs), (job) => {
				_push(`<article class="site-card p-5"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 class="text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate(job.name)}</h2><p class="text-sm text-slate-500 dark:text-slate-400">Client : ${ssrInterpolate(job.client)}</p></div><span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">${ssrInterpolate(job.status)}</span></div><div class="mt-4"><div class="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300"><span>Progression</span><span>${ssrInterpolate(job.progress)}%</span></div><div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-2 rounded-full bg-primary" style="${ssrRenderStyle(`width: ${job.progress}%`)}"></div></div></div><p class="mt-4 text-sm text-slate-600 dark:text-slate-300">Prochaine action : ${ssrInterpolate(job.nextAction)}</p></article>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/chantiers.vue
var _sfc_setup = chantiers_vue_vue_type_script_setup_true_lang_default.setup;
chantiers_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/chantiers.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chantiers_default = chantiers_vue_vue_type_script_setup_true_lang_default;

export { chantiers_default as default };
//# sourceMappingURL=chantiers-BZAlugWm.mjs.map
