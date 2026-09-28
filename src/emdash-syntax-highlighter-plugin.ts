import type { PluginDescriptor } from "emdash";

/**
 * The published package currently points its native entrypoint at an unpublished
 * package name. Keep the implementation and Astro block component from the
 * package, while supplying a project-local entrypoint for the admin plugin.
 */
export function syntaxHighlighterPlugin(): PluginDescriptor {
  return {
    id: "syntax-highlighter",
    version: "0.1.1",
    format: "native",
    entrypoint: "@masonjames/emdash-syntax-highlighter/plugin",
    componentsEntry: "@masonjames/emdash-syntax-highlighter/astro",
    options: {},
    capabilities: [],
  };
}
