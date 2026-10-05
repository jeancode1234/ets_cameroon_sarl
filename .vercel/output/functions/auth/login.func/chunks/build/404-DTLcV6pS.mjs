import { n as navigateTo } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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

//#region app/pages/404.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_BaseButton = BaseButton_default;
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell max-w-xl"><div class="site-card p-10 text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p><h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Page introuvable</h1><p class="mt-4 text-slate-600 dark:text-slate-300">La page demandée n’existe pas ou a été déplacée.</p><div class="mt-8">`);
	_push(ssrRenderComponent(_component_BaseButton, {
		variant: "primary",
		onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Retour à l&#39;accueil`);
			else return [createTextVNode("Retour à l'accueil")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></section>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _404_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _404_default as default };
//# sourceMappingURL=404-DTLcV6pS.mjs.map
