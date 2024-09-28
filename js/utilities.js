function donate(currentDonation, receivedDonation){
    let totalAmount = Number(document.getElementById('totalAmount').innerText);
    if(totalAmount < receivedDonation || isNaN(receivedDonation) || receivedDonation <= 0){
        alert('Invalid Donation Amount');
        return;
    }
    const remainAmount = totalAmount - receivedDonation;
    document.getElementById('totalAmount').innerText = remainAmount;

    return currentDonation + receivedDonation;

}

document.getElementById('page').addEventListener('click', function(event) {
    const buttons = document.getElementsByClassName('button');
    
    if (event.target.tagName === 'BUTTON') {
        for (let item of buttons) {
            item.style.backgroundColor = '#F9F7F3';
        }
        event.target.style.backgroundColor = '#B4F461';
    }
});

function showPage(id){
    let allPages = document.getElementsByTagName('main');

    for (let page of allPages){
        page.classList.add('hidden');
    }
    document.getElementById(id).classList.remove('hidden');
}
