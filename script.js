function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt;
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  }

  // Закрытие модального окна при клике вне картинки
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      closeModal();
    }
    }