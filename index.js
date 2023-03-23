$(document).ready(function () {
	// cards hover effect
	$('.card').delay(1800).queue(function (next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});

	// fetch game details from data.json
	fetch("./data.json").then(
		(res) => {
			// cast response to json
			return res.json();
		}
	).then(
		// res.json = resJson
		(resJson) => {
			const game_lists = resJson["data"];	
			// loop function to put each game from data to cards
			game_lists.forEach(el => {
				$("#page-content").append(`
					<div class="card">
						<div class="content">
							<h2 class="title">${el.name}</h2>
							<p class="copy">${el.author}'s Game</p>
							<a href="${el.link}" target="_blank"><button class="btn">PLAY</button></a>
						</div>
					</div>
				`);
			});
		}
	)
});