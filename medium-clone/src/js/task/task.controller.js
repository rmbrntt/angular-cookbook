class TaskCtrl {
  constructor($state){
    'ngInject';

    this.tasks = new Array();
  }

  saveTask(){
    console.log({"description": this.description});
    this.tasks.push({"description": this.description});
    this.description = '';
  }
}

export default TaskCtrl;
