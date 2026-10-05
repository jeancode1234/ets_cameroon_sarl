import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/components/public/AppFooter.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-slate-200 bg-slate-950 text-slate-200 dark:border-slate-800" }, _attrs))}><div class="container-shell py-10 md:py-12"><div class="mt-10 grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]"><div><div class="flex items-center gap-3"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-700 text-base font-bold text-white">E</div><div><p class="text-[10px] uppercase tracking-[0.26em] text-slate-400">ETS</p><p class="text-base font-semibold text-white">Cameroon Services</p></div></div><p class="mt-5 max-w-md text-sm leading-7 text-slate-300"> Nous accompagnons les acteurs de la construction, de l’hôtellerie et de la restauration avec des solutions fiables, rapides et pensées pour les exigences du terrain. </p></div><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigation</p><ul class="mt-4 space-y-3 text-sm text-slate-300"><li>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/a-propos",
		class: "transition hover:text-white"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`À propos`);
			else return [createTextVNode("À propos")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/services",
		class: "transition hover:text-white"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Services`);
			else return [createTextVNode("Services")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/solutions",
		class: "transition hover:text-white"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Solutions`);
			else return [createTextVNode("Solutions")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/prospecteurs",
		class: "transition hover:text-white"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Prospecteurs`);
			else return [createTextVNode("Prospecteurs")];
		}),
		_: 1
	}, _parent));
	_push(`</li><li>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/contact",
		class: "transition hover:text-white"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Contact`);
			else return [createTextVNode("Contact")];
		}),
		_: 1
	}, _parent));
	_push(`</li></ul></div><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p><ul class="mt-4 space-y-3 text-sm text-slate-300"><li>WhatsApp : +237 6XX XX XX XX</li><li>Email : recrutement@cameroonservices.cm</li><li>Site : cameroonservices.com</li><li>Douala, Cameroun</li></ul></div></div><div class="mt-10 border-t border-slate-800 pt-5 text-sm text-slate-400"> © 2026 ETS Cameroon Services — Tous droits réservés. </div></div></footer>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/AppFooter.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AppFooter_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "AppFooter" });

export { AppFooter_default as default };
//# sourceMappingURL=AppFooter-D4oncklD.mjs.map
