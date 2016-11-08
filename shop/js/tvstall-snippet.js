$(document).ready(function() {
	var tvstall_init = false;
	window.addAdv = function (video_id) {
		if (!tvstall_init) {
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
								.html("Купите Apple iPhone уже сегодня!")
						)
				)
				.insertAfter("#" + video_id);
		}
	};
});