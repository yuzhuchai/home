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
	console.log('clicked')

	let index = Number($(this).attr('id').substring(7,9));
	let activeArchive = archiveList[index-1]
	console.log(activeArchive)
	$('#dimEffectContainer').css('display','block')
	if(activeArchive.type == 'painting'){
		$('#con').prepend(`<img src=${activeArchive.link} class='arcImg'>`)
		$('#con').append(`<div class='infoText'><span class='bold'>${activeArchive.title}</span>, ${activeArchive.year}<br/>${activeArchive.medium}<br/>${activeArchive.size}</div>`)
	} else if (activeArchive.type == 'video'){
		console.log(activeArchive.youtube)
		$('#con').prepend(`<video class='arcImg' controls><source src=${activeArchive.link} typr='video/mp4'>your browser does not support the video tag, view on <a src=${activeArchive.youtube}>youtube</a></video>`)
		$('#con').append(`<div class='infoText'><span class='bold'>${activeArchive.title}</span>, ${activeArchive.year}<br/>${activeArchive.size}<br/>${activeArchive.medium}</div>`)
	}
})


// video playing has a bug



$('#dimEffectContainer').click(function(){
	$(this).css('display','none')
	$('#con').empty()
})

