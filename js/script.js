(() => {

  const refs_modal = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs_modal.openModalBtn?.addEventListener('click', toggleModal);
  refs_modal.closeModalBtn?.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs_modal.modal.classList.toggle('is-open');
  }


  const refs_menu = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп модалки
    menu: document.querySelector('[data-menu]'),
  };

  refs_menu.openModalBtn?.addEventListener('click', toggleModal);
  refs_menu.closeModalBtn?.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs_menu.menu.classList.toggle('is-open');
  }


})();