// fetch("https://northwind.vercel.app/api/customers/").then(function (response) {
//     return response.json()
// }).then(function (data) {

//         const tBody = document.getElementsByTagName("tbody")[0]
//     for (let i = 0; i < data.length; i++) {

//         const trData = document.createElement("tr");
//         const tdId = document.createElement("td");
//         const tdCompanyName = document.createElement("td");
//         const tdContactName = document.createElement("td");
//         const tdContactTitle = document.createElement("td");
//         const tdAddress = document.createElement("td");

//         let inf = {
//             str : data[i].address.street,
//             cntr : data[i].address.country
//         }
//         tdId.textContent = data[i].id
//         tdCompanyName.textContent = data[i].companyName
//         tdContactName.textContent = data[i].contactName
//         tdContactTitle.textContent = data[i].contactTitle
//         tdAddress.textContent = inf.cntr +", " +inf.str

//         trData.append(tdId, tdCompanyName, tdContactName, tdContactTitle, tdAddress)

//         tBody.appendChild(trData)
//     }

// })

axios("https://northwind.vercel.app/api/customers/").then(function (elements) {
    
    const tBody = document.getElementsByTagName("tbody")[0]
    
    for (let i = 0; i < elements.data.length; i++) {
        
        const trData = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdCompanyName = document.createElement("td");
        const tdContactName = document.createElement("td");
        const tdContactTitle = document.createElement("td");
        const tdAddress = document.createElement("td");

        let inf = {
            str: elements.data[i].address.street,
            cntr: elements.data[i].address.country
        }
        tdId.textContent = elements.data[i].id
        tdCompanyName.textContent = elements.data[i].companyName
        tdContactName.textContent = elements.data[i].contactName
        tdContactTitle.textContent = elements.data[i].contactTitle
        tdAddress.textContent = inf.cntr + ", " + inf.str

        trData.append(tdId, tdCompanyName, tdContactName, tdContactTitle, tdAddress)

        tBody.appendChild(trData)
    }
})

