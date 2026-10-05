import { n as navigateTo } from '../virtual/entry.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/403.vue?vue&type=script&setup=true&lang.ts
var _403_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "403",
	__ssrInlineRender: true,
	setup(__props) {
		const auth = useAuth();
		const dashboardRoute = computed(() => auth.getHomeRouteForRole(auth.user.value?.role));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell max-w-xl"><div class="site-card p-10 text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">403</p><h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Accès refusé</h1><p class="mt-4 text-slate-600 dark:text-slate-300">Vous n&#39;avez pas les permissions nécessaires pour accéder à cette page.</p><div class="mt-8">`);
			_push(ssrRenderComponent(_component_BaseButton, {
				variant: "primary",
				onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(dashboardRoute))
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Retour au tableau de bord`);
					else return [createTextVNode("Retour au tableau de bord")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/403.vue
var _sfc_setup = _403_vue_vue_type_script_setup_true_lang_default.setup;
_403_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/403.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _403_default = _403_vue_vue_type_script_setup_true_lang_default;

export { _403_default as default };
//# sourceMappingURL=403-DiODEO7Z.mjs.map
