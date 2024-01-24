function sayHello() {
    console.log("Hello");
}

const sayName = function (params) {
    console.log(`hello ${params}`);
}

const sayHello2 = (name, lang) => {
    if (lang == 'id') {
        console.log(`Halo ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

const perkalian = (param1, param2) => {
    return param1 * param2
}

const pembagian = function (a1 = 0, a2 = 0) {
    return a1 / a2
}

// getter and setter
const user = {
    name: null,
    setName: function (names) {
        this.name = names
    },
    getName: function () {
        return this.name
    }
}

// user.setName("putra")
// console.log(user.getName());

const arry = ["mangga", "duren", "apel"]
const num = 0
const names = "sss"



function sayHellos(name, cbfn) {
    const hasil = `Hello ${name}`
    cbfn(hasil)
}

function callback(hasil) {
    console.log(hasil);
}

sayHellos("taufik", callback)

sayHellos("taufik", (hasil) => {
    console.log(hasil);
})