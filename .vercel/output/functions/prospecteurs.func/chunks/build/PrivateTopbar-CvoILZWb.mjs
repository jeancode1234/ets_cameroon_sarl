import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/components/private/PrivateTopbar.vue?vue&type=script&setup=true&lang.ts
var PrivateTopbar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PrivateTopbar",
	__ssrInlineRender: true,
	setup(__props) {
		const auth = useAuth();
		const role = computed(() => auth.user.value?.role ?? "USER");
		const roleLabels = {
			ADMIN: "administration",
			MANAGER: "manager",
			PROSPECTEUR: "prospecteur",
			CLIENT: "client",
			PARTENAIRE: "partenaire",
			USER: "utilisateur"
		};
		const currentRoleLabel = computed(() => roleLabels[role.value] ?? "utilisateur");
		const displayedName = computed(() => {
			const user = auth.user.value;
			if (!user) return "Compte";
			return `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || user.email;
		});
		const initials = computed(() => {
			const user = auth.user.value;
			if (!user) return "U";
			return `${user.firstName?.[0] ?? user.email?.[0] ?? "U"}${user.lastName?.[0] ?? ""}`.toUpperCase();
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80" }, _attrs))}><div class="flex items-center justify-between px-4 py-4 md:px-6"><div><p class="text-[10px] uppercase tracking-[0.24em] text-slate-400">Espace ${ssrInterpolate(unref(currentRoleLabel))}</p><h1 class="text-lg font-semibold text-slate-900 dark:text-white">Tableau de bord</h1></div><div class="flex items-center gap-3">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/app/notifications",
				class: "rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:border-primary/30 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Notifications `);
					else return [createTextVNode(" Notifications ")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-900"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-[0_8px_18px_rgba(8,47,90,0.2)]">${ssrInterpolate(unref(initials))}</div><div class="hidden text-left sm:block"><p class="text-xs text-slate-500 dark:text-slate-400">Compte</p><p class="text-sm font-medium text-slate-900 dark:text-white">${ssrInterpolate(unref(displayedName))}</p></div></div></div></div></header>`);
		};
	}
});
//#endregion
//#region app/components/private/PrivateTopbar.vue
var _sfc_setup = PrivateTopbar_vue_vue_type_script_setup_true_lang_default.setup;
PrivateTopbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/private/PrivateTopbar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PrivateTopbar_default = Object.assign(PrivateTopbar_vue_vue_type_script_setup_true_lang_default, { __name: "PrivateTopbar" });

export { PrivateTopbar_default as default };
//# sourceMappingURL=PrivateTopbar-CvoILZWb.mjs.map
