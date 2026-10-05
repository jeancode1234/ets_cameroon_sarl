import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/client/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				label: "Demandes",
				value: "12"
			},
			{
				label: "Projets",
				value: "04"
			},
			{
				label: "Devis",
				value: "03"
			},
			{
				label: "Factures",
				value: "02"
			}
		];
		const requests = [
			{
				id: "1",
				title: "Rénovation cuisine hotel",
				meta: "Soumise le 16 sept",
				status: "En cours"
			},
			{
				id: "2",
				title: "Installation mobilier salle",
				meta: "Soumise le 11 sept",
				status: "Validée"
			},
			{
				id: "3",
				title: "Consultation chantier",
				meta: "Soumise le 07 sept",
				status: "À planifier"
			}
		];
		const quickNotes = [
			"Votre devis pour la salle de restauration est prêt.",
			"Un technicien a vérifié le chantier de Douala.",
			"Le statut de votre dernière demande a été mis à jour."
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Client</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tableau de bord client</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Nouvelle demande`);
					else return [createTextVNode("Nouvelle demande")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="site-card p-5"><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(card.label)}</p><p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(card.value)}</p></div>`);
			});
			_push(`<!--]--></div><div class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Demandes récentes</h2><ul class="mt-4 space-y-3"><!--[-->`);
			ssrRenderList(requests, (item) => {
				_push(`<li class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700"><div><p class="font-medium text-slate-900 dark:text-white">${ssrInterpolate(item.title)}</p><p class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(item.meta)}</p></div><span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">${ssrInterpolate(item.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Suivi rapide</h2><ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(quickNotes, (item) => {
				_push(`<li class="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">${ssrInterpolate(item)}</li>`);
			});
			_push(`<!--]--></ul></div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/client/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/client/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-DLCECKj5.mjs.map
