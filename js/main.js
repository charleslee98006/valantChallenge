
var list = [{"id":1, "item": {"label":"Steak", "type":"Meat", "duration":5, "status":"Active"}}];
var counter=2;

$("document").ready(function(){
	showList();
	$("#notification").hide();
	setInterval(function(){ timeTracker(); }, 1000);

	$("form").submit(function(event){//compiles all input fields and create an item with a counter.
		if(!emptyStringChecker()){
			var newYear = new Date();
			inputTime =  parseInt($('input:eq(0)').val())*60 //Converted from minutes into seconds.
			list.push({'id':(counter), 'item':{'duration':inputTime, 'label':$('input:eq(1)').val(), 'type':$('input:eq(2)').val()}});
			$("#notification").text("Item has been added to the list.");
			notify();
			showList();
			counter++;
		}
		return false;
	});
});

//clears the display and updates the list
function showList(){
	$("#list").html("");
	for(var i=0; i<list.length; i++){
		$("#list").append("<div id="+list[i].id+" class='item'><div class='label'>"+list[i].item.label+"</div><div class='type'>"+
			list[i].item.type+"</div><div class='duration' id='time"+list[i].id+"'></div><div class='delButton'><button onclick='deleteItem("+
				(list[i].id+"")+")'>Delete</button></div></div>");
	}
}
//Keep track of the items for each item in the inventory
function timeTracker(){
	for(var i=0; i<list.length; i++){
		if(list[i].item.duration == 0 && list[i].item.status =="Active"){
			expiredItem(list[i]);
		}
		else if(list[i].item.status =="Expired"){
			$("#"+item.id).css("background","#FFDF00");
		}
		else if(list[i].item.duration != 0){
			hours = Math.floor(list[i].item.duration/3600);
			min = Math.floor(((list[i].item.duration/3600)-hours)*60);
			sec = Math.floor(list[i].item.duration-(hours*3600)-(min*60));
			list[i].item.duration = list[i].item.duration-1;
			$('#time'+list[i].id).text(hours+ " hour "+ min +" minutes "+ sec+" seconds");
		}
	}
}
//Changes the CSS background for expired items and notifies the user about the expired item.
function expiredItem(item){
	$('#time'+item.id).text("Item Expired!");
	item.item.status = "Expired!";
	$("#"+item.id).css("background","#FFDF00");
	$("#notification").text("The "+item.item.label+" item has expired!");
	notify();
}
//deletes an item before updating the list.
function deleteItem(args){
	for(var i = 0; i<list.length; i++){
	 	if(list[i].id == args){
		 	list.splice(i, 1);
		 	$("#notification").text("An item has been deleted from the list.");
		 	notify();
	 		showList();
	 	}
	}
}
//Notifies the user a message based on what action was taken.
function notify(){
	$("#notification").fadeIn(2000, function(){
			$("#notification").fadeOut(3000);
	});
}
//checks for empty string values and notifies the user of any empty string field.
function emptyStringChecker(){
	var empty=false;
	if($('input:eq(0)').val()==""){
		$("#notification").text("Please add time to the field.");
		empty=true;
	}
	else if($('input:eq(1)').val()==""){
		$("#notification").text("Please add a label to the field.");
		empty=true;
	}
	else if($('input:eq(2)').val()==""){
		$("#notification").text("Please add a type to the field.");
		empty=true;
	}
	if(empty){
		notify();
		return empty;
	}
	return empty;
}