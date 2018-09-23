var aboutCloseBtn = document.getElementById('about-close-btn');
var aboutContainer = document.getElementById('about-container');
var aboutToggle = document.getElementById('aboutToggle');
var sidebar = document.getElementById('side-bar');
var sideBarClose = document.getElementById('side-bar-close');
var sideBarOpen = document.getElementById('side-bar-open');

aboutCloseBtn.addEventListener('click', function() {
	aboutContainer.style.display = 'none';
})

aboutToggle.addEventListener('click', function() {
	aboutContainer.style.display = 'block';
})

sideBarClose.addEventListener('click', function() {
	sidebar.classList.remove('open');
	sidebar.classList.add('closed');
	sideBarOpen.style.display = 'block';
})

sideBarOpen.addEventListener('click', function() {
	sidebar.classList.remove('closed');
	sidebar.classList.add('open');
	sideBarOpen.style.display = 'none';
})