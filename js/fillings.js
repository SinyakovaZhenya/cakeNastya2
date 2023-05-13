const topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 400) {
		topBtn.classList.add('top-show');
	}
	else{
		topBtn.classList.remove('top-show');
	}
})

topBtn.addEventListener('click', function topHandler() {
	if(window.pageYOffset > 0) {
		window.scrollBy(0, -50);
		setTimeout(topHandler, 0);
	}
})