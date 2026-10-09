(() => {
  "use strict";

  const VIEWER = "viewer.html";
  const TEXT_EXTENSIONS = new Set(["md", "markdown", "yaml", "yml", "json", "txt"]);

  function isExternal(value) {
    return /^(?:[a-z]+:|\/\/|#)/i.test(value) || value.startsWith("/");
  }

  function viewerUrl(path) {
    const [file, fragment] = path.split("#", 2);
    return `${VIEWER}?doc=${encodeURIComponent(file)}${fragment ? `#${fragment}` : ""}`;
  }

  function routeRepositoryLinks() {
    document.querySelectorAll("a[href]").forEach(link => {
      const value = link.getAttribute("href");
      if (!value || isExternal(value) || value.startsWith(`${VIEWER}?doc=`)) return;
      const file = value.split("#", 1)[0];
      const extension = file.includes(".") ? file.slice(file.lastIndexOf(".") + 1).toLowerCase() : "";
      if (TEXT_EXTENSIONS.has(extension)) link.setAttribute("href", viewerUrl(value));
    });
  }

  async function applyProjectState() {
    try {
      const response = await fetch("shared/state.json", {cache: "no-store"});
      if (!response.ok) return;
      const state = await response.json();
      const values = document.querySelectorAll(".state-badge .state-item b");
      if (values[0]) values[0].textContent = state.phase;
      if (values[1]) values[1].textContent = state.milestone;
      if (values[2]) values[2].textContent = state.nextTask;
      document.querySelectorAll('.state-badge > a, a[href="PROJECT_STATE.md"]').forEach(link => {
        link.href = viewerUrl(state.source || "PROJECT_STATE.md");
      });
    } catch (error) {
      console.warn("Project-state presentation data could not be loaded.", error);
    }
  }

  async function validateNavigation() {
    try {
      const response = await fetch("shared/navigation.json", {cache: "no-store"});
      if (!response.ok) return;
      const navigation = await response.json();
      const known = new Set(navigation.groups.flatMap(group => group.documents.map(document => document.path)));
      document.querySelectorAll("a[href*='viewer.html?doc=']").forEach(link => {
        const url = new URL(link.href, location.href);
        const path = url.searchParams.get("doc");
        if (path && known.has(path)) link.dataset.documentRegistered = "true";
      });
    } catch (error) {
      console.warn("Documentation navigation could not be validated.", error);
    }
  }

  routeRepositoryLinks();
  applyProjectState();
  validateNavigation();
})();
