import PrivateMobileNavigation_default from './PrivateMobileNavigation-lB1bewg2.mjs';
import PrivateSidebar_default from './PrivateSidebar-CcBSzdGJ.mjs';
import PrivateTopbar_default from './PrivateTopbar-CvoILZWb.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './nuxt-link-CynXzsvt.mjs';
import '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/layouts/private.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_PrivateSidebar = PrivateSidebar_default;
	const _component_PrivateTopbar = PrivateTopbar_default;
	const _component_PrivateMobileNavigation = PrivateMobileNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_PrivateSidebar, null, null, _parent));
	_push(`<div class="lg:pl-72">`);
	_push(ssrRenderComponent(_component_PrivateTopbar, null, null, _parent));
	_push(`<main class="min-h-[calc(100vh-80px)] p-4 md:p-6">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main></div>`);
	_push(ssrRenderComponent(_component_PrivateMobileNavigation, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/private.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var private_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { private_default as default };
//# sourceMappingURL=private-Cgi-UHj3.mjs.map
