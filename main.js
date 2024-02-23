const json = {}
const url = "./usuarios.json"


fetch(url)
.then(resp => resp.json())
.then(data => console.log(data))
//.then()


