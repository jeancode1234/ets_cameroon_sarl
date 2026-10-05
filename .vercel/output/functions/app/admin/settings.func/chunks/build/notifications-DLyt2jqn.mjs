import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/notifications.vue?vue&type=script&setup=true&lang.ts
var notifications_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "notifications",
	__ssrInlineRender: true,
	setup(__props) {
		const notifications = [
			{
				id: "1",
				title: "Nouvelle demande",
				body: "Une demande de devis a été reçue.",
				type: "info"
			},
			{
				id: "2",
				title: "Validation rapport",
				body: "Votre rapport a été validé par le manager.",
				type: "success"
			},
			{
				id: "3",
				title: "Changement de statut",
				body: "Un prospect a évolué vers le statut QUALIFIED.",
				type: "warning"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h1></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(notifications, (item) => {
				_push(`<article class="site-card p-5"><div class="flex items-center justify-between gap-4"><div><p class="text-base font-semibold text-slate-900 dark:text-white">${ssrInterpolate(item.title)}</p><p class="mt-1 text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(item.body)}</p></div><span class="rounded-full bg-slate-100 px-2 py-1 text-xs uppercase text-slate-700 dark:bg-slate-800 dark:text-slate-200">${ssrInterpolate(item.type)}</span></div></article>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/notifications.vue
var _sfc_setup = notifications_vue_vue_type_script_setup_true_lang_default.setup;
notifications_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/notifications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var notifications_default = notifications_vue_vue_type_script_setup_true_lang_default;

export { notifications_default as default };
//# sourceMappingURL=notifications-DLyt2jqn.mjs.map
