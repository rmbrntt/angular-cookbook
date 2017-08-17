function TaskConfig($httpProvider, $stateProvider){
  'ngInject';

  $stateProvider

  .state('app.task', {
    url: '/task',
    urlTemplate: 'task/task.html'
  })

}
