const staticSite = "CVsite"
const assets = [
  "/",
  "/index.html",
  "/Skills.html",
  "/Skill1.html",
  "/Skill2.html",
  "/Qualifications.html",
  "/Guess_a_number.html",
  "/scripts/mobile_nav.js",
  "/scripts/Random_number.js",
  "/styles/main.css",
  "/styles/skill_1.css",
  "/styles/skill_2.css",
  "/code_background.jpg",
  "/fake_human.jpg",
  "/fake_human2.jpg",
  "/coding_man2.png",
  "/computer_icon.png",
  "/ECMA_page.png",
  "/mail_icon.png",
  "/linkein_icon.png",
  "/P_not_equal_NP.png",
  "/P=NP1.png",
  "/P=NP2.png",
  "/phone_icon.png",
  "/skill_page1.png",
  "/skill_page2.png"


]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSite).then(cache => {
      cache.addAll(assets)
    })
  )
}

)
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })