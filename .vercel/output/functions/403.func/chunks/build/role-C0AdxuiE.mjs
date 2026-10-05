import { d as defineNuxtRouteMiddleware, n as navigateTo } from '../virtual/entry.mjs';
import { u as useAuth } from './useAuth-C3GRMrq1.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue';
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
import 'vue/server-renderer';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/middleware/role.ts
var role_default = defineNuxtRouteMiddleware((to) => {
	const auth = useAuth();
	if (!auth.isAuthenticated.value) return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`);
	const requiredRoles = to.meta.role;
	const allowedRoles = Array.isArray(requiredRoles) ? requiredRoles : requiredRoles ? [requiredRoles] : [];
	if (allowedRoles.length === 0) return;
	if (!allowedRoles.some((role) => auth.hasRole(String(role)))) return navigateTo("/403");
});

export { role_default as default };
//# sourceMappingURL=role-C0AdxuiE.mjs.map
