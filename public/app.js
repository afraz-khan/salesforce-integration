const productItemsBtn = document.getElementById('productItems');
const loading = document.getElementsByClassName('loading');
const loadingTxt = loading[0];
const loadingTxt2 = loading[1];
const productItemsTable = document.getElementsByClassName('productItems')[0];
const tableTbody = productItemsTable.getElementsByTagName('tbody')[0];
const quantityBtn = document.getElementsByClassName('quantityBtn')[0];
const quantity = document.getElementById('productQuantity');
const productItemNum = document.getElementById('productItemNum');

productItemsBtn.onclick = getProductItems;
quantityBtn.onclick = getProductQuantity;

async function getProductItems(){
    tableTbody.innerHTML = null;
    if(productItemsTable.style.display === 'inline'){
        productItemsTable.style.display = 'none'
    }
    loadingTxt.style.display = 'inline';

    try {
        let data = await fetch('/productItems', {
            method: 'GET'
        });
        const status = data.status;
        data = await data.json();
        if(status === 500){
            throw new Error(`Server Error: "${data}"`);
        }

        appendTable(data);
        loadingTxt.style.display = 'none';
        productItemsTable.style.display = 'inline';
        productItemsTable.scrollIntoView();
    } catch (error) {
        console.error(error);
        alert(`${error.message}\nRefresh page or open browser console to see the error.`);
        loadingTxt.style.display = 'none';
        productItemsTable.style.display = 'none';
    }
};

async function getProductQuantity() {
    const num = productItemNum.value;
    if(!num){
        alert('Please enter valid product item number.');
        return;
    }
    if(quantity.style.display === 'inline'){
        quantity.style.display = 'none'
    }
    loadingTxt2.style.display = 'inline';

    try {

        let data = await fetch(`/productItems/${num}`, {
            method: 'GET'
        });
        const status = data.status;
        data = await data.json();
        if(status === 500){
            throw new Error(`Server Error: "${data}"`);
        }

        quantity.getElementsByTagName('span')[0].innerHTML = data.quantity;
        loadingTxt2.style.display = 'none';
        quantity.style.display = 'inline';
        quantity.scrollIntoView();
    } catch (error) {
        console.error(error);
        alert(`${error.message}\nRefresh page or open browser console to see the error.`);
        loadingTxt2.style.display = 'none';
        quantity.style.display = 'none'
    }
}

function appendTable(productItems){
    
    let i = 0;
    productItems.forEach(item => {
        i++;
        const row = tableTbody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = i;
        cell2.innerHTML = item['ProductName'];
        cell3.innerHTML = item['ProductItemNumber'];
    });
    return;
}