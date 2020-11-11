import "@appnest/web-router";

customElements.whenDefined("router-slot").then(async () => {
  const routerSlot = document.querySelector("router-slot");
  await routerSlot.add([
    {
      path: "",
      component: () => import("./pages/home"),
      guards: [],
    },
  ]);
});
