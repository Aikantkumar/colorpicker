import { onRequest as __robots_txt_js_onRequest } from "C:\\Users\\chintu\\Downloads\\colorpicker\\functions\\robots.txt.js"
import { onRequest as ___middleware_js_onRequest } from "C:\\Users\\chintu\\Downloads\\colorpicker\\functions\\_middleware.js"

export const routes = [
    {
      routePath: "/robots.txt",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__robots_txt_js_onRequest],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_js_onRequest],
      modules: [],
    },
  ]