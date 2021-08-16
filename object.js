// Nomor 1
let kucing ={
    nama :"Kucing",
    kaki :"4",
    spesies :"Mamalia",
    warna:["grey", "black", "white"],
    makanan: ["Ikan","Daging"],
    keahlian: () => {
        return "Melompat";
    },
};

console.log("Nama : ", kucing.nama);
console.log("Kaki : ", kucing.kaki);
console.log("Spesies : ", kucing.spesies);
console.log("Warna : ", kucing.warna[0],",",kucing.warna[1],",",kucing.warna[2]);
console.log("Makanan : ", kucing.makanan[0],"&", kucing.makanan[1]);
console.log("Keahlian : ", kucing.keahlian());

// Nomor 2
const data = [
    {
        name : "Alpha",
        class : "Dragon",
        club : ["Bola", "Bulutangkis"],
    },
    {
        name : "Beta",
        class : "Lizard",
        club : ["Membaca", "Bulutangkis"],
    },
];

console.log(data[0].name + " ada di kelas " + data[0].class + " dia mengikuti " + data[0].club);
console.log(data[1].name + " ada di kelas " + data[1].class + " dia mengikuti " + data[1].club);


// nomor 3
let todos = [
    {id : 1, todo : "belajar coding"},
    {id : 2, todo: "nanti tidur"},
];

function printAll(){
    for (let i= 0; i < todos.length; i++){
        console.log(todos[i]);
    }
}

function printById(id){
    return todos [id-0].todo;
}

function add(newTodo) {
    todos.push({
        id : todos.length+ 1,
        todo: newTodo,
    });

    return todos;
}

function hapus(id){
    todos.splice(id - 1, 1);

    return todos;
}

objIndex = todos.findIndex((obj =>obj.id == 1));
todos[objIndex].todo="Belajar CRUD"
 
printAll();
console.log("Print By ID :", printById(1));
console.log("Add : ", add("ngerjain tugas"));
console.log("Hapus :", hapus(2));
console.log("Updated: ",todos[objIndex]);

// nomor 4
let buah =[
    {
    pic : 'buah/an_vision-unsplash-apple.jpg',
    name : 'Apple',
    color : 'Red',
    family : 'Rosaceae',
    species : 'M. domestica'
    },
    {
    pic : 'buah/charles-deluvio-unsplash-mango.jpg',
    name : 'Mango',
    color : 'green',
    family : 'Maangifera',
    species : 'M. indica'
    },
    {
    pic : 'buah/han-lahandoe-unsplash-lemon.jpg',
    name : 'Lemon',
    color : 'Yellow',
    family : 'Rutaceae',
    species : 'citrus lemon'
    },
    {
    pic : 'buah/jocelyn-morales-unsplash-cherry.jpg',
    name : 'Cherry',
    color : 'Red',
    family : 'Rosaceae',
    species : 'Prunus Avium'
    },
    {
    pic : 'buah/marcos-ramirez-unsplash-orange.jpg',
    name : 'Orange',
    color : 'oranye',
    family : 'Rutaceae',
    species : 'Citrus sinensis'
    },
    {
    pic : 'buah/nao-xotl-unsplash-banana.jpg',
    name : 'Mango',
    color : 'Red',
    family : 'Musaceae',
    species : 'M. acuminata'
    },
    {
    pic : 'buah/rich-smith-unsplash-pear.jpg',
    name : 'Pear',
    color : 'White',
    family : 'Rosaceae',
    species : 'Pyrus communis'
    },
    {
    pic : 'buah/yulia-khlebnikova-unsplash-blueberry.jpg',
    name : 'Bluebberry',
    color : 'Blue',
    family : 'Ericaceae',
    species : 'vaccinium'
    },
]

let objectBuah = document.getElementById("objectbuah");

for (let i = 0; i < buah.length; i++){
   let fruit= buah;
   objectBuah.innerHTML += `<div class= "container">
   <div class="containerimage"> <img src = ${fruit[i].pic}> </div>

   <div class="containerfeature">
   <h2>${fruit[i].name}</h2>
   <ul><li>Color:${fruit[i].color}</li>
   <li>Family:${fruit[i].family}</li>
   <li>Species:${fruit[i].species}</li></ul></div>
   </div>`;
//    console.log(fruit[i].pic);
}