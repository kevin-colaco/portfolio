'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "59e9e6bda42c3c9b12885359542e9541",
"assets/AssetManifest.smcbin": "c2b32c638623a9f7661de520b25e2393",
"assets/assets/images/bg.png": "86c105882f8ce6ad3b0ba9bfc43e5c68",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/blind.jpg": "f66c32a69d90ad5d59b6c10feb9e380f",
"assets/assets/images/certificate_icon.png": "c6a8d349afb5f3683b1f3390d63e21ed",
"assets/assets/images/certificate_nvidia.jpg": "9d9e299b295e5ec3ed4689fb4eaf48de",
"assets/assets/images/certificate_nvidia_2.jpg": "f07676ebda525339628598ca714355fe",
"assets/assets/images/cloud_icon.png": "1ce5b7aaeb04d3a84e2af9a38e466077",
"assets/assets/images/codepie.jpeg": "2573a902676c9cae5459970993de095a",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/content.jpg": "cb7bd3b340260616a030e25ca6adacfe",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/github.png": "516300e8757d6db3d1d27efc289b2cb2",
"assets/assets/images/hostel.jpg": "470a7be075ae13d22024bf6516abe195",
"assets/assets/images/instagram.png": "9703861299c93429d6a53e774163c14b",
"assets/assets/images/kevin.png": "b3470bdd1ea4ff08188395148909e911",
"assets/assets/images/linkedin.png": "be033af91c6bc893432220cc015b873a",
"assets/assets/images/Logo.png": "e43691e14e218d1c03f5c1f6a0a2d9b8",
"assets/assets/images/md_icon.png": "ccb2006092aa3a84de53d19e33e8b248",
"assets/assets/images/ml_icon.png": "aa446082cb5552f430c66bb9a238480d",
"assets/assets/images/python_icon.png": "9a808ee3cf180907560f4dd0bb3231eb",
"assets/assets/images/realtime-ocr.png": "5253a3efc8f32b51f9501b61dac8896b",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/scanner.jpg": "b2a804ad3f0f8e1ea828f0fc34c57f65",
"assets/assets/images/skill_icon.png": "63429f5c37f272cfbfe4fcbea40a81e7",
"assets/assets/images/solits.jpeg": "ab1ceb7fccee4cb5fd78d92c71c56339",
"assets/assets/images/ssip1.jpeg": "a60a2adf69ca06358ed42c1873cf6372",
"assets/assets/images/ssip2.jpeg": "ae2f02ad2a84370bd362a70259f3e00d",
"assets/assets/pdf/resume.pdf": "e837306593f80efd6d492bb28bbebfa4",
"assets/assets/video/content_aggregator.mp4": "3b53ba3e4d349d911a99a6d1553520f6",
"assets/assets/video/hostel_management.mp4": "7507cef9ca4e78ce8d2ee439e17e160d",
"assets/assets/video/smart_marksheet_scanner.mp4": "ec79b92e8724219ec9311d3c99795fa5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a4402f80714e3836b274daafe2885504",
"assets/NOTICES": "f487f59ea422b19eeca477e4696b9d40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "ac41c729a5a8ee88c19111e431977494",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "e43691e14e218d1c03f5c1f6a0a2d9b8",
"index.html": "d6a21c6f8815f112eadff39f8896261c",
"/": "d6a21c6f8815f112eadff39f8896261c",
"main.dart.js": "20f9fa6ead0dcb28b85faf5767862166",
"manifest.json": "9f5c1edf5fb40e7fdefaaa8a0e3ff235",
"version.json": "536dc42524442522d15a255b5eeebed3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
