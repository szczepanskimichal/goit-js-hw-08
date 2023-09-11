// import throttle from 'lodash.throttle';

// const btnEl = document.querySelector('button[type="submit"]');
// const emailEl = document.querySelector('input[type="email"]');
// const messageEl = document.querySelector('textarea[name="message"]');

// let data = {};

// if (!localStorage.getItem('feedback-form-state')) {
//   data = {
//     email: '',
//     message: '',
//   };
// } else {
//   data = JSON.parse(localStorage.getItem('feedback-form-state'));
// }

// const checkLocalStorage = () => {
//   const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (savedData) {
//     emailEl.value = savedData.email;
//     messageEl.value = savedData.message;
//   } else {
//     emailEl.value = '';
//     messageEl.value = '';
//   }
// };

// checkLocalStorage();

// function localData(event) {
//   data[event.target.name] = event.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
//   }
//   // function resetLocalSorage(event) {
//   //   event.preventDefault();
//   //   localStorage.clear();
//   //   checkLocalStorage();
//   // }
//   function resetLocalSorage() {
//     localStorage.clear();
//     emailEl.value = '';
//     messageEl.value = '';
//     console.log('Local Storage został wyczyszczony.');
//   }

//   formEl.addEventListener('submit', event => {
//     event.preventDefault();
//     resetLocalSorage();
//     console.log('Dane z formularza zostaly wyslane');
//   });
//   emailEl.addEventListener('input', throttle(localData, 1000));
//   messageEl.addEventListener('input', throttle(localData, 1000));
//   //btnEl.addEventListener('click', resetLocalSorage);
// }

//------------------------------------------------------------------
//------------------------------------------------------------------
// Wybierz formularz opinii
const formularz = document.querySelector('.feedback-form');

// Wybierz pola email i message
const poleEmail = formularz.querySelector('input[name="email"]');
const poleWiadomosci = formularz.querySelector('textarea[name="message"]');

// Wczytaj stan formularza z pamięci podczas ładowania strony
window.addEventListener('load', () => {
  const zapisanyStan = JSON.parse(
    localStorage.getItem('stan-formularza-opinii')
  );
  if (zapisanyStan) {
    poleEmail.value = zapisanyStan.email || '';
    poleWiadomosci.value = zapisanyStan.message || '';
  }
});

// Ogranicz częstotliwość aktualizacji funkcji, aby uniknąć częstych aktualizacji w pamięci
const zapiszStanFormularza = _.throttle(() => {
  const aktualnyStan = {
    email: poleEmail.value,
    message: poleWiadomosci.value,
  };
  localStorage.setItem('stan-formularza-opinii', JSON.stringify(aktualnyStan));
}, 500);

// Zapisz stan formularza przy zdarzeniu input
formularz.addEventListener('input', zapiszStanFormularza);

// Wyczyść pamięć i pola formularza po wysłaniu formularza
formularz.addEventListener('submit', event => {
  event.preventDefault();
  if (poleEmail.value === '' || poleWiadomosci.value === '') {
    console.log('Proszę wypełnić wszystkie pola przed wysłaniem');
  } else {
    console.log('Formularz został wysłany!', {
      email: poleEmail.value,
      message: poleWiadomosci.value,
    });
    localStorage.removeItem('stan-formularza-opinii');
    formularz.reset();
  }
});
