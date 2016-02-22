$(function() {

		// Last Joined
		var last_joined_url = "https://everydayhero.com/api/v2/search/pages?country_code=us&campaign_id=6995c7aa-f212-49fa-bdf3-c0171068e7b2";
		$.getJSON(last_joined_url, {}, function(data) {
			var most_recent_id = 0;
			var most_recent_page = "";
			$(data.pages).each( function(key, value) { 
				if ( parseInt(value.id) > most_recent_id ) {
					most_recent_page = value.supporter.name;
				} // end if
			});
			if (most_recent_page != "") {
				$("#last-joined-para").html(most_recent_page + " has just joined!");
			} // end if
		});

});