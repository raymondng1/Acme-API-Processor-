const grabCompanies = () => new Promise((res, rej) => {
    // can change url to /api/products, /api/offerings for the other ones
    return window.fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
            .then(response => response.json())
            .then(jsonData => res(jsonData))
            .catch(e => rej(e));
})

const grabProducts = () => new Promise((res, rej) => {
    // can change url to /api/products, /api/offerings for the other ones
    return window.fetch('https://acme-users-api-rev.herokuapp.com/api/products')
            .then(response => response.json())
            .then(jsonData => res(jsonData))
            .catch(e => rej(e));
})

// let products = grabProducts();
// console.log(products)

const grabOfferings = () => new Promise((res, rej) => {
    // can change url to /api/products, /api/offerings for the other ones
    return window.fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
            .then(response => response.json())
            .then(jsonData => res(jsonData))
            .catch(e => rej(e));
})

//Template - 
// const [companies, products, offerings] = responses.map(response => response.data);

// const promise1 = grabCompanies();
// const promise2 = grabProducts ();
// const promise3 = grabOfferings();

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

//Sample Question / Solution 
// const companiesByState = (companies,state) => companies.filter(company => company.state === state);

// grabCompanies().then(companies => {
//     const companiesInTexas = companiesByState(companies,'Texas');
//     console.log(companiesInTexas)
// }).catch(err => console.log(err)) 


// returns products within a price range 
// const findProductsinPriceRange = (products,priceObj) => {
//     const minValue = priceObj.min;
//     const maxValue = priceObj.max;
    
//     return products.filter(product => product.suggestedPrice > minValue && product.suggestedPrice < maxValue)
//     .map(product => product.name).join(' ')
    
// }


// grabProducts().then(products=>{
//     const productsInPriceRange = findProductsinPriceRange(products,{min:1, max:15});
//     console.log(productsInPriceRange)
// })


//returns object where key is first letter of company name 
//value for each key is the array of those companies in that state 



// const groupCompaniesByLetter = (companies) => {
//     return companies.reduce((object, company) => {
//         object[company.name[0]] = [...object[company.name[0]] || [], company.name];
//         return object;
//        }, {});
// }

// grabCompanies().then(companies=> {
//     const groupedCompaniesByLetter = groupCompaniesByLetter(companies);
//     console.log(groupedCompaniesByLetter)
// })



//returns object where key is a state
//value for erach key is the array of those companies in that state 

// const groupCompaniesByState = (companies)=> {
//     return companies.reduce((object, company) => {
//         object[company.state] = [...object[company.state] || [], company.name];
//         return object;
//        }, {});
// }

// grabCompanies().then(companies=>{
//     const groupedCompaniesByState = groupCompaniesByState(companies);
//     console.log(groupedCompaniesByState)
// })


const promise1 = grabCompanies();
const promise2 = grabProducts ();
const promise3 = grabOfferings();

// const processOfferings = (companies,products,offerings) => {
//     //need to clean this up due D.R.Y principle
//     let temp = [];
//     let result = [];

//     offerings.forEach(offering => {
//         companies.forEach(company => {
//         if (offering.companyId === company.id) {
//             temp.push({ ...offering, ...company})
//             };
//         });
//     });

//     temp.forEach(temp => {
//         products.forEach(product => {
//             if (temp.productId === product.id) {
//                 result.push({ ...temp, ...product})
//             };
//         });
//     });
//     return result;
// };

// //returns an array of the offerings with each offering having a company and product

// Promise.all([promise1, promise2, promise3]).then(data  => {
//     const companies = data[0];
//     const products = data[1];
//     const offerings = data[2];
//     const processedOfferings = processOfferings(companies,products,offerings);
//     console.log(processedOfferings)
// })


const companiesByNumberOfferings = (companies,offerings,num) =>{
    let offeringsByCompany = [];

    offerings.forEach(offering => {
        companies.forEach(company => {
        if (offering.companyId === company.id) {
            offeringsByCompany.push({ ...offering, ...company})
            };
        });
    });

    let names = offeringsByCompany.map(offering=> offering.name)
    .sort()
    // .filter((value, index, arr) => arr.indexOf(value) === index)
    console.log(names)
    // offeringsByCompany.filter()
}

Promise.all([promise1, promise3]).then(data =>{
    const companies = data[0];
    const offerings = data [1];
    const threeOrMoreOfferings = companiesByNumberOfferings(companies,offerings,3);
    console.log(threeOrMoreOfferings)
})


