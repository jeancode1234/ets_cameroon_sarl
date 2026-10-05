import { s as stateDiagnostics, u as useNuxtApp, a as useRuntimeConfig, $ as $fetch$1, n as navigateTo } from '../virtual/entry.mjs';
import { toRef, isRef, ref, customRef, computed } from 'vue';
import { v as klona, x as getRequestHeader, y as isEqual, z as setCookie, A as getCookie, B as deleteCookie } from '../_/nitro.mjs';

function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
function eqIndex(str, min, max) {
	const index = str.indexOf("=", min);
	return index < max ? index : -1;
}
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
const NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
function parse(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode || decode;
	const allowMultiple = options?.allowMultiple || false;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === -1) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (options?.filter && !options.filter(key)) {
			index = endIdx + 1;
			continue;
		}
		const val = dec(valueSlice(str, eqIdx + 1, endIdx));
		if (allowMultiple) {
			const existing = obj[key];
			if (existing === void 0) obj[key] = val;
			else if (Array.isArray(existing)) existing.push(val);
			else obj[key] = [existing, val];
		} else if (obj[key] === void 0) obj[key] = val;
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
function decode(str) {
	if (!str.includes("%")) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}

//#region node_modules/nuxt/dist/app/composables/state.js
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw stateDiagnostics.NUXT_E7009({ key: _key });
	if (init !== void 0 && typeof init !== "function") throw stateDiagnostics.NUXT_E7007({ type: typeof init });
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = toRef(nuxtApp.payload.state, key);
	if (init) nuxtApp._state[key] ??= { _default: init };
	if (state.value === void 0 && init) {
		const initialValue = init();
		if (isRef(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return initialValue;
		}
		state.value = initialValue;
	}
	return state;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/ssr.js
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/cookie.js
function parseCookieValue(value) {
	if (value === "undefined") return;
	try {
		const parsed = JSON.parse(value);
		if (typeof parsed === "number" && String(parsed) !== value) return value;
		return parsed;
	} catch {
		return value;
	}
}
var CookieDefaults = {
	path: "/",
	watch: true,
	decode: (val) => val ? parseCookieValue(decodeURIComponent(val)) : val,
	encode: (val) => {
		if (typeof val !== "string" || val === "undefined") return encodeURIComponent(JSON.stringify(val));
		try {
			if (typeof JSON.parse(val) !== "string") return encodeURIComponent(JSON.stringify(val));
		} catch {}
		return encodeURIComponent(val);
	},
	refresh: false
};
function useCookie(name, _opts) {
	const opts = {
		...CookieDefaults,
		..._opts
	};
	opts.filter ??= (key) => key === name;
	const cookies = readRawCookies(opts) || {};
	let delay;
	if (opts.maxAge !== void 0) delay = opts.maxAge * 1e3;
	else if (opts.expires) delay = opts.expires.getTime() - Date.now();
	const cookie = cookieServerRef(name, klona(delay !== void 0 && delay <= 0 ? void 0 : cookies[name] ?? opts.default?.()));
	{
		const nuxtApp = useNuxtApp();
		const writeFinalCookieValue = () => {
			const valueIsSame = isEqual(cookie.value, cookies[name]);
			if (opts.readonly || valueIsSame && !opts.refresh) return;
			nuxtApp._cookiesChanged ||= {};
			if (valueIsSame && opts.refresh && !nuxtApp._cookiesChanged[name]) return;
			nuxtApp._cookies ||= {};
			if (name in nuxtApp._cookies) {
				if (isEqual(cookie.value, nuxtApp._cookies[name])) return;
			}
			nuxtApp._cookies[name] = cookie.value;
			const encoded = cookie.value === null || cookie.value === void 0 ? void 0 : opts.encode(cookie.value);
			writeServerCookie(useRequestEvent(nuxtApp), name, encoded, opts);
		};
		const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
		nuxtApp.hooks.hookOnce("app:error", () => {
			unhook();
			return writeFinalCookieValue();
		});
	}
	return cookie;
}
function readRawCookies(opts = {}) {
	return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
}
var identityEncode = (val) => val;
function toSerializeOptions(opts) {
	const { encode: _encode, decode: _decode, ...rest } = opts;
	return {
		...rest,
		encode: identityEncode
	};
}
function writeServerCookie(event, name, value, opts = {}) {
	if (event) {
		const serializeOpts = toSerializeOptions(opts);
		if (value !== void 0) return setCookie(event, name, value, serializeOpts);
		if (getCookie(event, name) !== void 0) return deleteCookie(event, name, serializeOpts);
	}
}
/**
* Custom ref that tracks explicit cookie writes on the server.
*
* This is required for the `refresh` option to ensure the cookie is
* re-written on SSR even when the value remains unchanged.
*/
function cookieServerRef(name, value) {
	const internalRef = ref(value);
	const nuxtApp = useNuxtApp();
	return customRef((track, trigger) => {
		return {
			get() {
				track();
				return internalRef.value;
			},
			set(newValue) {
				nuxtApp._cookiesChanged ||= {};
				nuxtApp._cookiesChanged[name] = true;
				internalRef.value = newValue;
				trigger();
			}
		};
	});
}
//#endregion
//#region app/composables/useApi.ts
var BusinessError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "BusinessError";
	}
};
var TechnicalError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "TechnicalError";
	}
};
var ValidationError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
};
var AuthenticationError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "AuthenticationError";
	}
};
var AuthorizationError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "AuthorizationError";
	}
};
function useApi() {
	const baseUrl = useRuntimeConfig().public.apiBaseUrl;
	async function request(method, endpoint, options) {
		const url = new URL(`${baseUrl.replace(/\/$/, "")}${endpoint}`);
		if (options?.query) Object.entries(options.query).forEach(([key, value]) => {
			if (value !== void 0) url.searchParams.set(key, String(value));
		});
		const token = useCookie("access_token").value;
		const headers = {
			"Content-Type": "application/json",
			...options?.headers,
			...token && !options?.ignoreAuth ? { Authorization: `Bearer ${token}` } : {}
		};
		try {
			return await $fetch$1(url.toString(), {
				method,
				body: options?.body ? JSON.stringify(options.body) : void 0,
				headers,
				onResponseError: async ({ response }) => {
					if (response.status === 401 && !options?.ignoreAuth) {
						const refreshToken = useCookie("refresh_token").value;
						if (refreshToken) {
							const refreshed = await $fetch$1(`${baseUrl.replace(/\/$/, "")}/auth/refresh`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Authorization: `Bearer ${refreshToken}`
								}
							});
							const nextAccessToken = refreshed.data?.accessToken ?? refreshed.data?.refreshToken ?? token;
							if (nextAccessToken) useCookie("access_token").value = nextAccessToken;
							return;
						}
						throw new AuthenticationError("Session expirée.");
					}
					if (response.status === 403) throw new AuthorizationError("Accès refusé.");
					if (response.status === 400) throw new ValidationError("Les données envoyées sont invalides.");
					if (response.status === 422) throw new BusinessError("Vérifiez les informations saisies.");
					if (response.status === 500) throw new TechnicalError("Une erreur serveur est survenue.");
				}
			});
		} catch (error) {
			if (error instanceof AuthenticationError) {
				useCookie("access_token").value = null;
				useCookie("refresh_token").value = null;
				await navigateTo("/auth/login", { replace: true });
			}
			throw error;
		}
	}
	return {
		get: (endpoint, query) => request("GET", endpoint, { query }),
		post: (endpoint, body, additional) => request("POST", endpoint, {
			body,
			ignoreAuth: additional?.ignoreAuth
		}),
		put: (endpoint, body) => request("PUT", endpoint, { body }),
		patch: (endpoint, body) => request("PATCH", endpoint, { body }),
		delete: (endpoint) => request("DELETE", endpoint),
		request
	};
}

//#region app/utils/auth-role.ts
var ROLE_NAMES = [
	"ADMIN",
	"MANAGER",
	"PROSPECTEUR",
	"CLIENT",
	"PARTENAIRE",
	"USER"
];
var ROLE_PERMISSIONS = {
	ADMIN: [
		"dashboard:view",
		"users:read",
		"users:create",
		"users:update",
		"users:delete",
		"roles:read",
		"roles:update",
		"reports:read",
		"reports:create",
		"reports:approve",
		"sales:read",
		"sales:create",
		"sales:manage",
		"sales:approve",
		"prospects:manage",
		"prospects:read",
		"prospects:create",
		"prospects:update",
		"prospects:delete",
		"projects:read",
		"projects:create",
		"projects:update",
		"projects:delete",
		"clients:read",
		"clients:create",
		"clients:update",
		"settings:read",
		"settings:write",
		"profile:read",
		"profile:update"
	],
	MANAGER: [
		"dashboard:view",
		"team:view",
		"prospects:read",
		"prospects:update",
		"prospects:create",
		"projects:read",
		"projects:update",
		"reports:read",
		"reports:create",
		"reports:approve",
		"sales:read",
		"sales:create",
		"sales:approve",
		"clients:read",
		"clients:update",
		"commissions:read",
		"profile:read",
		"profile:update"
	],
	PROSPECTEUR: [
		"dashboard:view",
		"prospects:read",
		"prospects:create",
		"prospects:update",
		"projects:read",
		"reports:create",
		"reports:read",
		"sales:read",
		"sales:create",
		"commissions:read",
		"profile:read",
		"profile:update"
	],
	CLIENT: [
		"dashboard:view",
		"requests:create",
		"requests:read",
		"requests:update",
		"projects:read",
		"notifications:read",
		"profile:read",
		"profile:update"
	],
	PARTENAIRE: [
		"dashboard:view",
		"projects:read",
		"projects:track",
		"contacts:read",
		"contracts:read",
		"profile:read",
		"profile:update",
		"notifications:read"
	],
	USER: [
		"dashboard:view",
		"profile:read",
		"profile:update"
	]
};
var ROLE_ROUTE_MAP = {
	ADMIN: "/app/admin/dashboard",
	MANAGER: "/app/manager/dashboard",
	PROSPECTEUR: "/app/prospecteur/dashboard",
	CLIENT: "/app/client/dashboard",
	PARTENAIRE: "/app/partenaire/dashboard",
	USER: "/app"
};
function isRoleName(value) {
	return !!value && ROLE_NAMES.includes(value);
}
function getPermissionsForRole(role) {
	if (!role || !isRoleName(role)) return ROLE_PERMISSIONS.USER;
	return ROLE_PERMISSIONS[role];
}
function getHomeRouteForRole(role) {
	if (!role || !isRoleName(role)) return ROLE_ROUTE_MAP.USER;
	return ROLE_ROUTE_MAP[role];
}
//#endregion
//#region app/composables/auth/useAuth.ts
function useAuth() {
	const user = useState("auth.user", () => null);
	const permissions = useState("auth.permissions", () => []);
	const roles = useState("auth.roles", () => []);
	const accessToken = useCookie("access_token", {
		default: () => null,
		sameSite: "lax"
	});
	const refreshToken = useCookie("refresh_token", {
		default: () => null,
		sameSite: "lax"
	});
	const isAuthenticated = computed(() => !!user.value && !!accessToken.value);
	function setSessionValue(nextUser, nextPermissions = [], nextRoles = []) {
		const safeUser = nextUser ? {
			...nextUser,
			role: nextUser.role ?? "USER"
		} : null;
		const safePermissions = nextPermissions.length > 0 ? nextPermissions : getPermissionsForRole(safeUser?.role);
		const safeRoles = nextRoles.length > 0 ? nextRoles.filter(Boolean) : safeUser ? [safeUser.role] : [];
		user.value = safeUser;
		permissions.value = safePermissions;
		roles.value = safeRoles;
		if (safeUser) {
			if (!accessToken.value) accessToken.value = "demo-access-token";
			if (!refreshToken.value) refreshToken.value = "demo-refresh-token";
		}
	}
	function getHomeRouteForRole$1(role) {
		return getHomeRouteForRole(role);
	}
	async function login(payload) {
		const result = await useApi().post("/auth/login", payload);
		const nextUser = result.data;
		setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role]);
		return result;
	}
	async function register(payload) {
		return useApi().post("/auth/register", payload);
	}
	async function logout() {
		await useApi().post("/auth/logout", {});
		user.value = null;
		permissions.value = [];
		roles.value = [];
		accessToken.value = null;
		refreshToken.value = null;
		await navigateTo("/auth/login");
	}
	async function refresh() {
		const result = await useApi().post("/auth/refresh", {}, { ignoreAuth: true });
		const nextUser = result.data;
		setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role]);
		return result;
	}
	async function fetchCurrentUser() {
		const result = await useApi().get("/auth/me");
		const nextUser = result.data;
		setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role]);
		return result;
	}
	function hasRole(role) {
		return roles.value.includes(role) || user.value?.role === role;
	}
	function hasPermission(permission) {
		return permissions.value.includes(permission) || getPermissionsForRole(user.value?.role).includes(permission);
	}
	function can(permission) {
		return hasPermission(permission);
	}
	return {
		user,
		permissions,
		roles,
		isAuthenticated,
		accessToken,
		refreshToken,
		login,
		register,
		logout,
		refresh,
		fetchCurrentUser,
		hasRole,
		hasPermission,
		can,
		getHomeRouteForRole: getHomeRouteForRole$1
	};
}

export { useAuth as u };
//# sourceMappingURL=useAuth-C3GRMrq1.mjs.map
