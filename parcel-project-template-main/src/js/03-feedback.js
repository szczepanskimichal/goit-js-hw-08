import throttle from 'lodash/throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

// Funkcja zapisująca stan formularza do Local Storage
const saveFormStateToLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

// Funkcja wczytująca stan formularza z Local Storage i wypełniająca pola
const loadFormStateFromLocalStorage = () => {
  const storedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storedState) {
    emailInput.value = storedState.email || '';
    messageInput.value = storedState.message || '';
  }
};

// Nasłuchiwanie na zmiany w polach formularza i zapisywanie stanu do Local Storage
emailInput.addEventListener('input', saveFormStateToLocalStorage);
messageInput.addEventListener('input', saveFormStateToLocalStorage);

// Wczytanie stanu formularza z Local Storage przy ładowaniu strony
window.addEventListener('load', loadFormStateFromLocalStorage);

// Nasłuchiwanie na przesłanie formularza
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Formularz wysłany');
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
  console.log('Wyczyszczono stan formularza i Local Storage');
});
