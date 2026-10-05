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

//#region app/middleware/guest.ts
var guest_default = defineNuxtRouteMiddleware(() => {
	if (useAuth().isAuthenticated.value) return navigateTo("/app");
});

export { guest_default as default };
//# sourceMappingURL=guest-D0YgJx83.mjs.map
