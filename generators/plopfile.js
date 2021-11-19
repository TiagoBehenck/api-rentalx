module.exports = (plop) => {
  plop.setGenerator('Generate anything', {
    description: 'Generate anything',
    prompts: [
      {
        type: 'list',
        name: 'option',
        message: 'Choose one option to generate the file:',
        choices: [
          { name: "Model", value: "model" },
          { name: "Repository", value: "repository" },
          { name: "Service", value: "service" },
        ],
      },
      {
        type: 'input',
        name: 'module',
        message: 'What is the name of the module?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the file?'
      }
    ],
    actions: function (data) {
      var actions = [];

      switch (data.option) {
        case 'model':
          actions.push({
            type: 'add',
            path: '../src/modules/{{lowerCase module}}/model/{{properCase name}}.ts',
            templateFile: 'templates/Model.hbs'
          });
          return actions
        case 'repository':
          actions.push({
            type: 'add',
            path: '../src/modules/{{lowerCase module}}/repositories/{{properCase name}}Repository.ts',
            templateFile: 'templates/Repository.hbs'
          });
          actions.push({
            type: 'add',
            path: '../src/modules/{{lowerCase module}}/repositories/I{{properCase name}}Repository.ts',
            templateFile: 'templates/IRepository.hbs'
          });
          return actions
        case 'service':
          actions.push({
            type: 'add',
            path: '../src/modules/{{lowerCase module}}/services/{{properCase name}}Service.ts',
            templateFile: 'templates/Service.hbs'
          });
          return actions
        default:
          return actions
      }
    }
  })
}
