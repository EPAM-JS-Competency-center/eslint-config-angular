import { ts } from "./configs/ts.mjs";
import { html } from "./configs/html.mjs";

/** @typedef { import("eslint").Linter.Config } Config */

/**
 * @type { {html: Config[], ts: Config[]} }
 */
export const configs = {
  ts,
  html,
};

/**
 * @type { Config[] }
 */
export default [...ts, ...html];
