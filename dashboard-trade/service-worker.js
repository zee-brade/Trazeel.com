const CACHE_NAME = "trazeel-offline-v6";
const APP_ASSETS = [
    "./", "./index.html", "./style.css", "./script.js",
    "./local-auth.js", "./manifest.webmanifest", "./logo-trazeel.png",
    "./zoen/css/styles.css",
    "./zoen/index.html",
    "./zoen/js/core/answer-engine.js",
    "./zoen/js/core/conversation.js",
    "./zoen/js/core/intent.js",
    "./zoen/js/core/matcher.js",
    "./zoen/js/core/normalization.js",
    "./zoen/js/core/response-style.js",
    "./zoen/js/data/knowledge.js",
    "./zoen/js/data/knowledge/01-foundations-financial-literacy.js",
    "./zoen/js/data/knowledge/02-markets-macroeconomics-technical-smc-ict-risk.js",
    "./zoen/js/data/knowledge/03-banking-credit-family-business.js",
    "./zoen/js/data/knowledge/04-tax-equity-fundamentals-sharia-crypto.js",
    "./zoen/js/data/knowledge/05-global-macro-monetary-currency.js",
    "./zoen/js/data/knowledge/06-portfolio-valuation-commodities.js",
    "./zoen/js/data/knowledge/07-corporate-finance-unit-economics-market-structure.js",
    "./zoen/js/data/knowledge/08-time-value-wealth-tax-bias.js",
    "./zoen/js/data/knowledge/09-derivatives-microstructure-wyckoff-risk.js",
    "./zoen/js/data/knowledge/10-defi-tokenomics-crisis-modern-economy.js",
    "./zoen/js/data/knowledge/11-financial-psychology-money-behavior-trading.js",
    "./zoen/js/data/knowledge/12-decision-psychology-financial-reality-self-control.js",
    "./zoen/js/data/knowledge/13-crypto-futures-onchain-layer2.js",
    "./zoen/js/data/knowledge/14-staking-restaking-mev-web3-security-dyor.js",
    "./zoen/js/data/normalization-data.js",
    "./zoen/js/main.js",
    "./zoen/js/ui/chat-ui.js",
    "./zoen/tests/conversation.test.js",
];

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(APP_ASSETS))
        .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
    event.waitUntil(caches.keys()
        .then((keys) => Promise.all(keys
            .filter((key) => key.startsWith("trazeel-offline-") && key !== CACHE_NAME)
            .map((key) => caches.delete(key))))
        .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);
    if (request.method !== "GET" || url.origin !== self.location.origin) return;

    if (request.mode === "navigate") {
        event.respondWith((async () => {
            try {
                const response = await fetch(request);
                if (response && response.ok) {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(request, response.clone());
                }
                return response;
            } catch (error) {
                const cachedPage = await caches.match(request);
                if (cachedPage) return cachedPage;
                return caches.match("./index.html");
            }
        })());
        return;
    }

    event.respondWith(caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
            if (response && response.ok) {
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return response;
        });
    }));
});
