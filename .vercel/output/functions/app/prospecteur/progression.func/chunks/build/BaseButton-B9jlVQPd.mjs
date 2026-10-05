import { _ as __exportAll } from './rolldown-runtime-D7D4PA-g.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/ui/BaseButton.vue?vue&type=script&setup=true&lang.ts
var BaseButton_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BaseButton",
	__ssrInlineRender: true,
	props: {
		variant: { default: "primary" },
		type: { default: "button" },
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const variantClasses = {
			primary: "premium-button-primary",
			secondary: "premium-button-secondary",
			ghost: "border border-transparent bg-transparent text-primary hover:bg-primary/5 dark:text-slate-100"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${ssrRenderAttrs(mergeProps({
				type: __props.type,
				disabled: __props.disabled || __props.loading,
				class: [
					"premium-button",
					variantClasses[__props.variant],
					{ "opacity-60 cursor-not-allowed": __props.disabled || __props.loading },
					{ "gap-2": !!_ctx.$slots.default }
				]
			}, _ctx.$attrs, _attrs))}>`);
			if (__props.loading) _push(`<span class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`);
			else _push(`<!---->`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
});
//#endregion
//#region app/components/ui/BaseButton.vue
var BaseButton_exports = /* @__PURE__ */ __exportAll({ default: () => BaseButton_default });
var _sfc_setup = BaseButton_vue_vue_type_script_setup_true_lang_default.setup;
BaseButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseButton.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var BaseButton_default = Object.assign(BaseButton_vue_vue_type_script_setup_true_lang_default, { __name: "BaseButton" });

export { BaseButton_exports as n, BaseButton_default as t };
//# sourceMappingURL=BaseButton-B9jlVQPd.mjs.map
