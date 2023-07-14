setInterval(() => {
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('samay').innerHTML = time;
    document.getElementById('tarikh').innerHTML = "on " + date;
}, 1000);

// document.addEventListener('DOMContentLoaded', () => {

//     const selectDrop = document.getElementById('browse');

//     fetch('https://restcountries.com/v3.1/all').then(res => {
//         return res.json();
//     }).then(data => {
//         let output = "";
//       data.forEach(country => {
//         output += `<option value = "${country.name.common}">${country.name.common}</option>`;
//       })

//       selectDrop.innerHTML = output;
//     }).catch(err => {
//         console.log(err);
//     })
// })