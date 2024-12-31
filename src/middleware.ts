import { withAuthMiddleware } from "./middlewares/auth.middleware";
import { chainMiddleware } from "./middlewares/chain-middleware";
import { withRoleMiddleware } from "./middlewares/role.middleware";

export default chainMiddleware([withAuthMiddleware, withRoleMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
