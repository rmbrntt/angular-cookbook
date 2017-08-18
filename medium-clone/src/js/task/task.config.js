function TaskConfig($httpProvider, $stateProvider){
  'ngInject';

  $stateProvider

  .state('app.task', {
    url: '/task',
    controller: 'TaskCtrl as $ctrl',
    templateUrl: 'task/task.html'
  })

}


export default TaskConfig;
