/**
 * 
 */
app.factory('NotificationService',function($http){
var notificationService={}


notificationService.getAllNotifications=function(){
	
	return $http.get("http://localhost:8096/project2_middleware/getallnotifications")
	
}
notificationService.getNotification=function(notificationId){
	return $http.get("http://localhost:8096/project2_middleware/getnotification/"+notificationId)
}
notificationService.updateNotification=function(notificationId){
	return $http.put("http://localhost:8096/project2_middleware/updatenotification/"+notificationId)
}

return notificationService;
})
