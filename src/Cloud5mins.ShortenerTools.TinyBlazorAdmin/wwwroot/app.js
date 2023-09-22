function redirectToShorturl() {
	let path = window.location.pathname;
	if (path) {
		window.location = '/api' + path;
	}
}
