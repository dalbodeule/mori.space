import handler, {
  createScheduledHandler,
  PluginBridge,
} from "@emdash-cms/cloudflare/worker";
import type { ExportedHandler } from "@cloudflare/workers-types";

export { PluginBridge };
export default {
  ...handler,
  scheduled: createScheduledHandler(),
} satisfies ExportedHandler;
