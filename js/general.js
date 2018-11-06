let menu = document.querySelector('.hamburger');

menu.addEventListener('click', function() {
  this.classList.toggle('hamburger--active');
}, false);



  function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible);
  };

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });



  var unhideCalendarIconStartCell = document.getElementById('start');
var unhideCalendarIconEndCell = document.getElementById('end');

unhideCalendarIconStartCell.addEventListener('mouseenter', function(){
    unhideCalendarIconStartCell.classList.add('calendarBackground');
});

unhideCalendarIconStartCell.addEventListener('mouseleave', function(){
    unhideCalendarIconStartCell.classList.remove('calendarBackground');
});

unhideCalendarIconEndCell.addEventListener('mouseenter', function(){
    unhideCalendarIconEndCell.classList.add('calendarBackground');
});

unhideCalendarIconEndCell.addEventListener('mouseleave', function(){
    unhideCalendarIconEndCell.classList.remove('calendarBackground');
});


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
      // 2
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      // 3
      datasets: [{
          // 4
          label: "Signups",
          // 5
          backgroundColor: '#56819F',
          borderColor: '#56819F',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
          label: "FTD",
          backgroundColor: '#F58220',
          borderColor: '#F58220',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
          label: "Earned",
          backgroundColor: '#04AE00',
          borderColor: '#04AE00',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          
      }]
  },
  options: {
      
    scales: {
        xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [{
                    gridLines: {
                        display:false
                    }   
                }]
        },
       /*  title: {
            display: true,
            text: 'Custom Chart Title'
        }, */
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 40,
                right: 40,
                top: 40,
                bottom: 40
            }
        }
}
});