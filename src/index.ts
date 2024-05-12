import Sheriff from 'eslint-config-sheriff';
import * as EslintDefineConfig from 'eslint-define-config';
import type * as SheriffTypes from '@sherifforg/types';


const sheriffOptions: SheriffTypes.SheriffSettings = {
  react: false,
  next: false,
  lodash: false,
  playwright: false,
  jest: false,
  vitest: false,
};

const config: readonly EslintDefineConfig.FlatESLintConfig[] = [
  ...<EslintDefineConfig.FlatESLintConfig[]>Sheriff(sheriffOptions),
  {
    rules: {
      'func-style': [
        'error', 
        'declaration'
      ],
      '@typescript-eslint/naming-convention': [
        'error', 
          {
            selector: 'default',
            format: [
              'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'import',
            format: [
              'PascalCase',
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'variable',
            format: [
              'camelCase',
              'UPPER_CASE'
            ],
            modifiers: [
                'const'
            ],
            types: [
              'boolean',
              'string',
              'number'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'objectLiteralProperty',
            format: null,
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'typeLike',
            format: [
              'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'variable',
            types: [
              'boolean'
            ],
            format: [
              'camelCase'
            ],
            prefix: [
              'is',
              'has',
              'should',
              'can'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'variable',
            modifiers: [
              'destructured'
            ],
            format: null
          },
          {
            selector: 'typeProperty',
            format: null
          }
      ]
    }
  }
];

export default EslintDefineConfig.defineFlatConfig(config);