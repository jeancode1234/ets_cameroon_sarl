import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/profile.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_BaseButton = BaseButton_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-6"><div class="flex items-center gap-4"><div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">PR</div><div><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Profil</h1><p class="text-sm text-slate-500 dark:text-slate-400">Informations personnelles</p></div></div></div><div class="grid gap-6 lg:grid-cols-2"><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Informations personnelles</h2><div class="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300"><p><strong>Nom :</strong> Prospect</p><p><strong>Email :</strong> prospect@cameroonservices.cm</p><p><strong>Téléphone :</strong> +237 6XX XX XX XX</p><p><strong>Zone :</strong> Douala</p><p><strong>Rôle :</strong> PROSPECTEUR</p></div></div><div class="site-card p-5"><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Sécurité</h2><div class="mt-4 flex flex-col gap-3">`);
	_push(ssrRenderComponent(_component_BaseButton, { variant: "secondary" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Modifier profil`);
			else return [createTextVNode("Modifier profil")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_BaseButton, { variant: "secondary" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Changer mot de passe`);
			else return [createTextVNode("Changer mot de passe")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Déconnexion`);
			else return [createTextVNode("Déconnexion")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile_default as default };
//# sourceMappingURL=profile-C6gPtGW2.mjs.map
