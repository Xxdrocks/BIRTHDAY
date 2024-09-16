// js buat timeline

var countDownDate = new Date("September 21 , 2024 00:00:00:00").getTime();

// Perbarui hitungan mundur setiap 1 detik
var countdownFunction = setInterval(function () {
  //  tanggal dan waktu hari ini
  var now = new Date().getTime();

  // jarak waktu : sekarang dan tanggal itung mundur
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // keluarkan hasil dari id dari html
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika waktu sudah habis munculkan text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "G-TYA BIRTHDAY 2 DECEMBER 2024";
  }
}, 1000);


        function openCalendar() {
            // Skema URL untuk membuka aplikasi kalender di iOS
            const iOSCalendarUrl = 'calshow://';

            // Skema URL untuk membuka aplikasi kalender di Android
            const androidCalendarUrl = 'content://com.android.calendar/time/';

            // Deteksi perangkat dan pilih skema URL yang sesuai
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            const isAndroid = /Android/i.test(navigator.userAgent);

            if (isIOS) {
                window.location.href = iOSCalendarUrl;
            } else if (isAndroid) {
                window.location.href = androidCalendarUrl;
            } else {
                // Jika perangkat tidak terdeteksi atau tidak mendukung, gunakan fallback
                window.location.href = 'https://calendar.google.com'; // Fallback ke Google Calendar
            }

            // Tambahkan fallback jika aplikasi tidak dapat dibuka
            setTimeout(() => {
                window.location.href = 'https://calendar.google.com';
            }, 2000);
        }


// untuk ios 

// Mengatur countdown untuk tanggal 21 September 2024
var countDownDate = new Date("September 21, 2024 00:00:00").getTime();

// Perbarui hitungan mundur setiap 1 detik
var countdownFunction = setInterval(function () {
  // Dapatkan tanggal dan waktu saat ini
  var now = new Date().getTime();

  // Hitung jarak waktu antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Kalkulasi hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil hitung mundur di elemen HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika hitungan mundur berakhir
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "G-TYA BIRTHDAY 2 DECEMBER 2024";
  }
}, 1000);

// Fungsi untuk membuka aplikasi kalender di iOS atau Android
function openCalendar() {
  // Skema URL untuk membuka aplikasi kalender di iOS
  const iOSCalendarUrl = 'calshow://';

  // Skema URL untuk membuka aplikasi kalender di Android
  const androidCalendarUrl = 'content://com.android.calendar/time/';

  // Deteksi perangkat dan pilih skema URL yang sesuai
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isIOS) {
    window.location.href = iOSCalendarUrl;
  } else if (isAndroid) {
    window.location.href = androidCalendarUrl;
  } else {
    // Jika perangkat tidak terdeteksi, gunakan fallback ke Google Calendar
    window.location.href = 'https://calendar.google.com';
  }

  // Tambahkan fallback jika aplikasi tidak dapat dibuka dalam 2 detik
  setTimeout(() => {
    window.location.href = 'https://calendar.google.com';
  }, 2000);
}

