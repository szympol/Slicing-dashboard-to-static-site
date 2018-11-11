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
    document.querySelector('.topbar').classList.toggle('main--mobile--hidedSidebar', visible);
  };

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
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

