//1.for the given json iterate over all loops(for,foreach,for in,for of)

let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
//for
console.log('for loop output')
for(let i=0;i<object.length;i++){
    console.log(`
    Person: ${object[i].person}
    age: ${object[i].age}
    company: ${object[i].company}
    `)
}


console.log('foreach output')
object.forEach(data=>{
    console.log(`
    Person: ${data.person}
    age: ${data.age}
    company: ${data.company}
    `)
})

console.log('for in  output')
for(data in object){
    console.log(`
    Person: ${object[data].person}
    age: ${object[data].age}
    company: ${object[data].company}
    `)
}
console.log('for of  output')
for(data of object){
    console.log(`
    Person: ${data.person}
    age: ${data.age}
    company: ${data.company}
    `)
}



// for loop output

//     Person: John     
//     age: 30
//     company: Google  


//     Person: Mohn     
//     age: 37
//     company: Flipkart


//     Person: Kohn     
//     age: 38
//     company: Amazon  


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// foreach output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple


// C:\Users\smannike\Desktop\guvi_class>node forloops_task.js
// for loop output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// foreach output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// for in  output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple


// C:\Users\smannike\Desktop\guvi_class>node forloops_task.js
// for loop output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// foreach output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// for in  output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple

// for of  output

//     Person: John
//     age: 30
//     company: Google


//     Person: Mohn
//     age: 37
//     company: Flipkart


//     Person: Kohn
//     age: 38
//     company: Amazon


//     Person: Sohan
//     age: 40
//     company: Myntra


//     Person: Jenny
//     age: 70
//     company: Apple
