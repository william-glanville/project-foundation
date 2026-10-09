(() => {
  "use strict";
  const fetchJson = async path => {
    const response = await fetch(path, {cache: "no-store"});
    if (!response.ok) throw new Error(`Unable to load ${path} (${response.status}).`);
    return response.json();
  };
  async function initialize(){
    try{
      const [config,navigation,state]=await Promise.all([fetchJson("shared/site-config.json"),fetchJson("shared/navigation.json"),fetchJson("shared/state.json")]);
      const docs=navigation.groups.flatMap(group=>group.documents.map(document=>({...document,group:group.title})));
      window.FrameworkSite={config,navigation,state,docs};
      const header=`<header class="site-header"><div class="site-header-inner"><a href="${config.dashboard}" aria-label="${config.siteTitle} dashboard"><img class="site-logo" src="${config.logo}" alt="${config.siteTitle} logo"></a><div><div class="site-title">${config.siteTitle}</div><div class="site-tagline">${config.tagline}</div></div><nav class="site-nav" aria-label="Shared navigation"><a href="${config.dashboard}">Dashboard</a><a href="${config.viewer}?doc=${encodeURIComponent(config.defaultDocument)}">Documentation</a><a href="${config.viewer}?doc=${encodeURIComponent("NEW_PROJECT_BOOTSTRAP_CHECKLIST.md")}">Bootstrap</a><a href="${config.viewer}?doc=${encodeURIComponent(state.source)}">Project state</a></nav></div></header><div class="project-state-strip"><div class="project-state-inner"><a class="state-label" href="${config.viewer}?doc=${encodeURIComponent(state.source)}">Project state</a><span class="state-value"><small>Phase</small><b>${state.phase}</b></span><span class="state-value"><small>Milestone</small><b>${state.milestone}</b></span><span class="state-value"><small>Next bounded task</small><b>${state.nextTask}</b></span></div></div>`;
      const footer=`<footer class="site-footer"><div class="site-footer-inner"><span>${config.siteTitle} · ${config.description}</span><nav aria-label="Footer navigation"><a href="${config.dashboard}">Dashboard</a><a href="${config.viewer}?doc=README.md">README</a><a href="${config.viewer}?doc=${encodeURIComponent("docs/development/DEVELOPMENT_WORKFLOW.md")}">Development</a><a href="${config.viewer}?doc=${encodeURIComponent("contracts/README.md")}">Contracts</a></nav></div></footer>`;
      document.querySelectorAll("[data-shared-header]").forEach(node=>node.innerHTML=header);
      document.querySelectorAll("[data-shared-footer]").forEach(node=>node.innerHTML=footer);
      dispatchEvent(new CustomEvent("framework:ready",{detail:window.FrameworkSite}));
    }catch(error){
      document.querySelectorAll("[data-shared-header]").forEach(node=>node.innerHTML=`<div class="document-status error"><strong>Site configuration could not load.</strong><div>${String(error.message)}</div></div>`);
      dispatchEvent(new CustomEvent("framework:error",{detail:error}));
    }
  }
  initialize();
})();
