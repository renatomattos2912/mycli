module.exports = {
  description: 'Generate a NuxtJS project',
  prompts: [
    {
      type: 'input',
      name: 'project_name',
      message: 'Project name?',
    },
    {
      type: 'input',
      name: 'project_description',
      message: 'Project description? (optional)',
    },
    {
      type: 'input',
      name: 'project_git_repo',
      message: 'Git repo URL? (optional)',
    },
    {
      type: 'input',
      name: 'project_author',
      message: 'Project author? (optional)',
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination: '{{cwd}}/{{project_name}}',
      templateFiles: 'templates/nuxt/**/*',
      base: 'templates/nuxt/',
      globOptions: {
        dot: true,
      },
    },
  ],
};
