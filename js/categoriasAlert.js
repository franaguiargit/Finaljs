const mensajeError = ()=>{
    let timerInterval
Swal.fire({
  title: 'Por el Momento esta pagina no esta funcional',
  html: 'Volvera al inicio en <b></b> milisegundos.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
setTimeout(() => {location.href = "../index.html"},3000)
}

mensajeError()