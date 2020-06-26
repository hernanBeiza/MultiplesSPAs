import 'bootstrap';

import './scss/app.scss';

import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';

console.log("amisoft-root.config.ts");

/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});
*/

/*
registerApplication({
	name: "@amisoft/top-app",
	app: () => System.import("http://localhost:4300/main.js"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@amisoft/menu-app",
	app: () => System.import("http://localhost:4400/main.js"),
	activeWhen: ["/"]
});
registerApplication({
  name: "@amisoft/bandeja-app",
  app: () => System.import("http://localhost:4220/main.js"),
  activeWhen: ["/bandeja"]
});

registerApplication({
  name: "@amisoft/tramitar-app",
  app: () => System.import("http://localhost:4230/main.js"),
  activeWhen: ["/tramitar"],
});
start({
  urlRerouteOnly: true,
});
*/

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
start();