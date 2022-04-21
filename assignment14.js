// Problems 1 & 2

let company = {

  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "members": [
    {
      "firstname": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": "40000",
      "raiseeligible": true,

    },
    {
      "firstname": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": "18500",
      "raiseeligible": true,
    },
    {
      "firstname": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": "21200",
      "raiseeligible": false,

    }
  ]
}
console.log("Problem1");
console.log(company.members);

console.log("Problem 2");
console.log(company);


// Problem 3: add function to add new employee

function addEmployee(obj, name, discipline, role, pay, raise) {
  let employee = {
    "firstname": name,
    "department": discipline,
    "designation": role,
    "salary": pay,
    "raiseeligible": raise,
  };

  obj['members'].push(employee); // the push() method adds a value to an object/array.

}

addEmployee(company, "Anna", "Tech", "Executive","25600", false);

// Problem 4

console.log("Problem 4");
console.log(40000+18500+21200+25600);

// Function to populate header

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['companyName'];
  console.log(myH1);
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  // We use the `` (top left of keyboard) to indicate strings.
  // You could also concatenate using + signs
  // Like 'Hometown: ' + obj['homeTown'] + '// Formed: ' + obj['formed']
  myPara.textContent = `Website: ${obj['website']}`;

  header.appendChild(myPara);
}

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const employees = obj['members'];

  for (const employee of employees) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = employee.firstname;
    myPara1.textContent = `Department: ${employee.department}`;
    myPara2.textContent = `Designation: ${employee.designation}`;
    myPara3.textContent = `Salary: $${employee.salary}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

//populateHeader(company);
//populateEmployees(company);
