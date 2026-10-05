import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/pages/app/partenaire/contacts.vue?vue&type=script&setup=true&lang.ts
var contacts_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "contacts",
	__ssrInlineRender: true,
	setup(__props) {
		const contacts = [{
			id: 1,
			name: "Aline Mvondo",
			company: "Hotel Elite"
		}, {
			id: 2,
			name: "Christian Tchok",
			company: "Restaurant B"
		}];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Contacts</h1></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(contacts, (item) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(item.name)}</span><span>${ssrInterpolate(item.company)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/partenaire/contacts.vue
var _sfc_setup = contacts_vue_vue_type_script_setup_true_lang_default.setup;
contacts_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/partenaire/contacts.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contacts_default = contacts_vue_vue_type_script_setup_true_lang_default;

export { contacts_default as default };
//# sourceMappingURL=contacts-D-1mZ0l_.mjs.map
