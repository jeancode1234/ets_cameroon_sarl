import { g as useRoute, h as useHead$1, n as navigateTo } from '../virtual/entry.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/services/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const slug = computed(() => String(route.params.slug || ""));
		const serviceMap = {
			"gros-oeuvre": {
				title: "Gros œuvre",
				description: "Ciment, fer, agrégats, toiture et matériaux structuraux pour des chantiers solides et fiables."
			},
			"second-oeuvre": {
				title: "Second œuvre",
				description: "Électricité, plomberie, menuiserie et solutions techniques pour des installations fiables."
			},
			"finitions": {
				title: "Finitions",
				description: "Carrelage, peinture et sanitaire pour des références de qualité et un rendu professionnel."
			},
			"hotels-restaurants": {
				title: "Hôtels & restaurants",
				description: "Cuisine professionnelle, mobilier, literie et linge conçus pour les établissements de service."
			},
			decoration: {
				title: "Décoration",
				description: "Mobilier, luminaires et agencement pour créer des espaces modernes et fonctionnels."
			},
			"services-artisans": {
				title: "Services artisans",
				description: "Mise en relation pour pose et installation des produits sélectionnés sur votre site."
			}
		};
		const pageTitle = computed(() => serviceMap[slug.value]?.title || "Service");
		const pageDescription = computed(() => serviceMap[slug.value]?.description || "Description du service.");
		useHead$1({ title: `${pageTitle.value} | ETS Cameroon Services` });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell max-w-4xl"><div class="site-card p-8"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Service</p><h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(unref(pageTitle))}</h1><p class="mt-5 text-slate-600 dark:text-slate-300">${ssrInterpolate(unref(pageDescription))}</p><div class="mt-8">`);
			_push(ssrRenderComponent(_component_BaseButton, {
				variant: "primary",
				onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/demande-devis")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Demander un devis`);
					else return [createTextVNode("Demander un devis")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/services/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = _slug__vue_vue_type_script_setup_true_lang_default;

export { _slug__default as default };
//# sourceMappingURL=_slug_-22ewN3Ub.mjs.map
