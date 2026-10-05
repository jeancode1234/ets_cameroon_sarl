import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { t as BaseTextarea_default } from './BaseTextarea-kaPUo8A9.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/prospecteur/rapports.vue?vue&type=script&setup=true&lang.ts
var rapports_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "rapports",
	__ssrInlineRender: true,
	setup(__props) {
		const form = reactive({
			date: "",
			activity: "",
			prospectsCount: 0,
			visitedSites: 0,
			results: "",
			observations: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseInput = BaseInput_default;
			const _component_BaseTextarea = BaseTextarea_default;
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rapports</h1></div><form class="site-card p-6"><div class="grid gap-5 md:grid-cols-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).date,
				"onUpdate:modelValue": ($event) => unref(form).date = $event,
				label: "Date",
				type: "date"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).activity,
				"onUpdate:modelValue": ($event) => unref(form).activity = $event,
				label: "Activité réalisée"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).prospectsCount,
				"onUpdate:modelValue": ($event) => unref(form).prospectsCount = $event,
				label: "Nombre de prospects",
				type: "number"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).visitedSites,
				"onUpdate:modelValue": ($event) => unref(form).visitedSites = $event,
				label: "Chantiers visités",
				type: "number"
			}, null, _parent));
			_push(`<div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseTextarea, {
				modelValue: unref(form).results,
				"onUpdate:modelValue": ($event) => unref(form).results = $event,
				label: "Résultats",
				rows: 4
			}, null, _parent));
			_push(`</div><div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseTextarea, {
				modelValue: unref(form).observations,
				"onUpdate:modelValue": ($event) => unref(form).observations = $event,
				label: "Observations",
				rows: 4
			}, null, _parent));
			_push(`</div></div><div class="mt-6">`);
			_push(ssrRenderComponent(_component_BaseButton, { type: "submit" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Soumettre le rapport`);
					else return [createTextVNode("Soumettre le rapport")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/prospecteur/rapports.vue
var _sfc_setup = rapports_vue_vue_type_script_setup_true_lang_default.setup;
rapports_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prospecteur/rapports.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var rapports_default = rapports_vue_vue_type_script_setup_true_lang_default;

export { rapports_default as default };
//# sourceMappingURL=rapports-B-4zOOyb.mjs.map
