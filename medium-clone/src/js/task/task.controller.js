class TaskCtrl {
  constructor($state){
    'ngInject';

    this.tasks = new Array();
  }

  saveTask(){
    this.tasks.push({"description": this.description});
    this.description = '';
  }
}

export default TaskCtrl;
