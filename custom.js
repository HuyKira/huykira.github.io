jQuery(document).ready(function($) {
	$.getJSON( "https://huykira.net/wp-json/wp/v2/posts", function(data) {
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
});