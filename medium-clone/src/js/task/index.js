import angular from 'angular';

let taskModule = angular.module('app.task', [])


import TaskCtrl from './task.controller';
import TaskConfig from './task.config';

taskModule.controller('TaskCtrl', TaskCtrl);
taskModule.config(TaskConfig);

export default taskModule;
