function startTime() {
	const deg = 6;
	const hr = document.querySelector('#hr');
	const mn = document.querySelector('#mn');
	const sc = document.querySelector('#sc');
	const day = new Date();
		
	var hh = day.getHours() * 30;
	var mm = day.getMinutes() * deg;
	var ss = day.getSeconds() * deg;
					
	hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
			
	var t = setTimeout(startTime, 500);
}