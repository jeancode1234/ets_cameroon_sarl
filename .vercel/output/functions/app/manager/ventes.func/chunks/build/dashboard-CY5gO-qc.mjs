import { f as nuxt_layout_default } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/app/prospecteur/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				label: "Prospects",
				value: "12"
			},
			{
				label: "Chantiers",
				value: "8"
			},
			{
				label: "Rapports",
				value: "5"
			},
			{
				label: "Ventes",
				value: "3"
			},
			{
				label: "Commissions",
				value: "—"
			},
			{
				label: "Progression",
				value: "72%"
			}
		];
		const activity = [
			{
				title: "Nouveau prospect enregistré",
				date: "Aujourd’hui"
			},
			{
				title: "Rapport de terrain validé",
				date: "Hier"
			},
			{
				title: "Visite chantier confirmée",
				date: "Lun"
			}
		];
		const actions = [
			"Suivre les nouveaux prospects",
			"Valider le rapport du jour",
			"Préparer la prochaine visite terrain"
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(nuxt_layout_default, mergeProps({ name: "private" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId}><!--[-->`);
						ssrRenderList(cards, (card) => {
							_push(`<div class="site-card p-5"${_scopeId}><p class="text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(card.label)}</p><p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(card.value)}</p></div>`);
						});
						_push(`<!--]--></div><div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"${_scopeId}><div class="site-card p-5"${_scopeId}><h2 class="text-xl font-semibold text-slate-900 dark:text-white"${_scopeId}>Activité récente</h2><ul class="mt-4 space-y-3"${_scopeId}><!--[-->`);
						ssrRenderList(activity, (item) => {
							_push(`<li class="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.title)}</span><span class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate(item.date)}</span></li>`);
						});
						_push(`<!--]--></ul></div><div class="site-card p-5"${_scopeId}><h2 class="text-xl font-semibold text-slate-900 dark:text-white"${_scopeId}>Prochaines actions</h2><ul class="mt-4 space-y-3"${_scopeId}><!--[-->`);
						ssrRenderList(actions, (item) => {
							_push(`<li class="rounded-xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item)}</li>`);
						});
						_push(`<!--]--></ul></div></div></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [(openBlock(), createBlock(Fragment, null, renderList(cards, (card) => {
						return createVNode("div", {
							key: card.label,
							class: "site-card p-5"
						}, [createVNode("p", { class: "text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(card.label), 1), createVNode("p", { class: "mt-4 text-3xl font-bold text-slate-900 dark:text-white" }, toDisplayString(card.value), 1)]);
					}), 64))]), createVNode("div", { class: "grid gap-6 xl:grid-cols-[1.1fr_0.9fr]" }, [createVNode("div", { class: "site-card p-5" }, [createVNode("h2", { class: "text-xl font-semibold text-slate-900 dark:text-white" }, "Activité récente"), createVNode("ul", { class: "mt-4 space-y-3" }, [(openBlock(), createBlock(Fragment, null, renderList(activity, (item) => {
						return createVNode("li", {
							key: item.title,
							class: "flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700"
						}, [createVNode("span", null, toDisplayString(item.title), 1), createVNode("span", { class: "text-sm text-slate-500" }, toDisplayString(item.date), 1)]);
					}), 64))])]), createVNode("div", { class: "site-card p-5" }, [createVNode("h2", { class: "text-xl font-semibold text-slate-900 dark:text-white" }, "Prochaines actions"), createVNode("ul", { class: "mt-4 space-y-3" }, [(openBlock(), createBlock(Fragment, null, renderList(actions, (item) => {
						return createVNode("li", {
							key: item,
							class: "rounded-xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
						}, toDisplayString(item), 1);
					}), 64))])])])])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-CY5gO-qc.mjs.map
