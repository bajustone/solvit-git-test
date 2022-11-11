let listOfTraines = [
    {
        name: "Ange",
        stack: "Django"
    },
    {
        name: "Bella",
        stack: "Laravel"
    },
    {
        name: "Daniela",
        stack: "Harambee"
    },
    {
        name: "Someone else",
        stack: "React"
    }
];

let ourHTML = "";

const ol = document.getElementById("listOfTrainees");

listOfTraines.forEach((item, index)=>{
    const text = `<li>Name: ${item.name}</li>`;
    ourHTML = ourHTML + text; 
});
ol.innerHTML = ourHTML;






