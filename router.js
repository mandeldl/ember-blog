Blogger.Router.map(function () {
	this.resource('posts', {path:'/'});
	this.resource('about', {path:'/about'});
	this.resource('contact');
});