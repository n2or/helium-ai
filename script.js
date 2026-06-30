//  const video = document.getElementById("video");
//   video.playbackRate = 0.5;

document.querySelectorAll('.card').forEach(card => {
  const fileInput = card.querySelector('.file-input');
  const uploadBtn = card.querySelector('.upload');
  const sendBtn = card.querySelector('.send');
  const cardTop = card.querySelector('.card-top');

  uploadBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    cardTop.style.backgroundImage = `url('${url}')`;

    sendBtn.disabled = false;
  });
});