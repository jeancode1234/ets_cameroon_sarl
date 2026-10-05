import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/partenaire/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				label: "Projets",
				value: "08"
			},
			{
				label: "Contrats",
				value: "05"
			},
			{
				label: "Contacts",
				value: "18"
			},
			{
				label: "Suivi",
				value: "98%"
			}
		];
		const projects = [
			{
				id: "1",
				title: "Fourniture hôtel 3 étoiles",
				meta: "Douala · 3 semaines",
				status: "Actif"
			},
			{
				id: "2",
				title: "Équipement restaurant",
				meta: "Yaoundé · 5 semaines",
				status: "En cours"
			},
			{
				id: "3",
				title: "Matériaux de chantier",
				meta: "Bafoussam · 2 semaines",
				status: "Planifié"
			}
		];
		const notes = [
			"Les livraisons sont conformes aux délais annoncés.",
			"Les contrats en cours sont à jour sur le suivi commercial.",
			"Vous avez 2 nouveaux contacts à qualifier cette semaine."
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Partenaire</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tableau de bord partenaire</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Voir les projets`);
					else return [createTextVNode("Voir les projets")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(card.label)}</p><p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(card.value)}</p></div>`);
			});
			_push(`<!--]--></div><div class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Projets actifs</h2><ul class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(projects, (item) => {
				_push(`<li class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700"><div><p class="font-medium text-slate-900 dark:text-white">${ssrInterpolate(item.title)}</p><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(item.meta)}</p></div><span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">${ssrInterpolate(item.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Points clés</h2><ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(notes, (item) => {
				_push(`<li class="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">${ssrInterpolate(item)}</li>`);
			});
			_push(`<!--]--></ul></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/partenaire/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/partenaire/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-ukVzxw03.mjs.map
