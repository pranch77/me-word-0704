const app = document.querySelector("#app");
const isAdminPage = location.pathname.includes("admin");

if (isAdminPage) {
  import("./js/admin.js").then(module => module.renderAdmin(app));
} else {
  import("./js/player.js").then(module => module.renderPlayer(app));
}
