import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/admin/features.vue?vue&type=script&setup=true&lang.ts
var features_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "features",
	__ssrInlineRender: true,
	setup(__props) {
		const { featureCatalog, getFeatureStatusTone } = useFeatureCatalog();
		const features = featureCatalog;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Administration</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Gestion des fonctionnalités</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Nouvelle feature`);
					else return [createTextVNode("Nouvelle feature")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
			ssrRenderList(unref(features), (feature) => {
				_push(`<article class="site-card p-5"><div class="flex items-center justify-between gap-3"><h2 class="text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate(feature.name)}</h2><span class="${ssrRenderClass([unref(getFeatureStatusTone)(feature.status), "rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"])}">${ssrInterpolate(feature.status)}</span></div><p class="mt-3 text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(feature.description)}</p><div class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"><span>${ssrInterpolate(feature.category)}</span><span>${ssrInterpolate(feature.owner)}</span></div><div class="mt-5">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: feature.route,
					class: "text-sm font-semibold text-primary hover:underline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Ouvrir`);
						else return [createTextVNode("Ouvrir")];
					}),
					_: 2
				}, _parent));
				_push(`</div></article>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/features.vue
var _sfc_setup = features_vue_vue_type_script_setup_true_lang_default.setup;
features_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/features.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var features_default = features_vue_vue_type_script_setup_true_lang_default;

export { features_default as default };
//# sourceMappingURL=features-_mbBrid0.mjs.map
