const people = [
    { name: "Mariam", age: 20, city: "Cairo" },
    { name: "Ahmed", age: 22, city: "Giza" },
    { name: "Sara", age: 19, city: "Alexandria" },
    { name: "Omar", age: 25, city: "Cairo" },
    { name: "Nour", age: 21, city: "Giza" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function displayPeople(peopleToDisplay) {

   
    tableBody.replaceChildren();

   
    noResults.hidden = peopleToDisplay.length !== 0;

    peopleToDisplay.forEach(function(person) {

       
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;

   
        const ageCell = document.createElement("td");
        ageCell.textContent = person.age;

       
        const cityCell = document.createElement("td");
        cityCell.textContent = person.city;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(cityCell);

        tableBody.appendChild(row);
    });
}
displayPeople(people);

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase().trim();

    const filteredPeople = people.filter(function(person) {

        return (
            person.name.toLowerCase().includes(searchText) ||
            person.city.toLowerCase().includes(searchText)
        );

    });

    displayPeople(filteredPeople);

});
