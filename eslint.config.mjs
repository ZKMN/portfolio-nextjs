import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  // Base recommended rules
  js.configs.recommended,

  // TypeScript ESLint configs
  ...tseslint.configs.recommended,

  // Global environments
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Node.js config files (next.config.js, etc.)
  {
    files: ['*.config.js', '*.config.mjs', '*.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-commonjs': 'off',
    },
  },

  // CommonJS .js files (allow require)
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-commonjs': 'off',
    },
  },

  // TypeScript files - strict rules (with type-aware linting)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Strict typing
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      }],

      // Ban `as` type assertions — use type guards instead (warn until codebase is clean)
      '@typescript-eslint/consistent-type-assertions': ['warn', {
        assertionStyle: 'never',
      }],

      // Modern syntax
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignorePrimitives: { string: true },
      }],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      // Legacy settings
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      }],

      // TypeScript handles these
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },

  // React files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'error',
      'react/jsx-filename-extension': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/no-unstable-nested-components': [
        'error',
        {
          allowAsProps: true,
        },
      ],
      'react/display-name': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-props-no-spreading': [
        'error',
        {
          html: 'enforce',
          custom: 'enforce',
          explicitSpread: 'enforce',
          exceptions: [],
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-no-useless-fragment': [
        'error',
        {
          allowExpressions: false,
        },
      ],
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: {
            single: 3,
            multi: 1,
          },
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-closing-bracket-location': [
        'error',
        {
          selfClosing: 'line-aligned',
        },
      ],
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          children: true,
        },
      ],
      'no-multi-spaces': [
        'error',
        {
          exceptions: {
            Property: false,
            VariableDeclarator: false,
            ImportDeclaration: false,
          },
          ignoreEOLComments: true,
        },
      ],

      // Import rules
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',

      // Simple import sort - preserving your FSD layer ordering
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages - FSD layers in order
            ['^(@/pagesLayer)(/.*|$)'],
            ['^(@/widgets)(/.*|$)'],
            ['^(@/shared)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$'],
          ],
        },
      ],

      // Airbnb-style rules (manually added since eslint-config-airbnb doesn't fully support ESLint v9)
      // These are key rules from Airbnb config that maintain code quality
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'func-style': ['error', 'expression'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
      ],
      'no-useless-constructor': 'error',
      // Disabled: conflicts with @typescript-eslint/consistent-type-imports which separates type imports
      // 'no-duplicate-imports': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-rename': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-object-spread': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-restricted-syntax': ['error', {
        selector: 'IfStatement > .alternate',
        message: 'Use early returns instead of else/else-if blocks.',
      }],
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'semi': ['error', 'always'],
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'TSTypeParameterDeclaration',
          ],
          ignoreComments: false,
        },
      ],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectPattern: {
            consistent: true,
          },
          ObjectExpression: {
            consistent: true,
          },
          ImportDeclaration: {
            consistent: true,
          },
          ExportDeclaration: {
            consistent: true,
          },
        },
      ],
      'max-len': [
        'warn',
        {
          code: 200,
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['acc', 'ctx', 'state', 'context', 'config'],
        },
      ],
      '@stylistic/function-paren-newline': ['error', 'multiline'],

      // Modern patterns
      'eqeqeq': ['error', 'always'],
      'max-depth': ['error', 3],
      'no-implicit-coercion': 'error',
      'no-negated-condition': 'error',
      'logical-assignment-operators': ['error', 'always'],
    },
  },

  // Next.js route handlers - allow function declarations for HTTP methods
  {
    files: ['**/route.{js,jsx,ts,tsx}'],
    rules: {
      // Disable func-style for route handlers - Next.js requires function declarations
      'func-style': 'off',
    },
  },

  // Next.js page files - allow function declarations for metadata and params
  {
    files: ['**/page.{js,jsx,ts,tsx}', '**/layout.{js,jsx,ts,tsx}', '**/not-found.{js,jsx,ts,tsx}', '**/error.{js,jsx,ts,tsx}', '**/loading.{js,jsx,ts,tsx}', '**/template.{js,jsx,ts,tsx}'],
    rules: {
      'func-style': 'off',
      'react/function-component-definition': 'off',
    },
  },

  // Shared utilities and infrastructure - allow function declarations
  {
    files: ['**/shared/lib/**/*.{ts,tsx}', '**/proxy.ts'],
    rules: {
      // Allow function declarations for utility/helper functions
      'func-style': 'off',
    },
  },

  // Next.js specific rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      '.history/**',
      '**/*.history.*',
    ],
  },
];
