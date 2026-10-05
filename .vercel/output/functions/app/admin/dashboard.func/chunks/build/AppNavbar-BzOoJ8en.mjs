import { n as navigateTo } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CynXzsvt.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/components/public/AppNavbar.vue?vue&type=script&setup=true&lang.ts
var AppNavbar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppNavbar",
	__ssrInlineRender: true,
	setup(__props) {
		const links = [
			{
				label: "Accueil",
				to: "/"
			},
			{
				label: "À propos",
				to: "/a-propos"
			},
			{
				label: "Services",
				to: "/services"
			},
			{
				label: "Solutions",
				to: "/solutions"
			},
			{
				label: "Prospecteurs",
				to: "/prospecteurs"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		];
		const mobileOpen = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_BaseButton = BaseButton_default;
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80" }, _attrs))}><div class="container-shell"><nav class="flex h-20 items-center justify-between gap-4">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-2 pr-4 shadow-sm transition hover:border-primary/20 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-primary/30 dark:hover:bg-slate-900"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-700 text-sm font-bold text-white shadow-[0_10px_18px_rgba(8,47,90,0.2)]"${_scopeId}>E</div><div class="leading-tight"${_scopeId}><p class="text-[10px] uppercase tracking-[0.28em] text-primary/70"${_scopeId}>ETS</p><p class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}>Cameroon Services</p></div>`);
					else return [createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-700 text-sm font-bold text-white shadow-[0_10px_18px_rgba(8,47,90,0.2)]" }, "E"), createVNode("div", { class: "leading-tight" }, [createVNode("p", { class: "text-[10px] uppercase tracking-[0.28em] text-primary/70" }, "ETS"), createVNode("p", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, "Cameroon Services")])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1.5 md:flex dark:border-slate-700 dark:bg-slate-900/80"><!--[-->`);
			ssrRenderList(links, (item) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: item.to,
					to: item.to,
					class: "rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-primary dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
					"active-class": "bg-white text-primary shadow-sm dark:bg-slate-800 dark:text-white"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div><div class="hidden items-center gap-3 md:flex"><div class="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 lg:block">Support terrain</div>`);
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
			_push(`</div><button class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"><span class="sr-only">Ouvrir le menu</span> ☰ </button></nav></div>`);
			if (unref(mobileOpen)) {
				_push(`<div class="border-t border-slate-200 bg-white/95 md:hidden dark:border-slate-800 dark:bg-slate-950/95"><div class="container-shell flex flex-col gap-4 py-4"><!--[-->`);
				ssrRenderList(links, (item) => {
					_push(ssrRenderComponent(_component_NuxtLink, {
						key: item.to,
						to: item.to,
						class: "rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white",
						onClick: ($event) => mobileOpen.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(item.label)}`);
							else return [createTextVNode(toDisplayString(item.label), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				_push(ssrRenderComponent(_component_BaseButton, {
					variant: "primary",
					class: "w-full",
					onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/demande-devis")
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Demander un devis`);
						else return [createTextVNode("Demander un devis")];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
});
//#endregion
//#region app/components/public/AppNavbar.vue
var _sfc_setup = AppNavbar_vue_vue_type_script_setup_true_lang_default.setup;
AppNavbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/AppNavbar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AppNavbar_default = Object.assign(AppNavbar_vue_vue_type_script_setup_true_lang_default, { __name: "AppNavbar" });

export { AppNavbar_default as default };
//# sourceMappingURL=AppNavbar-BzOoJ8en.mjs.map
