import { _ as __exportAll } from './rolldown-runtime-D7D4PA-g.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

//#region app/components/ui/BaseSelect.vue?vue&type=script&setup=true&lang.ts
var BaseSelect_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BaseSelect",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		label: {},
		options: {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-slate-700 dark:text-slate-200" }, _attrs))}>`);
			if (__props.label) _push(`<span class="mb-2 block">${ssrInterpolate(__props.label)}</span>`);
			else _push(`<!---->`);
			_push(`<select${ssrRenderAttr("value", __props.modelValue)} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"><!--[-->`);
			ssrRenderList(__props.options, (option) => {
				_push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.label)}</option>`);
			});
			_push(`<!--]--></select></label>`);
		};
	}
});
//#endregion
//#region app/components/ui/BaseSelect.vue
var BaseSelect_exports = /* @__PURE__ */ __exportAll({ default: () => BaseSelect_default });
var _sfc_setup = BaseSelect_vue_vue_type_script_setup_true_lang_default.setup;
BaseSelect_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseSelect.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BaseSelect_default = Object.assign(BaseSelect_vue_vue_type_script_setup_true_lang_default, { __name: "BaseSelect" });

export { BaseSelect_exports as n, BaseSelect_default as t };
//# sourceMappingURL=BaseSelect-DN6-L8QH.mjs.map
