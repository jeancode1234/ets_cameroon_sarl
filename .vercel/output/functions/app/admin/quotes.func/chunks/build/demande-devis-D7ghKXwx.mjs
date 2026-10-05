import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { t as BaseInput_default } from './BaseInput-EV4vVSI-.mjs';
import { t as BaseSelect_default } from './BaseSelect-DN6-L8QH.mjs';
import { t as BaseTextarea_default } from './BaseTextarea-kaPUo8A9.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/demande-devis.vue?vue&type=script&setup=true&lang.ts
var demande_devis_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "demande-devis",
	__ssrInlineRender: true,
	setup(__props) {
		const form = reactive({
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			city: "",
			projectType: "Construction",
			service: "",
			description: "",
			attachments: []
		});
		const state = ref("idle");
		const projectOptions = [
			{
				value: "Construction",
				label: "Construction"
			},
			{
				value: "Rénovation",
				label: "Rénovation"
			},
			{
				value: "Hôtel",
				label: "Hôtel"
			},
			{
				value: "Restaurant",
				label: "Restaurant"
			},
			{
				value: "Décoration",
				label: "Décoration"
			},
			{
				value: "Matériaux",
				label: "Matériaux"
			},
			{
				value: "Artisan",
				label: "Artisan"
			},
			{
				value: "Autre",
				label: "Autre"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseInput = BaseInput_default;
			const _component_BaseSelect = BaseSelect_default;
			const _component_BaseTextarea = BaseTextarea_default;
			const _component_BaseButton = BaseButton_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell max-w-4xl"><div class="mb-10 text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Demande de devis</p><h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Partagez votre projet</h1></div><form class="site-card p-6 md:p-8"><div class="grid gap-5 md:grid-cols-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).firstName,
				"onUpdate:modelValue": ($event) => unref(form).firstName = $event,
				label: "Prénom",
				placeholder: "Votre prénom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).lastName,
				"onUpdate:modelValue": ($event) => unref(form).lastName = $event,
				label: "Nom",
				placeholder: "Votre nom"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).phone,
				"onUpdate:modelValue": ($event) => unref(form).phone = $event,
				label: "Téléphone",
				type: "tel",
				placeholder: "+237"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				label: "Email",
				type: "email",
				placeholder: "vous@exemple.com"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).city,
				"onUpdate:modelValue": ($event) => unref(form).city = $event,
				label: "Ville",
				placeholder: "Douala"
			}, null, _parent));
			_push(ssrRenderComponent(_component_BaseSelect, {
				modelValue: unref(form).projectType,
				"onUpdate:modelValue": ($event) => unref(form).projectType = $event,
				label: "Type de projet",
				options: projectOptions
			}, null, _parent));
			_push(`<div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(form).service,
				"onUpdate:modelValue": ($event) => unref(form).service = $event,
				label: "Service recherché",
				placeholder: "Matériaux, rénovation, décor..."
			}, null, _parent));
			_push(`</div><div class="md:col-span-2">`);
			_push(ssrRenderComponent(_component_BaseTextarea, {
				modelValue: unref(form).description,
				"onUpdate:modelValue": ($event) => unref(form).description = $event,
				label: "Description",
				rows: 6,
				placeholder: "Décrivez votre besoin, le contexte du projet et vos exigences."
			}, null, _parent));
			_push(`</div></div><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center"><div class="text-sm text-slate-500 dark:text-slate-400">`);
			if (unref(state) === "idle") _push(`<span>Votre demande sera traitée par notre équipe.</span>`);
			else if (unref(state) === "loading") _push(`<span>Envoi en cours...</span>`);
			else if (unref(state) === "success") _push(`<span class="text-green-600">Demande envoyée avec succès.</span>`);
			else _push(`<span class="text-red-600">Une erreur s’est produite lors de l’envoi.</span>`);
			_push(`</div>`);
			_push(ssrRenderComponent(_component_BaseButton, {
				type: "submit",
				loading: unref(state) === "loading"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Envoyer la demande`);
					else return [createTextVNode("Envoyer la demande")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form></div></section>`);
		};
	}
});
//#endregion
//#region app/pages/demande-devis.vue
var _sfc_setup = demande_devis_vue_vue_type_script_setup_true_lang_default.setup;
demande_devis_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demande-devis.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var demande_devis_default = demande_devis_vue_vue_type_script_setup_true_lang_default;

export { demande_devis_default as default };
//# sourceMappingURL=demande-devis-D7ghKXwx.mjs.map
