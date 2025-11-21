import type { Configuration } from "lint-staged";

const config: Configuration = {
  "*": ["bun run lint:fix"],
};

export default config;
