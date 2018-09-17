function loadFile(event) {
    var output = document.getElementById('imgOutput');
    output.src = URL.createObjectURL(event.target.files[0]);
    setTimeout("javascript:location.href='detail.html'", 1000); // for demo: redirect to valuation page
}

function redirectToValuationPage(){
    window.location.href='valuation.html';
}