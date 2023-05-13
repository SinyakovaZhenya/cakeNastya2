const mobileNavBtn = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const filterСard = document.querySelectorAll('.card');
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

mobileNavBtn.addEventListener('click', function() {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
})

document.querySelector('.swiper-wrapper').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['filter'];
	console.log(filterClass);
	
	filterСard.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'catalog') {
			elem.classList.add('hide');
		}
	})
})

































