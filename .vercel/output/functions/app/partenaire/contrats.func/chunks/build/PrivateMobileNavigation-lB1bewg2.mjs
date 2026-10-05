import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../virtual/entry.mjs';
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

//#region app/components/private/PrivateMobileNavigation.vue?vue&type=script&setup=true&lang.ts
var PrivateMobileNavigation_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PrivateMobileNavigation",
	__ssrInlineRender: true,
	setup(__props) {
		const auth = useAuth();
		const role = computed(() => auth.user.value?.role ?? "USER");
		const menu = computed(() => {
			switch (role.value) {
				case "ADMIN": return [
					{
						label: "Dashboard",
						to: "/app/admin/dashboard"
					},
					{
						label: "Devis",
						to: "/app/admin/quotes"
					},
					{
						label: "Alertes",
						to: "/app/admin/alerts"
					},
					{
						label: "Profil",
						to: "/app/profile"
					}
				];
				case "MANAGER": return [
					{
						label: "Dashboard",
						to: "/app/manager/dashboard"
					},
					{
						label: "Pipeline",
						to: "/app/manager/pipeline"
					},
					{
						label: "Chantiers",
						to: "/app/manager/chantiers"
					},
					{
						label: "Profil",
						to: "/app/profile"
					}
				];
				case "CLIENT": return [
					{
						label: "Dashboard",
						to: "/app/client/dashboard"
					},
					{
						label: "Devis",
						to: "/app/client/devis"
					},
					{
						label: "Paiements",
						to: "/app/client/payments"
					},
					{
						label: "Profil",
						to: "/app/profile"
					}
				];
				case "PARTENAIRE": return [
					{
						label: "Dashboard",
						to: "/app/partenaire/dashboard"
					},
					{
						label: "Projets",
						to: "/app/partenaire/projets"
					},
					{
						label: "Contrats",
						to: "/app/partenaire/contrats"
					},
					{
						label: "Profil",
						to: "/app/profile"
					}
				];
				default: return [{
					label: "Dashboard",
					to: "/app/prospecteur/dashboard"
				}, {
					label: "Chantiers",
					to: "/app/prospecteur/chantiers"
				}];
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden" }, _attrs))}><div class="grid grid-cols-4 gap-2 text-center text-[11px]"><!--[-->`);
			ssrRenderList(unref(menu), (item) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: item.to,
					to: item.to,
					class: "rounded-xl px-2 py-2 text-slate-600 dark:text-slate-300",
					"active-class": "bg-primary/5 text-primary dark:bg-primary/10 dark:text-white"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></nav>`);
		};
	}
});
//#endregion
//#region app/components/private/PrivateMobileNavigation.vue
var _sfc_setup = PrivateMobileNavigation_vue_vue_type_script_setup_true_lang_default.setup;
PrivateMobileNavigation_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/private/PrivateMobileNavigation.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PrivateMobileNavigation_default = Object.assign(PrivateMobileNavigation_vue_vue_type_script_setup_true_lang_default, { __name: "PrivateMobileNavigation" });

export { PrivateMobileNavigation_default as default };
//# sourceMappingURL=PrivateMobileNavigation-lB1bewg2.mjs.map
