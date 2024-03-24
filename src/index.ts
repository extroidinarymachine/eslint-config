import sheriff from "eslint-config-sheriff";
import { defineFlatConfig } from "eslint-define-config";
import type { SheriffSettings } from "@sherifforg/types";

const sheriffOptions: SheriffSettings = {
  react: false,
  next: false,
  lodash: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      'func-style': ['error', 'declaration']
    }
  }
]);