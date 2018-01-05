jQuery(document).ready(function($) {
	$.getJSON( "https://huykira.net/wp-json/wp/v2/categories?exclude=10,5,6,1,4", function(data) {
		list_cat = [];
		list_name = [];
        $.each(data, function(id,item) {
        	var html = '<li>';
        	html += '<a class="menu-option" data-id="'+item.id+'" href="#'+item.slug+'">'+item.name+'</a>';
        	html += '</li>';
        	$('.menu-ahihi').append(html);
        	var slug = '#'+item.slug;
        	var id = item.id;
	    	list_cat[slug] = id;
	    	list_name[slug] = item.name;
        });
        if(window.location.hash) {
        	if(list_cat[window.location.hash]){
        		$('h1').html(list_name[window.location.hash]);
        		$('title').html(list_name[window.location.hash]);
		  		get_data(list_cat[window.location.hash]);
		  	} else{
		  		$('.content').html('<h2 class="text-center">TRANG KHÔNG TỒN TẠI<h2>');
		  	}
		} else {
		 	get_data();
		}
    });
	function get_data(id){
		if(id){
			var url = 'https://huykira.net/wp-json/wp/v2/posts?per_page=50&categories='+id;
		} else{
			var url = 'https://huykira.net/wp-json/wp/v2/posts?per_page=50';
		}
		$.getJSON( url, function(data) {
	        $.each(data, function(id,item) {
	        	$('img.load').hide();
	        	var html = '<div class="list-post">';
	        	html += '<img src="'+item.thumbnail+'" alt="'+item.title+'">';
	        	html += '<h4><a target="_blank" href="'+item.link+'">'+item.title+'</a> - <span>('+item.views+' lượt xem)</span></h4>';
	        	html += '<p class="meta">'+item.date+'</p>';
	        	html += '<div class="clear"></div>';
	        	html += '</div>';
	        	$('.load-content').append(html);
	        });
	    });
	}
	jQuery('.navbar').on('click', '.menu-option', function(event) {
       	var id = $(this).data('id'),
       	content = $(this).text();
       	$('.load-content').empty();
       	$('img.load').show();
       	$('h1').html(content);   
       	$('title').html(content);   
       	get_data(id);
    });
});