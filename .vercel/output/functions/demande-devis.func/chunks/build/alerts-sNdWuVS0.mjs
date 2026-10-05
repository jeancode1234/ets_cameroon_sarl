import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/admin/alerts.vue?vue&type=script&setup=true&lang.ts
var alerts_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "alerts",
	__ssrInlineRender: true,
	setup(__props) {
		const { alertData } = useBusinessData();
		const alerts = alertData;
		function getSeverityClass(severity) {
			const map = {
				info: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
				success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
				warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
				danger: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
			};
			return map[severity] ?? map.info;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Administration</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Alertes &amp; notifications</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Nouvelle alerte`);
					else return [createTextVNode("Nouvelle alerte")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(unref(alerts), (alert) => {
				_push(`<article class="site-card p-5"><div class="flex items-start justify-between gap-4"><div><p class="text-base font-semibold text-slate-900 dark:text-white">${ssrInterpolate(alert.title)}</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(alert.message)}</p></div><span class="${ssrRenderClass([getSeverityClass(alert.severity), "rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"])}">${ssrInterpolate(alert.severity)}</span></div><p class="mt-4 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(alert.createdAt)}</p></article>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/alerts.vue
var _sfc_setup = alerts_vue_vue_type_script_setup_true_lang_default.setup;
alerts_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/alerts.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var alerts_default = alerts_vue_vue_type_script_setup_true_lang_default;

export { alerts_default as default };
//# sourceMappingURL=alerts-sNdWuVS0.mjs.map
