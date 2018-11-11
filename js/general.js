let menu = document.querySelector('.hamburger');

menu.addEventListener('click', function() {
  this.classList.toggle('hamburger--active');
}, false);


  function toggleMenu(visible) {
    document.querySelector('.sideBar_logo').classList.toggle('sideBar--showInlineBlock', visible);
    document.querySelector('.sideBar_nav').classList.toggle('sideBar--showBlock', visible);
    document.querySelector('.sideBar_manager').classList.toggle('sideBar--showInlineBlock', visible);
    document.querySelector('.topbar').classList.toggle('main--hidedSidebar', visible);
    document.querySelector('.pages-background').classList.toggle('main--hidedSidebar', visible);
  };

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });



 /*  var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
  var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');
  [].forEach.call(tableSortingTextElements, function(item, index){
      item.addEventListener('mouseenter', function(){
          tableSortingSvgElements[index].classList.add('opacity-full');
      });
      item.addEventListener('mouseleave', function(){
          tableSortingSvgElements[index].classList.remove('opacity-full');
      });
  }); */



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


//MODALS

function closeModal() {
    document.getElementById('overlay').classList.remove('show')
  };

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      closeModal()
    })
  });

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal()
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
  });

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  }

  document.getElementById('login').addEventListener('click', function () {
    openModal('#loginModal');
  });

document.getElementById('quit').addEventListener('click', function () {
    openModal('#quitModal');
});

    document.getElementById('chat').addEventListener('click', function () {
        openModal('#chatModal');
  });

  document.getElementById('addURL1').addEventListener('click', function () {
    openModal('#addURLModal');
});
document.getElementById('addURL2').addEventListener('click', function () {
    openModal('#addURLModal');
});