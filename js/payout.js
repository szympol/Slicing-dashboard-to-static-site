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


  var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');
[].forEach.call(tableSortingTextElements, function(item, index){
    item.addEventListener('mouseenter', function(){
        tableSortingSvgElements[index].classList.add('opacity-full');
    });
    item.addEventListener('mouseleave', function(){
        tableSortingSvgElements[index].classList.remove('opacity-full');
    });
});

//PAGINATION

var BackgroundOnPaginationElement = function(){
    this.classList.toggle('active');
    /*for (var i = 0; i < selectPaginationElements.length; i++){
        if(selectPaginationElementsLoopedNodeList[i].classList.contains('active')){

        }
    }*/
    
};

var selectPaginationElements = document.querySelectorAll('.pagination li a');

selectPaginationElements[1].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[2].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[3].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[4].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[5].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[6].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[7].addEventListener('click', BackgroundOnPaginationElement);
selectPaginationElements[8].addEventListener('click', BackgroundOnPaginationElement);


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

