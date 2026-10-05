import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/prospecteur/taches.vue?vue&type=script&setup=true&lang.ts
var taches_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "taches",
	__ssrInlineRender: true,
	setup(__props) {
		const tasks = [
			{
				name: "Visite chantier",
				status: "À faire"
			},
			{
				name: "Relance client",
				status: "En cours"
			},
			{
				name: "Rapport terrain",
				status: "Validé"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Prospecteur</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Suivi des tâches</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Nouvelle tâche`);
					else return [createTextVNode("Nouvelle tâche")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-3"><!--[-->`);
			ssrRenderList(tasks, (task) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(task.name)}</p><p class="mt-3 text-xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(task.status)}</p></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/taches.vue
var _sfc_setup = taches_vue_vue_type_script_setup_true_lang_default.setup;
taches_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/taches.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var taches_default = taches_vue_vue_type_script_setup_true_lang_default;

export { taches_default as default };
//# sourceMappingURL=taches-DGQcF9Qs.mjs.map
