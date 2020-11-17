console.log('connected');


let activeMenu 
let activeArchive
$('.button').click(function(){
	// console.log('clicked')
	$('.active').removeClass('active');
	$(this).addClass('active');
	activeMenu = $(this).attr('id');
	console.log(activeMenu)
	$('.activeContainer').removeClass('.activeContainer').addClass('inactiveContainer');
	$(`#${activeMenu}Container`).addClass('activeContainer').removeClass('inactiveContainer');
})



$('.archiveIndexBlock').mousemove(function(){
	// console.log(event.clientX, event.clientY)
	$('.mouseText').css('left', event.clientX+20)
	$('.mouseText').css('top', event.clientY+20)
})


$('.archiveIndexBlock').click(function(){
	activeArchive = $(this).attr('id');

	console.log(activeArchive)
	$('#dimEffectContainer').css('display','block')
})


$('#dimEffectContainer').click(function(){
	$(this).css('display','none')
})

