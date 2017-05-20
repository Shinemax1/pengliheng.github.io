(function() {
  angular.module('uirouter', ['ui.router']).config(function($stateProvider) {
    var InterviewState, blogFirstState, blogSecondState, cvStateState, homeState;
    blogFirstState = {
      name: 'blog1',
      url: '/blog1',
      templateUrl: 'view/blog1.html'
    };
    blogSecondState = {
      name: 'blog2',
      url: '/blog2',
      templateUrl: 'view/blog2.html'
    };
    homeState = {
      name: 'home',
      url: '',
      templateUrl: 'view/blog2.html'
    };
    cvStateState = {
      name: 'cv',
      url: '/cv',
      templateUrl: 'view/cv.html'
    };
    InterviewState = {
      name: 'Interview',
      url: '/Interview',
      templateUrl: 'view/2048.html'
    };
    return $stateProvider.state(blogFirstState).state(blogSecondState).state(homeState).state(cvStateState).state(InterviewState);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzIjpbImJhc2ljLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsVUFBZixFQUEyQixDQUFDLFdBQUQsQ0FBM0IsQ0FDQSxDQUFDLE1BREQsQ0FDUSxTQUFDLGNBQUQ7QUFDUCxRQUFBO0lBQUEsY0FBQSxHQUNDO01BQUEsSUFBQSxFQUFNLE9BQU47TUFDQSxHQUFBLEVBQUssUUFETDtNQUVBLFdBQUEsRUFBYSxpQkFGYjs7SUFJRCxlQUFBLEdBQ0M7TUFBQSxJQUFBLEVBQU0sT0FBTjtNQUNBLEdBQUEsRUFBSyxRQURMO01BRUEsV0FBQSxFQUFhLGlCQUZiOztJQUlELFNBQUEsR0FDQztNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsR0FBQSxFQUFLLEVBREw7TUFFQSxXQUFBLEVBQWEsaUJBRmI7O0lBSUQsWUFBQSxHQUNDO01BQUEsSUFBQSxFQUFNLElBQU47TUFDQSxHQUFBLEVBQUssS0FETDtNQUVBLFdBQUEsRUFBYSxjQUZiOztJQUlELGNBQUEsR0FDQztNQUFBLElBQUEsRUFBTSxXQUFOO01BQ0EsR0FBQSxFQUFLLFlBREw7TUFFQSxXQUFBLEVBQWEsZ0JBRmI7O1dBR0QsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsY0FBckIsQ0FDQSxDQUFDLEtBREQsQ0FDTyxlQURQLENBRUEsQ0FBQyxLQUZELENBRU8sU0FGUCxDQUdBLENBQUMsS0FIRCxDQUdPLFlBSFAsQ0FJQSxDQUFDLEtBSkQsQ0FJTyxjQUpQO0VBekJPLENBRFI7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd1aXJvdXRlcicsIFsndWkucm91dGVyJ10pXHJcbi5jb25maWcgKCRzdGF0ZVByb3ZpZGVyKSAtPiBcclxuXHRibG9nRmlyc3RTdGF0ZSA9IFxyXG5cdFx0bmFtZTogJ2Jsb2cxJyxcclxuXHRcdHVybDogJy9ibG9nMScsXHJcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXcvYmxvZzEuaHRtbCdcclxuXHJcblx0YmxvZ1NlY29uZFN0YXRlID0gXHJcblx0XHRuYW1lOiAnYmxvZzInLFxyXG5cdFx0dXJsOiAnL2Jsb2cyJyxcclxuXHRcdHRlbXBsYXRlVXJsOiAndmlldy9ibG9nMi5odG1sJ1xyXG5cclxuXHRob21lU3RhdGUgPSBcclxuXHRcdG5hbWU6ICdob21lJyxcclxuXHRcdHVybDogJycsXHJcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXcvYmxvZzIuaHRtbCdcclxuXHJcblx0Y3ZTdGF0ZVN0YXRlID0gXHJcblx0XHRuYW1lOiAnY3YnLFxyXG5cdFx0dXJsOiAnL2N2JyxcclxuXHRcdHRlbXBsYXRlVXJsOiAndmlldy9jdi5odG1sJ1xyXG5cclxuXHRJbnRlcnZpZXdTdGF0ZSA9IFxyXG5cdFx0bmFtZTogJ0ludGVydmlldycsXHJcblx0XHR1cmw6ICcvSW50ZXJ2aWV3JyxcclxuXHRcdHRlbXBsYXRlVXJsOiAndmlldy8yMDQ4Lmh0bWwnXHJcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoYmxvZ0ZpcnN0U3RhdGUpXHJcblx0LnN0YXRlKGJsb2dTZWNvbmRTdGF0ZSlcclxuXHQuc3RhdGUoaG9tZVN0YXRlKVxyXG5cdC5zdGF0ZShjdlN0YXRlU3RhdGUpXHJcblx0LnN0YXRlKEludGVydmlld1N0YXRlKTsiXX0=
