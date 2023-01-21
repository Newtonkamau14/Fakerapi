var buttonload = document.getElementById('buttonload');
var addresslist = document.getElementById('addresslist')

async function getAddress(){
    const response = await fetch('/addressdata');
    const json = await response.json();
    const {street,streetName,buildingNumber,city,country} = json;
    var addressData = "";

    json.data.forEach(addressinfo => {
        
        addressData += `
            <div class="row">
                <div class="col-3>
                    <div class="card border shadow" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${addressinfo.street}${','}${addressinfo.streetName}</h5>
                        <p class="card-text">${addressinfo.buildingNumber}</p>
                        <p class="card-text">${addressinfo.city}</p>
                        <p class="card-text">${addressinfo.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    });

    addresslist.innerHTML += addressData;
}

window.addEventListener('load', function() {
    getAddress()
})