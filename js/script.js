//https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/

//last one

/*
var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
for (var i = 0; i < tableSortingTextElements.length; i++){
    var tableSortingTextElementsLoopedNodeList = tableSortingTextElements[i];
}

var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');
for (var i = 0; i < tableSortingSvgElements.length; i++){
    var tableSortingSvgElementsLoopedNodeList = tableSortingSvgElements[i];
}

tableSortingTextElementsLoopedNodeList.addEventListener('mouseenter', function(){
    tableSortingSvgElementsLoopedNodeList.classList.add('opacity-full');
});
tableSortingTextElementsLoopedNodeList.addEventListener('mouseleave', function(){
    tableSortingSvgElementsLoopedNodeList.classList.remove('opacity-full');
});
*/


//first one
/*
var tableSortingTextElements = document.querySelector('.table-sorting thead tr th p');
var tableSortingSvgElements = document.querySelector('.table-sorting thead tr th p svg');

tableSortingTextElements.addEventListener('mouseenter', function(){
    tableSortingSvgElements.classList.add('opacity-full');
});

tableSortingTextElements.addEventListener('mouseleave', function(){
    tableSortingSvgElements.classList.remove('opacity-full');
});
*/


//first one 
/*
var tableSortingTextElements = document.querySelectorAll('.table-sorting thead tr th p');
var tableSortingSvgElements = document.querySelectorAll('.table-sorting thead tr th p svg');
[].forEach.call(tableSortingTextElements, function(){
    document.querySelector('.table-sorting thead tr th p').addEventListener('mouseenter', function(){
        tableSortingSvgElements[0].classList.add('opacity-full');
        tableSortingSvgElements[1].classList.add('opacity-full');
        tableSortingSvgElements[2].classList.add('opacity-full');
        tableSortingSvgElements[3].classList.add('opacity-full');
    });
    
    document.querySelector('.table-sorting thead tr th p').addEventListener('mouseleave', function(){
        tableSortingSvgElements[0].classList.remove('opacity-full');
        tableSortingSvgElements[1].classList.remove('opacity-full');
        tableSortingSvgElements[2].classList.remove('opacity-full');
        tableSortingSvgElements[3].classList.remove('opacity-full');
    });
});
*/

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