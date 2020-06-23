module.exports = function (plop) {
  plop.setGenerator("Create Use Case", {
    description: "Generate an Use Case",
    prompts: [
      {
        type: "input",
        name: "module",
        message: "What is the Module name?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Use Case name?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "src/app/modules/{{module}}/{{pascalCase name}}/use-cases/{{pascalCase name}}Controller.ts",
        templateFile: ".dev/plop/use-case/controller.hbs",
      },
      {
        type: "add",
        path:
          "src/app/modules/{{module}}/{{name}}/use-cases/{{name}}UseCase.ts",
        templateFile: ".dev/plop/use-case/useCase.hbs",
      },
    ],
  });
};
