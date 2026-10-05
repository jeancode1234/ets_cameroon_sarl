import { n as navigateTo } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/app/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const auth = useAuth();
		const targetRoute = computed(() => auth.getHomeRouteForRole(auth.user.value?.role));
		if (auth.isAuthenticated.value) [__temp, __restore] = withAsyncContext(() => navigateTo(targetRoute.value, { replace: true })), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-[60vh] items-center justify-center" }, _attrs))}><div class="site-card max-w-xl p-8 text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Espace privé</p><h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Bienvenue dans votre espace</h1><p class="mt-3 text-slate-600 dark:text-slate-300">Vous allez être redirigé vers votre tableau de bord selon votre rôle.</p><div class="mt-6 flex justify-center gap-3">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: unref(targetRoute),
				class: "premium-button premium-button-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Accéder au tableau de bord`);
					else return [createTextVNode("Accéder au tableau de bord")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var app_default = index_vue_vue_type_script_setup_true_lang_default;

export { app_default as default };
//# sourceMappingURL=app-BFQp-svI.mjs.map
