import { _ as __exportAll } from './rolldown-runtime-D7D4PA-g.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

//#region app/components/ui/BaseTextarea.vue?vue&type=script&setup=true&lang.ts
var BaseTextarea_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BaseTextarea",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		label: {},
		placeholder: {},
		rows: {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-slate-700 dark:text-slate-200" }, _attrs))}>`);
			if (__props.label) _push(`<span class="mb-2 block">${ssrInterpolate(__props.label)}</span>`);
			else _push(`<!---->`);
			_push(`<textarea${ssrRenderAttr("rows", __props.rows)}${ssrRenderAttr("placeholder", __props.placeholder)} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">${ssrInterpolate(__props.modelValue)}</textarea></label>`);
		};
	}
});
//#endregion
//#region app/components/ui/BaseTextarea.vue
var BaseTextarea_exports = /* @__PURE__ */ __exportAll({ default: () => BaseTextarea_default });
var _sfc_setup = BaseTextarea_vue_vue_type_script_setup_true_lang_default.setup;
BaseTextarea_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseTextarea.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BaseTextarea_default = Object.assign(BaseTextarea_vue_vue_type_script_setup_true_lang_default, { __name: "BaseTextarea" });

export { BaseTextarea_exports as n, BaseTextarea_default as t };
//# sourceMappingURL=BaseTextarea-kaPUo8A9.mjs.map
