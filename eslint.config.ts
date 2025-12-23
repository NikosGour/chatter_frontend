import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
// @ts-expect-error - no types available
import fileExtensionPlugin from 'eslint-plugin-file-extension-in-import-ts';
import stylisticPlugin from '@stylistic/eslint-plugin';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	{
		name  : `app/files-to-lint`,
		files : [ `src/**/*.{ts,mts,tsx,vue}` ],
	},

	globalIgnores([ `**/dist/**`, `**/dist-ssr/**`, `**/coverage/**` ]),

	pluginVue.configs[ `flat/essential` ],
	vueTsConfigs.recommended,
	{
		name    : `app/custom-rules`,
		plugins : {
			'file-extension-in-import-ts' : fileExtensionPlugin,
			'@stylistic'                  : stylisticPlugin,
		},
		rules: {
			"vue/multi-word-component-names"                          : `off`,
			"vue/no-use-v-if-with-v-for"                              : `off`,
			"file-extension-in-import-ts/file-extension-in-import-ts" : `error`,
			"@typescript-eslint/no-explicit-any"                      : `warn`,
			"@typescript-eslint/no-unused-vars"                       : [
				`warn`,
				{
					argsIgnorePattern : `^_`,
					varsIgnorePattern : `^_`,
				},
			],
			"@typescript-eslint/naming-convention": [
				`error`,
				{
					selector : `variableLike`,
					format   : [
						`snake_case`,
						`camelCase`,
						`UPPER_CASE`,
						`PascalCase`,
					],
					leadingUnderscore  : `allow`,
					trailingUnderscore : `allow`,
				},
			],
			"arrow-body-style"                 : [ `warn`, `always` ],
			"no-array-constructor"             : [ `error` ],
			"no-const-assign"                  : [ `error` ],
			"no-constant-condition"            : [ `warn` ],
			"no-dupe-class-members"            : [ `error` ],
			"no-duplicate-imports"             : [ `error` ],
			"no-this-before-super"             : [ `error` ],
			"no-var"                           : [ `error` ],
			"operator-assignment"              : [ `warn`, `always` ],
			"prefer-template"                  : [ `error` ],
			"@stylistic/array-bracket-spacing" : [ `warn`, `always` ],
			"@stylistic/array-bracket-newline" : [ `warn`, `consistent` ],
			"@stylistic/array-element-newline" : [ `warn`, `consistent` ],
			"@stylistic/arrow-parens"          : [ `warn`, `always` ],
			"@stylistic/arrow-spacing"         : [
				`warn`,
				{
					before : true,
					after  : true,
				},
			],
			"@stylistic/block-spacing" : [ `warn`, `always` ],
			"@stylistic/brace-style"   : [
				`warn`,
				`stroustrup`,
				{
					allowSingleLine: true,
				},
			],
			"@stylistic/comma-dangle": [ `warn`,
				{
					objects : `always-multiline`,
					arrays  : `always-multiline`,
				} ],
			"@stylistic/comma-spacing": [
				`warn`,
				{
					before : false,
					after  : true,
				},
			],
			"@stylistic/comma-style"               : [ `warn`, `last` ],
			"@stylistic/computed-property-spacing" : [ `warn`, `always` ],
			"@stylistic/dot-location"              : [ `warn`, `property` ],
			"@stylistic/eol-last"                  : [ `warn`, `never` ],
			"@stylistic/function-call-spacing"     : [ `warn`, `never` ],
			"@stylistic/function-paren-newline"    : [ `warn`, `multiline` ],
			"@stylistic/generator-star-spacing"    : [ `warn`, `after` ],
			"@stylistic/indent"                    : [ `warn`, `tab` ],
			"@stylistic/jsx-quotes"                : [ `warn`, `prefer-double` ],
			"@stylistic/key-spacing"               : [
				`error`,
				{
					singleLine: {
						beforeColon : false,
						afterColon  : true,
					},
					align: {
						beforeColon : true,
						afterColon  : true,
						on          : `colon`,
					},
				},
			],
			"@stylistic/keyword-spacing": [
				`warn`,
				{
					before : true,
					after  : true,
				},
			],
			"@stylistic/linebreak-style"               : [ `warn`, `unix` ],
			"@stylistic/lines-between-class-members"   : [ `warn`, `always` ],
			"@stylistic/multiline-ternary"             : [ `warn`, `always-multiline` ],
			"@stylistic/new-parens"                    : [ `warn`, `always` ],
			"@stylistic/newline-per-chained-call"      : [ `error`, { ignoreChainWithDepth: 2 } ],
			"@stylistic/no-extra-semi"                 : [ `warn` ],
			"@stylistic/no-floating-decimal"           : [ `error` ],
			"@stylistic/no-mixed-spaces-and-tabs"      : [ `warn` ],
			"@stylistic/no-multiple-empty-lines"       : [ `warn`, { max: 3 } ],
			"@stylistic/no-trailing-spaces"            : [ `warn` ],
			"@stylistic/no-whitespace-before-property" : [ `warn` ],
			"@stylistic/object-curly-newline"          : [
				`warn`,
				{
					multiline  : true,
					consistent : true,
				},
			],
			"@stylistic/object-curly-spacing"    : [ `warn`, `always` ],
			"@stylistic/object-property-newline" : [ `warn` ],
			"@stylistic/operator-linebreak"      : [ `warn`, `after` ],
			"@stylistic/quotes"                  : [ `warn`, `backtick` ],
			"@stylistic/rest-spread-spacing"     : [ `warn`, `never` ],
			"@stylistic/semi"                    : [ `warn`, `always` ],
			"@stylistic/semi-spacing"            : [ `error`,
				{
					before : false,
					after  : true,
				} ],
			"@stylistic/semi-style"                  : [ `warn`, `last` ],
			"@stylistic/space-before-blocks"         : [ `warn`, `never` ],
			"@stylistic/space-before-function-paren" : [ `warn`, `never` ],
			"@stylistic/space-in-parens"             : [ `warn`, `never` ],
			"@stylistic/space-infix-ops"             : [ `warn` ],
			"@stylistic/space-unary-ops"             : [ `warn` ],
			"@stylistic/spaced-comment"              : [ `warn`, `always` ],
			"@stylistic/template-curly-spacing"      : [ `warn`, `never` ],
			"@stylistic/wrap-regex"                  : [ `warn` ],
		},
	}
);