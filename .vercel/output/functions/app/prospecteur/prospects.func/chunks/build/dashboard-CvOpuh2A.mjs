import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/manager/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				label: "Prospecteurs",
				value: "18",
				delta: "+6.2%"
			},
			{
				label: "Prospects",
				value: "142",
				delta: "+12.4%"
			},
			{
				label: "Rapports",
				value: "39",
				delta: "+4.8%"
			},
			{
				label: "Ventes",
				value: "24",
				delta: "+8.7%"
			}
		];
		const pipeline = [
			{
				name: "Awa Ngnou",
				role: "Prospectrice",
				progress: 84
			},
			{
				name: "Cedric Tchouta",
				role: "Chargé de terrain",
				progress: 71
			},
			{
				name: "Mireille Nfou",
				role: "Suivi clients",
				progress: 63
			}
		];
		const approvals = [{
			id: "1",
			title: "Rapport de visite – Douala",
			meta: "Awa Ngnou · 09:15",
			status: "À revoir"
		}, {
			id: "2",
			title: "Demande de devis – Yaoundé",
			meta: "Équipe infrastructures · 08:40",
			status: "En cours"
		}];
		const activities = [
			"5 nouveaux prospects qualifiés aujourd’hui",
			"3 rapports soumis pour validation",
			"2 chantiers confirmés pour cette semaine",
			"Paiement de commission en attente de validation"
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Manager</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tableau de bord de gestion</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Valider les opérations`);
					else return [createTextVNode("Valider les opérations")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(card.label)}</p><p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(card.value)}</p><p class="mt-2 text-sm text-emerald-600 dark:text-emerald-400">${ssrInterpolate(card.delta)}</p></div>`);
			});
			_push(`<!--]--></div><div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><div class="site-card p-5"><div class="mb-4 flex items-center justify-between"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Pipeline de prospection</h2><span class="text-sm text-slate-500 dark:text-slate-400">Cette semaine</span></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(pipeline, (item) => {
				_push(`<div class="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><div class="flex items-center justify-between"><div><p class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(item.name)}</p><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(item.role)}</p></div><span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">${ssrInterpolate(item.progress)}%</span></div><div class="mt-3 h-2 rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-2 rounded-full bg-primary" style="${ssrRenderStyle(`width: ${item.progress}%`)}"></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="space-y-6"><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Approbations</h2><ul class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(approvals, (approval) => {
				_push(`<li class="rounded-xl bg-slate-50 p-3 dark:bg-slate-900"><div class="flex items-center justify-between gap-3"><div><p class="font-medium text-slate-900 dark:text-white">${ssrInterpolate(approval.title)}</p><p class="text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(approval.meta)}</p></div><span class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">${ssrInterpolate(approval.status)}</span></div></li>`);
			});
			_push(`<!--]--></ul></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Dernières activités</h2><ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(activities, (activity) => {
				_push(`<li class="border-b border-slate-200 pb-2 last:border-none dark:border-slate-700">${ssrInterpolate(activity)}</li>`);
			});
			_push(`<!--]--></ul></div></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-CvOpuh2A.mjs.map
