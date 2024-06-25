var khodamData = {};

function generateKhodamName() {
  var name = document.getElementById("name").value;
  var notificationElement = document.getElementById("notification");

  if (name.trim() === "") {
    notificationElement.textContent = "Lo belom masukkin nama lo woi.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (name.trim().length < 3) {
    notificationElement.textContent = "Kependekan bjir nama lu! (minimal 3 huruf).";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (/\d/.test(name)) {
    notificationElement.textContent = "Elu gabisa masukin angka.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  notificationElement.style.display = "none";

  name = name.charAt(0).toUpperCase() + name.slice(1);

  var khodamNames = [
    "Kadal Sakti",
    "Knalpot Racing",
    "Motor Supra",
    "Mio Karbu",
    "Harimau Putih", 
    "Lampu Tertidur", 
    "Panda Ompong", 
    "Bebek Karet", 
    "Ninja Turtle", 
    "Kucing Kulkas", 
    "Sabun Wangi", 
    "Semut Kecil", 
    "Moge Suzuki", 
    "Cupcake Pelangi", 
    "Robot Mini", 
    "Ikan Terbang", 
    "Ayam Goreng", 
    "Kecoa Terbang", 
    "Kambing Ngebor", 
    "Kerupuk Renyah", 
    "Celengan Babi", 
    "Lemari Tua", 
    "Kopi Susu", 
    "Sapu Lidi", 
    "Kuda Lumping", 
    "Sepatu Roda", 
    "Bola Pingpong", 
    "Lumba-lumba", 
    "Kucing Gemuk", 
    "Iguana Pink", 
    "Bantal Guling", 
    "Komputer Jadul", 
    "Kasur Empuk", 
    "Bola Bekel", 
    "Es Krim Pelangi", 
    "Biskuit Coklat", 
    "Nasi Padang", 
    "Roti Bakar", 
    "Sepeda Ontel", 
    "Sate Kambing", 
    "Kue Cubit", 
    "Bakso Urat", 
    "Es Kelapa", 
    "Siomay Bandung", 
    "Bajigur Hangat", 
    "Martabak Manis", 
    "Permen Karet", 
    "Pisang Goreng", 
    "Telur Dadar", 
    "Es Buah", 
    "Mie Goreng", 
    "Puding Coklat", 
    "Gulai Kambing", 
    "Kue Nastar", 
    "Krupuk Ikan", 
    "Es Teler", 
    "Rujak Buah", 
    "Soto Ayam",
    "Gesper",
    "Rantai Sepeda",
    "Kepala Charger",
    "Sapi Kurban",
    "Kosong",
  ];

  if (khodamData.hasOwnProperty(name)) {
    var khodamName = khodamData[name].khodamName;
    var khodamDescription = khodamData[name].khodamDescription;
    displayResult(name, khodamName, khodamDescription);
  } else {
    var randomNumber = Math.random();

    if (randomNumber < 0.1) {
      var khodamName = "Kosong";
      showFakeLoadingForEmptyKhodam(name);
    } else {
      var filteredKhodamNames = khodamNames.filter(function (name) {
        return name !== "Kosong";
      });

      var randomIndex = Math.floor(Math.random() * filteredKhodamNames.length);
      var khodamName = filteredKhodamNames[randomIndex];

      generateKhodamDescription(name, khodamName);
    }
  }
}

function showFakeLoadingForEmptyKhodam(name) {
  var emptyKhodamDescriptions = [
    "Wah, sepertinya khodam Anda sedang liburan di dimensi lain. Mungkin sedang selfie dengan hantu lokal!",
    "Hmm, khodam Anda tampaknya masih dalam proses pengiriman spiritual. Mungkin terjebak macet di jalan raya alam gaib.",
    "Khodam Anda saat ini masih dalam tahap pelatihan di akademi makhluk halus. Sabar ya, nanti juga lulus kok!",
    "Ups! Khodam Anda sepertinya tersesat di labirin astral. Tenang, GPS gaib sedang menuntunnya ke Anda.",
    "Khodam Anda sedang dalam perjalanan spiritual, mencari pencerahan di gunung mistis. semoga cepat kembali!",
    "Sepertinya khodam Anda masih malu-malu. Mungkin Anda perlu menyiapkan kue dan teh untuk menyambutnya?",
    "Khodam Anda sedang antri di kantor urusan makhluk gaib. Birokrasi di alam astral ternyata tidak jauh beda!",
    "Anda terlalu unik! Para khodam masih bingung memilih siapa yang cocok. Sabar, ya, casting khodam butuh waktu.",
    "Khodam Anda masih dalam proses kloning di lab gaib. Tenang, mereka sedang berusaha membuat yang terbaik untuk Anda!",
    "Anda tidak memiliki khodam, Khodam Anda masih dalam perjalanan ghaib menuju Anda",
  ];

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
    timer: 2000,
  }).then(() => {
    var randomIndex = Math.floor(Math.random() * emptyKhodamDescriptions.length);
    var khodamDescription = emptyKhodamDescriptions[randomIndex];
    khodamData[name] = {
      khodamName: "Kosong",
      khodamDescription: khodamDescription,
    };
    displayResult(name, "Kosong", khodamDescription);
  });
}

function generateKhodamDescription(name, khodamName) {
  var promptText =
    "Jelaskan khodam " +
    khodamName +
    " dalam Bahasa indonesia hanya 15 kata saja menggunakan lelucon dan berikan arti yang terlihat meyakinkan dengan mengaitkannya pada karakteristik hewan atau makhluk astral yang terkait dari nama " +
    name +
    ", contohnya jika khodamnya adalah Khodam kadal sakti maka contoh jawabanya kamu suka bersembunyi dengan cepat dan sangat lincah memikat hati wanita.";

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  axios
    .post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: promptText,
          },
        ],
        model: "mixtral-8x7b-32768",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
      }
    )
    .then(function (response) {
      var khodamDescription = response.data.choices[0].message.content.trim();
      khodamData[name] = {
        khodamName: khodamName,
        khodamDescription: khodamDescription,
      };
      displayResult(name, khodamName, khodamDescription);
      Swal.close();
    })
    .catch(function (error) {
      Swal.fire("Oops...", "Terjadi kesalahan saat meminta bantuan dari alam gaib. Silakan coba lagi nanti.", "error");
    });
}

function displayResult(name, khodamName, khodamDescription) {
  document.getElementById("output-name").textContent = name;
  document.getElementById("khodam-name").textContent = khodamName;
  document.getElementById("khodam-description").textContent = khodamDescription;
  document.getElementById("result").style.display = "block";
}
