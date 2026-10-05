import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/manager/pipeline.vue?vue&type=script&setup=true&lang.ts
var pipeline_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "pipeline",
	__ssrInlineRender: true,
	setup(__props) {
		const stages = [
			{
				name: "Nouveau",
				count: 18
			},
			{
				name: "Qualifié",
				count: 10
			},
			{
				name: "Devis envoyé",
				count: 6
			}
		];
		const leads = [
			{
				name: "Amina Y.",
				project: "Hôtel de luxe",
				stage: "Qualifié",
				score: "82%"
			},
			{
				name: "Boris N.",
				project: "Restaurant",
				stage: "Devis envoyé",
				score: "74%"
			},
			{
				name: "Claudine T.",
				project: "Villa",
				stage: "Nouveau",
				score: "58%"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Manager</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Pipeline commercial</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Ajouter étape`);
					else return [createTextVNode("Ajouter étape")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-3"><!--[-->`);
			ssrRenderList(stages, (stage) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(stage.name)}</p><p class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(stage.count)}</p></div>`);
			});
			_push(`<!--]--></div><div class="site-card overflow-hidden"><div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 dark:bg-slate-900"><tr><th class="px-4 py-3 font-semibold">Prospect</th><th class="px-4 py-3 font-semibold">Projet</th><th class="px-4 py-3 font-semibold">Étape</th><th class="px-4 py-3 font-semibold">Score</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(leads, (lead) => {
				_push(`<tr class="border-t border-slate-200 dark:border-slate-700"><td class="px-4 py-3">${ssrInterpolate(lead.name)}</td><td class="px-4 py-3">${ssrInterpolate(lead.project)}</td><td class="px-4 py-3">${ssrInterpolate(lead.stage)}</td><td class="px-4 py-3">${ssrInterpolate(lead.score)}</td></tr>`);
			});
			_push(`<!--]--></tbody></table></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/pipeline.vue
var _sfc_setup = pipeline_vue_vue_type_script_setup_true_lang_default.setup;
pipeline_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/pipeline.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pipeline_default = pipeline_vue_vue_type_script_setup_true_lang_default;

export { pipeline_default as default };
//# sourceMappingURL=pipeline-tkCEwM44.mjs.map
