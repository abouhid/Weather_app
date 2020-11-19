
const modal = document.querySelector('.modalBox');
const exitModal = document.querySelector('.exit-modal');
const modalContent = document.querySelector('.modal-content');
const modalMessage = document.createElement('p');
const openModal = (content) => {
  modal.style.display = 'block';
  modalMessage.textContent = content;
  modalContent.append(modalMessage, exitModal);

  exitModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

document.addEventListener('keydown', (e) => {
  const { keyCode } = e;
  if (keyCode === 27) {
    modal.style.display = 'none';
  }
});

export { openModal, exitModal };