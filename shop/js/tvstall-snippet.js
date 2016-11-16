$(document).ready(function() {
	var tvstall_video_id = null;
		tvstall_init = false,
		tvstall_timer = null,
		checked_video = false;

	function showAdv(video_id) {
		if (!tvstall_init) {
			tvstall_init = true;
			
			$("<div />", {
				class: "tvstall-adv-container",
				style: "position: absolute; left: 0; top: 0; width: 1920px; padding: 5px; border: 1px solid #FF0066; background: #FF6699"
			})
				.append(
					$("<p />")
						.html("TVStall: ")
						.append(
							$("<a />")
								.attr("href", "../shop/")
								.html("Уроки танго для начинающих")
						)
				)
				.insertAfter(video_id);
		}
	}

	function checkVideoTime() {
		if (this.currentTime >= 89) {
			showAdv(tvstall_video_id);
			$(tvstall_video_id).unbind('timeupdate', checkVideoTime);
		}
	}

	window.addAdv = function (video_id) {
		console.log('addAdv', video_id);
		tvstall_video_id = "#" + video_id;
		$(tvstall_video_id).bind('timeupdate', checkVideoTime);
	};
});