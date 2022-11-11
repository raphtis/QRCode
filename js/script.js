const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

// FORM TO GENERATE QR CODE
const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();
  const url = document.getElementById('url').value;
  const size = document.getElementById('qr-size').value;
  console.log(url,size);

  if (url === '') {
    alert('Please enter a complete URL')
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        saveBtn(saveUrl);
      }, 50);
    }, 1000)
  }
};

// GENERATE QR CODE
const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size
  });
}

// SHOW LOADING SPINNER
const showSpinner = () => {
  document.getElementById('spinner').style.display = 'black';
}

// HIDE LOADING SPINNER
const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
}

// CLEAR FORM UI
const clearUI = () => {
  qr.innerHTML = '';
  const saveLink = document.getElementById('save-link');
  if(saveLink) saveLink.remove();
};

const clearInput = () => {
  url.innerHTML = '';
}


// SAVE QR CODE
const saveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.href = saveUrl;
  link.className = 'save-btn';
  link.download = 'qrcode';
  link.innerHTML = 'Save QR';
  document.getElementById('generated').appendChild(link);
} 

hideSpinner();
form.addEventListener('submit', onGenerateSubmit);

// TOGGLE DARKMODE
const toggleDarkMode = () => {
  darkMode = document.body;
  darkMode.classList.toggle('dark-mode' )
}