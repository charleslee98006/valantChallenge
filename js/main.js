
var list = [{"id":1, "item": {"label":"Steak", "type":"meat", "duration":"90"}}];
var counter=2;

$("document").ready(function(){
	showList();
	$("#notification").hide();
	$("form").submit(function(event){
		if(!emptyStringChecker()){
			var newYear = new Date(); 
			newYear = new Date(0,0,0,0,$('input:eq(0)').val()); 
			$('#minimal').countdown({until: newYear}); 
			list.push({'id':(counter++), 'item':{'duration':$('input:eq(0)').val(), 'label':$('input:eq(1)').val(), 'type':$('input:eq(2)').val()}});
			$("#notification").text("Item has been added to the list.");
			notify();
			showList();
		}
		return false;
	});
});

//displays the updated list
function showList(){
	$("#list").html("");
	for(var i=0; i<list.length; i++){
		$("#list").append("<div id="+list[i].id+" class='item'><div class='label'>"+list[i].item.label+"</div><div class='type'>"+
			list[i].item.type+"</div><div class='duration'>"+list[i].item.duration+"</div><div class='delButton'><button onclick='deleteItem("+
			(list[i].id+"")+")'>Delete</button></div></div>");
	}
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