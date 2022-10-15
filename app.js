// Start Jquery
$(document).ready(function() {

  // Start Header
  	  //Start Nav

  	    $(".navbuttons").click(function() {
  	  	  $(this).toggleClass('crossxs');
  	    });

  	  //End Nav
  // End Header

  // Start Form Popup
      $('#openForm').click(function() {
        document.getElementById('form-popup').style.display = "block";
      });

      $('#closeForm').click(function() {
        document.getElementById('form-popup').style.display = "none";
      });
  // End Form Popup


})
// End Jquery


// Start Javascript
var counterValues = document.querySelectorAll('.countervalues');
//console.log(counterValues)

counterValues.forEach(function(countervalue) {
	countervalue.textContent = 0;
	//console.log(countervalue)

	const UPDATECOUNTER = function() {
		//console.log('I ok');
		const GETTARGET = +countervalue.getAttribute('data-target');
		//console.log(typeof GETTARGET,GETTARGET)

		const GETOUTPUT = +countervalue.innerText;
		//console.log(GETOUTPUT)

		const CONSTANT = GETTARGET / 100;
		//console.log(CONSTANT);

		if(GETOUTPUT < GETTARGET) {
			countervalue.textContent = GETOUTPUT+CONSTANT;
			setTimeout(UPDATECOUNTER,10);
		}
	}
	UPDATECOUNTER();
})

 // Start rating
 	 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     33],
          ['India',  28],
          ['China', 25],
          ['Thailand',  20],
          ['Lao', 16],
          ['Others', 9]
        ]);

        var options = {
          title: 'Foreign Students',
          titleTextStyle: {color: "orange",fontSize: 20},
          backgroundColor: 'none',
          colors: ["gold","green","red","blue","gray","brown"],
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

    // Start Copyright
      const getYear = document.getElementById('getyear');
      const getFullYear = new Date().getUTCFullYear();

      getYear.textContent = getFullYear;
    // End Copyright
// End Javascript