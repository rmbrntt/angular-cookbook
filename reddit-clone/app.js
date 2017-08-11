var app = angular.module('existentialNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', link: '', upvotes: 3 },
      {title: 'post 2', link: '', upvotes: 1 },
      {title: 'post 3', link: '', upvotes: 23 },
      {title: 'post 4', link: '', upvotes: 8 },
      {title: 'post 5', link: '', upvotes: 4 }
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0 });
      $scope.title = '';
      $scope.link = '';
    }
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
])
