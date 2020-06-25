module.exports = {
  description: 'Generate an Use Case',
  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'What is the Module name?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the Use Case name?',
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination:
        '{{cwd}}/src/app/modules/{{module}}/use-cases/{{pascalCase name}}',
      templateFiles: 'templates/use-case/**/*.hbs',
      base: 'templates/use-case/',
    },
  ],
};
