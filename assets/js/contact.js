function showModal(title, body, imageUrl) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerText = body;
    document.getElementById("modal-image").src = imageUrl;
    document.getElementById("news-modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("news-modal").style.display = "none";
  }
  
  // Close modal if the user clicks outside the modal content
  window.onclick = function (event) {
    const modal = document.getElementById("news-modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  