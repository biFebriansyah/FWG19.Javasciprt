// ! Variable
const namaProducts = "indomie"
const hargaProducts = 3000


//! tipe data
const namaUser = "antonio"
const noHp = 85222
const isMarried = false
const wfie = undefined
const child = null

const buah = ["mangga", "durian", false]
const user = {
    nama: "ebi",
    email: "ebiebi@email.com"
}


const umur = 19

if (umur > 20) {
    console.log("anda sudah dewasa");
} else if (umur > 10 && umur < 20) {
    console.log("anda masih remaja");
} else {
    console.log("anda masih muda");
}

const gender = "P"

switch (gender) {
    case "P":
        console.log();
        break
    case "W":
        console.log("");
        break
    default:
        console.log("");
}

const hasil = umur > 20 ? "anda sudah dewasa" : "anda masih muda";

const emailVerif = undefined
const isRegister = emailVerif || "belum register"


for (let x = 0; x < 10; x++) {
    // console.log("hallo " + x);
}

const arrBuahan = ["mangga", "duren", "appel"]
for (let i = 0; i <= arrBuahan.length - 1; i++) {
    // console.log(arrBuahan[i]);
}

// String Literals

const hobi = "nonton"
const cetak = `saya suka ${hobi}`

// console.log(cetak);


const arrBuahan2 = [...arrBuahan, "anggur", "nenas"]
const makanan = {
    nama: "siomay",
    harga: 200
}

const makanBaru = { ...makanan, harga: 3000 }

const arrBuahan3 = ["mangga", "duren", "appel"]
console.log(arrBuahan3[1]);

const mobil = {
    nama: "inova",
    brand: "",
    price: 100
}

const student = {
    firstName: "Grad",
    lastName: "lynda"
}

// const firstName = student.firstName
// const lastName = student.lastName

const { firstName, lastName, } = student