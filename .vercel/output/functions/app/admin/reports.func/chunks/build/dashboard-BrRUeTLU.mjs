import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/admin/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const { quoteData, jobSiteData, alertData } = useBusinessData();
		const cards = [
			{
				label: "Utilisateurs",
				value: "312",
				delta: "+18.4% vs mois dernier",
				trend: "Croissance"
			},
			{
				label: "Prospecteurs",
				value: "48",
				delta: "+5.3% vs mois dernier",
				trend: "Actifs"
			},
			{
				label: "Devis",
				value: "128",
				delta: "+14.8% vs mois dernier",
				trend: "Ventes"
			},
			{
				label: "Alertes",
				value: "14",
				delta: "-2.1% vs mois dernier",
				trend: "Sécurité"
			}
		];
		const metrics = [
			{
				label: "Qualité des leads",
				value: "87%",
				percent: 87
			},
			{
				label: "Taux de conversion",
				value: "63%",
				percent: 63
			},
			{
				label: "Satisfaction client",
				value: "91%",
				percent: 91
			},
			{
				label: "Performance équipe",
				value: "78%",
				percent: 78
			}
		];
		const quotes = quoteData.slice(0, 3);
		const jobs = jobSiteData.slice(0, 3);
		const actions = [
			"Valider la nouvelle politique de commission",
			"Vérifier les demandes d’accès en attente",
			"Suivre les indicateurs des zones à fort potentiel",
			"Contrôler les synchronisations API et sécurité"
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card overflow-hidden p-5 md:p-6"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Administration</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Tableau de bord premium</h1></div><div class="flex flex-wrap gap-2">`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "secondary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Exporter`);
					else return [createTextVNode("Exporter")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Gérer les paramètres`);
					else return [createTextVNode("Gérer les paramètres")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="site-card p-5"><div class="flex items-center justify-between"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(card.label)}</p><span class="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary dark:bg-primary/20">${ssrInterpolate(card.trend)}</span></div><p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(card.value)}</p><p class="mt-2 text-sm text-emerald-600 dark:text-emerald-400">${ssrInterpolate(card.delta)}</p></div>`);
			});
			_push(`<!--]--></div><div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><div class="space-y-6"><div class="site-card p-5"><div class="mb-5 flex items-center justify-between"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">KPI par département</h2><span class="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Mois</span></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(metrics, (metric) => {
				_push(`<div><div class="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300"><span>${ssrInterpolate(metric.label)}</span><span>${ssrInterpolate(metric.value)}</span></div><div class="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-2.5 rounded-full bg-gradient-to-r from-primary to-sky-500" style="${ssrRenderStyle(`width: ${metric.percent}%`)}"></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Devis récents</h2><div class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(unref(quotes), (quote) => {
				_push(`<div class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700"><div><p class="font-medium text-slate-900 dark:text-white">${ssrInterpolate(quote.client)}</p><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(quote.date)}</p></div><div class="text-right"><p class="font-semibold text-primary">${ssrInterpolate(quote.amount.toLocaleString())} FCFA</p><p class="text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(quote.status)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></div><div class="space-y-6"><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Actions critiques</h2><ul class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(actions, (item) => {
				_push(`<li class="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">${ssrInterpolate(item)}</li>`);
			});
			_push(`<!--]--></ul></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Chantiers actifs</h2><div class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(unref(jobs), (job) => {
				_push(`<div class="rounded-2xl border border-slate-200 p-3 dark:border-slate-700"><div class="flex items-center justify-between"><span class="font-medium text-slate-900 dark:text-white">${ssrInterpolate(job.name)}</span><span class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(job.progress)}%</span></div><div class="mt-2 h-2.5 rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-2.5 rounded-full bg-emerald-500" style="${ssrRenderStyle(`width: ${job.progress}%`)}"></div></div></div>`);
			});
			_push(`<!--]--></div></div></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-BrRUeTLU.mjs.map
