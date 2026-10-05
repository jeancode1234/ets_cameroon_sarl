import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/client/demandes.vue?vue&type=script&setup=true&lang.ts
var demandes_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "demandes",
	__ssrInlineRender: true,
	setup(__props) {
		const demandes = [{
			id: 1,
			name: "Rénovation salle de restauration",
			status: "En cours"
		}, {
			id: 2,
			name: "Installation mobilier hôtel",
			status: "Validée"
		}];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Mes demandes</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(demandes, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.name)}</span><span>${ssrInterpolate(item.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/client/demandes.vue
var _sfc_setup = demandes_vue_vue_type_script_setup_true_lang_default.setup;
demandes_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/client/demandes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var demandes_default = demandes_vue_vue_type_script_setup_true_lang_default;

export { demandes_default as default };
//# sourceMappingURL=demandes-CWBfddNG.mjs.map
