document.querySelector('.send-button').addEventListener('click', () => {
  fetch('http://localhost:7777/login', {
      method: 'POST',
      // treść którą chesz wysłac do endpointu w post
      // pamiętaj ze muszą być w "" bo JSON
      body: JSON.stringify({
        name: 'worie',
        password: 'hidden',
      }),
      // wymagane zeby express rozumiał 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }).then(r => r.text()).then(text => console.log(text))
});