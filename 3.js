
const user = {
    username: "ebiebi",
    email: "ebiebi@email.com",
    password: "abcd",
    dob: 20022012
}

function example1() {
    console.log("prosess 1");
    console.log("prosess 2");
    console.log("prosess 3");
    console.log("prosess 4");
}

function example2() {
    console.log("prosess 1");
    console.log("prosess 2");
    setTimeout(() => {
        console.log("prosess 3");
    }, 1000)
    console.log("prosess 4");
}

const getPassword = (cb) => {
    setTimeout(() => {
        return cb(user.password)
    }, 3000)
}

const getUsername = (cb) => {
    setTimeout(() => {
        return cb(user.username)
    }, 3000)
}

const getDob = () => {
    setTimeout(() => {
        return user.dob
    }, 3000)
}

const convertDob = () => {
    const dateBirth = getDob()
    console.log(dateBirth.toString());
}

const loginForm = (pass) => {
    const passDb = getPassword()
    if (pass == passDb) {
        console.log("login berhasil");
    } else {
        console.log("gagal login");
    }
}

const loginForm1 = (user, pass) => {
    getUsername((username) => {
        if (username != user) {
            console.log("username salah");
            return
        }

        getPassword((passDb) => {
            if (pass == passDb) {
                console.log("login berhasil");
            } else {
                console.log("gagal login, password salah");
            }
        })
    })
}


const getEmail = () => {
    return new Promise((resolve, reject) => {
        const err = true
        if (err) {
            reject("terjadi kesalahan")
        } else {
            setTimeout(() => {
                resolve(user.email)
            }, 2000)
        }
    })
}
// resolve(user.email) --> then()
// reject(error) --> catch()
// finally

getEmail().then((result) => {
    console.log("Then");
    console.log(result);
}).catch((err) => {
    console.log("catch");
    console.log(err);
})

async function checkEmail() {
    try {
        const email = await getEmail()
        console.log(email);
    } catch (err) {
        console.log("catch");
        console.log(err);
    } finally {
        console.log("finnaly");
    }
}

