import { ts } from "./configs/ts.mjs";
import { html } from "./configs/html.mjs";

/** @typedef { import("eslint").Linter.FlatConfig } FlatConfig */

/**
 * @type { {html: FlatConfig[], ts: FlatConfig[]} }
 */
export const configs = {
  ts,
  html,
};

/**
 * @type { FlatConfig[] }
 */
export default [...ts, ...html];
