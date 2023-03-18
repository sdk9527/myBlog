module.exports = {
	rules: {
		'no-multi-spaces': 'error', //禁止使用多余的空格
		'no-var': 'error', //禁止var
		'no-unused-vars': 'error', //禁止出现未使用的变量
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		indent: ['error', 2], //控制缩进为两个空格
		'no-extra-semi': 'error', //禁止不必要的分号
		'no-empty': 'error', //禁止出现空语句块
		'no-unreachable': 'error', //禁止在return等语句后面出现代码
		eqeqeq: ['error', 'always'], //要求使用 === 或者 !==
		'no-alert': 'error', //禁用alert
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prefer-const': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // es6定义不被改变的量就应该声明为const
	},
};
