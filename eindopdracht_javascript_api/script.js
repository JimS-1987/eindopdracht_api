const baseUrl = ("http://localhost:3000/")


async function Data() {

    const res = await fetch(baseUrl, {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },

    }).then(res => {
        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            return console.log(data)
        })
}
Data()


async function postData() {
    const post = { description: "buy oatmeal", done: false };
    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(dat),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => {
        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            return console.log(dat)
        });
}
postData()