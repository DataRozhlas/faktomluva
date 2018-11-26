const stamp = Date.now() + Math.floor(Math.random() * 10000);

grafokres({
	elem: "#graf1",
	data: data.doziti,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
});

grafokres({
	elem: "#graf2",
	data: data.demokracie,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres({
	elem: "#graf3",
	data: data.katastrofy,
	cutoff: 1950,
	interval: "decade",
	btnFn: postResult,
	yMin: 0,
	yMax: 1000
});

grafokres({
	elem: "#graf4",
	data: data.deti,
	cutoff: 1940,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres({
	elem: "#graf5",
	data: data.gramotnost,
	cutoff: 1960,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

grafokres({
	elem: "#graf6",
	data: data.chudoba,
	cutoff: 1950,
	interval: "decade",
	btnFn: postResult,
	yFormat: "x + ' %'"
});

function postResult(btn) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", response);
	xhr.open("POST", "https://9x274i2n0k.execute-api.eu-central-1.amazonaws.com/prod/");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify({ "user_id": stamp, "q_id": btn.attr("id").substring(0, btn.attr("id").length - 3), data: btn.attr("data-entered").split(",") }));
	function response() { console.log(this.response); }
}
