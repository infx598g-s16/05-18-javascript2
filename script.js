'use strict'; //strict mode: catch silly errors

var names = ['Alice', 'Bob', 'Charles', 'Debbie', 'Edward', 'Fred'];

$('#text').click(function(event){
	console.log("clicky clicky");
	$('#text').append("etc. ");	
})

$('li').click(function(event){
	var element = $(event.target);
	console.log("You clicked "+element.html());	
	element.fadeOut(500);
});

var url = "http://data.unhcr.org/api/stats/persons_of_concern.json?year=2013&country_of_residence=USA"

$.get(url).then(function(data){
	console.log(data);
})

