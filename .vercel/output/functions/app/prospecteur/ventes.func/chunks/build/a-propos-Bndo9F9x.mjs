import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/pages/a-propos.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "section-shell" }, _attrs))}><div class="container-shell"><div class="mb-12 max-w-3xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">À propos</p><h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Une présence solide à Douala et dans les projets de terrain.</h1></div><div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div class="space-y-5 text-slate-600 dark:text-slate-300"><p>ETS CAMEROON SERVICES est présenté comme un partenaire à Douala spécialisé dans la fourniture de matériaux de construction et l’équipement complet pour hôtels, restaurants et chantiers.</p><p>Nous soutenons les acteurs du BTP, de l’hôtellerie et de la restauration avec des approvisionnements fiables, des conseils adaptés aux territoires et un accompagnement pensé pour le terrain.</p><p>Notre modèle repose sur la proximité, la disponibilité et la qualité des livraisons pour faire avancer les projets avec confiance.</p></div><div class="site-card p-6"><div class="grid gap-4 sm:grid-cols-2"><div class="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p class="text-2xl font-bold text-primary">Douala</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Partenaire local</p></div><div class="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p class="text-2xl font-bold text-primary">BTP</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Matériaux et équipement</p></div><div class="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p class="text-2xl font-bold text-primary">Hôtels</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Cuisine, literie, mobilier</p></div><div class="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p class="text-2xl font-bold text-primary">Restaurants</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Équipements professionnels</p></div></div></div></div></div></section>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/a-propos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var a_propos_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { a_propos_default as default };
//# sourceMappingURL=a-propos-Bndo9F9x.mjs.map
