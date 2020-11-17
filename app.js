console.log('connected');


let activeDiv 

$('.button').click(function(){
	// console.log('clicked')
	$('.active').removeClass('active');
	$(this).addClass('active');
	activeDiv = $(this).attr('id');
	console.log(activeDiv)
	$('.activeContainer').removeClass('.activeContainer').addClass('inactiveContainer');
	$(`#${activeDiv}Container`).addClass('activeContainer').removeClass('inactiveContainer');
})



$('.archiveIndexBlock').mousemove(function(){
	// console.log(event.clientX, event.clientY)
	$('.mouseText').css('left', event.clientX+20)
	$('.mouseText').css('top', event.clientY+20)
})


$('.archiveIndexBlock').click(function(){
	console.log('cliced')
	$('#dimEffectContainer').css('display','block')
})


$('#dimEffectContainer').click(function(){
	$('#dimEffectContainer').css('display','none')
})