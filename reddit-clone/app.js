var app = angular.module('existentialNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello World';
    $scope.posts = [
      {title: 'post 1', upvotes: 3 },
      {title: 'post 2', upvotes: 1 },
      {title: 'post 3', upvotes: 23 },
      {title: 'post 4', upvotes: 8 },
      {title: 'post 5', upvotes: 4 }
    ];
    $scope.wtfbro = "WTFBRO";
    $scope.addPost = function(){
      $scope.posts.push({title: 'new post', upvotes: 0 })
    }
  }
])
