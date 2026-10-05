import { _ as __exportAll } from './rolldown-runtime-D7D4PA-g.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';

//#region app/components/ui/BaseInput.vue?vue&type=script&setup=true&lang.ts
var BaseInput_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BaseInput",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		label: {},
		type: {},
		placeholder: {},
		disabled: { type: Boolean }
	},
	emits: ["update:modelValue"],
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-slate-700 dark:text-slate-200" }, _attrs))}>`);
			if (__props.label) _push(`<span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">${ssrInterpolate(__props.label)}</span>`);
			else _push(`<!---->`);
			_push(`<input${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-sm text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.03)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:disabled:bg-slate-800"></label>`);
		};
	}
});
//#endregion
//#region app/components/ui/BaseInput.vue
var BaseInput_exports = /* @__PURE__ */ __exportAll({ default: () => BaseInput_default });
var _sfc_setup = BaseInput_vue_vue_type_script_setup_true_lang_default.setup;
BaseInput_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseInput.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BaseInput_default = Object.assign(BaseInput_vue_vue_type_script_setup_true_lang_default, { __name: "BaseInput" });

export { BaseInput_exports as n, BaseInput_default as t };
//# sourceMappingURL=BaseInput-EV4vVSI-.mjs.map
