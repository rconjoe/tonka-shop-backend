import { defineMiddlewares, authenticate } from "@medusajs/framework";

export default defineMiddlewares({
  routes: [
    // {
    //   matcher: "/profile",
    //   method: "POST",
    //   middlewares: [
    //     authenticate("profile", ["session", "bearer"], { allowUnregistered: true })
    //   ]
    // },
    {
      matcher: "/profile/me*",
      middlewares: [
        authenticate("profile", ["session", "bearer"])
      ]
    }
  ]
})
