import { t as BaseButton_default } from './BaseButton-B9jlVQPd.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './rolldown-runtime-D7D4PA-g.mjs';

//#region app/pages/app/admin/users.vue?vue&type=script&setup=true&lang.ts
var users_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "users",
	__ssrInlineRender: true,
	setup(__props) {
		const users = [
			{
				name: "Alice Kengne",
				role: "ADMIN",
				status: "Actif"
			},
			{
				name: "Paul Mvogo",
				role: "MANAGER",
				status: "Actif"
			},
			{
				name: "Julie Nfou",
				role: "PROSPECTEUR",
				status: "Actif"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BaseButton = BaseButton_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="site-card p-5"><div class="flex items-center justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400">Administration</p><h1 class="text-2xl font-bold text-slate-900 dark:text-white">Utilisateurs</h1></div>`);
			_push(ssrRenderComponent(_component_BaseButton, { variant: "primary" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Ajouter`);
					else return [createTextVNode("Ajouter")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="site-card p-5"><ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300"><!--[-->`);
			ssrRenderList(users, (user) => {
				_push(`<li class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700"><span>${ssrInterpolate(user.name)} — ${ssrInterpolate(user.role)}</span><span>${ssrInterpolate(user.status)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div>`);
		};
	}
});
//#endregion
//#region app/pages/app/admin/users.vue
var _sfc_setup = users_vue_vue_type_script_setup_true_lang_default.setup;
users_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/admin/users.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var users_default = users_vue_vue_type_script_setup_true_lang_default;

export { users_default as default };
//# sourceMappingURL=users-Ct64Jk9z.mjs.map
