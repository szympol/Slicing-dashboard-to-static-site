//https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/

//last one

/*
var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
for (var i = 0; i < tableSortingTextElements.length; i++){
    var tableSortingTextElementsLoopedNodeList = tableSortingTextElements[i];
    tableSortingTextElementsLoopedNodeList.addEventListener('mouseenter', function(){
        tableSortingSvgElementsLoopedNodeList.classList.add('opacity-full');
    });
}

var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');
for (var i = 0; i < tableSortingSvgElements.length; i++){
    var tableSortingSvgElementsLoopedNodeList = tableSortingSvgElements[i];
    tableSortingTextElementsLoopedNodeList.addEventListener('mouseleave', function(){
        tableSortingSvgElementsLoopedNodeList.classList.remove('opacity-full');
    });
}

*/


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


/*
var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');

tableSortingTextElements[0].addEventListener('mouseenter', function(){
    tableSortingSvgElements[0].classList.add('opacity-full');
});
tableSortingTextElements[0].addEventListener('mouseleave', function(){
    tableSortingSvgElements[0].classList.remove('opacity-full');
});

tableSortingTextElements[1].addEventListener('mouseenter', function(){
    tableSortingSvgElements[1].classList.add('opacity-full');
});
tableSortingTextElements[1].addEventListener('mouseleave', function(){
    tableSortingSvgElements[1].classList.remove('opacity-full');
});

tableSortingTextElements[2].addEventListener('mouseenter', function(){
    tableSortingSvgElements[2].classList.add('opacity-full');
});
tableSortingTextElements[2].addEventListener('mouseleave', function(){
    tableSortingSvgElements[2].classList.remove('opacity-full');
});

tableSortingTextElements[3].addEventListener('mouseenter', function(){
    tableSortingSvgElements[3].classList.add('opacity-full');
});
tableSortingTextElements[3].addEventListener('mouseleave', function(){
    tableSortingSvgElements[3].classList.remove('opacity-full');
});
*/


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

/*
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






// E-mail address validation

document.querySelector('form').addEventListener('submit', function(event) {
    var isFormValidate = true;
  
    var emailAddressInput = event.target.querySelector('input[name="email_address"]')
    if(emailAddressInput.value.indexOf('@') < 0) {
      isFormValidate = false;
      emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
    }
  
    return !isFormValidate ? event.preventDefault() : true;
  });



/*
  document.querySelector('#wallet').focus(function(){
    setTimeout(function(){
        document.querySelector('#wallet').hide();
    },20000);
});
*/


$('input[type="range"]').on("change mousemove", function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                +'color-stop(' + val + ', #ff0000), '
                +'color-stop(' + val + ', #e3e3e3)'
                +')'
                );
});


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var removeHours = document.getElementById("removeText");
output.innerHTML = slider.value;

slider.oninput = function() {
  if (this.value == 0 ){
      output.innerHTML = this.value + ' hour';
  }
  else if  (this.value == 1 ){
        output.innerHTML = this.value + ' hour';
    
  }
  else {
    output.innerHTML = this.value + ' hours';
  }
  removeHours.classList.add('slidecontainer--removeText');
};

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

  document.getElementById('work').addEventListener('click', function () {
    openModal('#myModal');
  });

document.getElementById('work1').addEventListener('click', function () {
    openModal('#myModal1');
  });