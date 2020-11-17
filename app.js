console.log('connected');
// console.log(a01);



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
	let index = Number($(this).attr('id').substring(7,9));
	let activeArchive = archiveList[index-1]
	// console.log(activeArchive)
	$('#dimEffectContainer').css('display','block')
	if(activeArchive.type == 'painting'){
		$('#dimEffectContainer').prepend(`<img src=${activeArchive.link} class='arcImg'>`)
	} else if (activeArchive.type == 'video'){
		console.log(activeArchive.youtube)
		$('#dimEffectContainer').prepend(`<object data=${activeArchive.youtube} class='arcImg'></object>`)
	}
})


$('#dimEffectContainer').click(function(){
	$(this).css('display','none')
	$('#dimEffectContainer').empty()
})

