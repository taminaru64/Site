var api_url = 'https://script.google.com/macros/s/AKfycbw8t_bKFA6eqoSRiImVThhka8CfN4gYOdmtkqTn1CHe5DZ1ELpKTysFZPSbq3nLfStE/exec';

fetch(api_url)
.then(function (fetch_data) {
    return fetch_data.json();
})
.then(function (json) {
    for (var i in json) {
        var base_element = document.getElementsByClassName('game-info js-based');
        var clone_element = base_element[0].cloneNode(true);
        clone_element.classList.remove('js-based');

        clone_element.querySelector('img').setAttribute( 'src', json[i].image );
        clone_element.querySelector('img').setAttribute( 'alt', json[i].name );
        clone_element.querySelector('.name').textContent = json[i].name;
        clone_element.querySelector('.text').textContent = json[i].text;
        clone_element.querySelector('.url1').setAttribute( 'href', json[i].url1 );
        clone_element.querySelector('.url2').setAttribute( 'href', json[i].url2 );
        clone_element.querySelector('.url3').setAttribute( 'href', json[i].url3 );

        base_element[0].parentNode.appendChild(clone_element);
    }
    document.getElementsByClassName('loading')[0].remove();
});