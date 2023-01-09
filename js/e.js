var myapp = angular.module("myapp", [
    'ngRoute'
]);
myapp.controller("ctr", ['$scope','$http', function($scope,$http){
    $http.get("json/eproject.json").then(function(response){
       var data = response.data;
       $scope.datalist = data;
       console.log($scope.datalist);
   })}])
   myapp.controller("ctr1", ['$scope','$http', function($scope,$http){
    $http.get("json/eproject.json").then(function(response){
       var data = response.data;
       $scope.datalist = data;
       console.log($scope.datalist);
   })}])





var ob = angular.module("ob",['ngRoute']);
ob.controller("minob", ['$scope','$http', function($scope,$http){
    $http.get("json/ob.json").then(function(response){
       var data = response.data;
       $scope.datalist = data;
       console.log($scope.datalist);
      
   })}])
   
var cons = angular.module("cons",['ngRoute']);
cons.controller("mincons", ['$scope','$http', function($scope,$http){
    $http.get("json/cons.json").then(function(response){
       var data = response.data;
       $scope.datalist = data;
       console.log($scope.datalist);
      
   })}])



   /*mobile*/
var nav = document.getElementById('nav2')
var icon = document.getElementById('icon1')
  icon.addEventListener("click",iconfunction);
   function iconfunction (){
    if(
      nav.style.display == "none"
    ){nav.style.display = "block"}
    else{
      nav.style.display = "none"
    }
}

var btn = document.getElementById('btn');
var hei = document.getElementById('nav2')
var submenu = document.getElementById('sub-menu1');
  btn.addEventListener("click",sub)
  function sub(){
    if(submenu.style.position == "relative"
          
    ){
      submenu.style.position = "absolute"
               
     
    }else{submenu.style.position ="relative"
   }
   if(
    submenu.style.opacity == 1
   ){submenu.style.opacity = 0}else{
    submenu.style.opacity =1

   }
   if(
    submenu.style.visibility == "visible"
   ){submenu.style.visibility = "hidden" }else{
    submenu.style.visibility = "visible"

   }
   if(
   hei.style.height == "auto"
   ){ hei.style.height = "300px"}else{
    hei.style.height ="auto"
   }
  }
  
   