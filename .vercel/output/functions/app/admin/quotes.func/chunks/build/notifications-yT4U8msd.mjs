import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/manager/notifications.vue?vue&type=script&setup=true&lang.ts
var notifications_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "notifications",
	__ssrInlineRender: true,
	setup(__props) {
		const notifications = [
			{
				id: 1,
				message: "Deux nouveaux prospects doivent être validés."
			},
			{
				id: 2,
				message: "Un rapport de terrain a été soumis pour validation."
			},
			{
				id: 3,
				message: "Une campagne de vente a dépassé son objectif."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(notifications, (item) => {
				_push(`<li class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">${ssrInterpolate(item.message)}</li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/manager/notifications.vue
var _sfc_setup = notifications_vue_vue_type_script_setup_true_lang_default.setup;
notifications_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/manager/notifications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notifications_default = notifications_vue_vue_type_script_setup_true_lang_default;

export { notifications_default as default };
//# sourceMappingURL=notifications-yT4U8msd.mjs.map
