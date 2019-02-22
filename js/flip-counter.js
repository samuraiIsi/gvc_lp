var jackPotHttps = new XMLHttpRequest();
var urljackPot = "feeds/json/PartyCasinoJackpotsGBP.js";

jackPotHttps.onreadystatechange = function() {
    if (jackPotHttps.readyState == 4 && jackPotHttps.status == 200) {
        var data = JSON.parse(jackPotHttps.responseText);
        for (var i = 0; i < data['PartyCasino Jackpots json feed'].length; i++) {
            if (data['PartyCasino Jackpots json feed'][i].jackpotName == 'Big Series') {
                tick(data['PartyCasino Jackpots json feed'][i].jackpotValue.split('.')[0]);
            }
        }

    }
};

jackPotHttps.open("GET", urljackPot, true);
jackPotHttps.send();

function flip(newValue, oldValue, pos) {

    var ticker = document.getElementById('jackpot-ticker');
    var digit = ticker.getElementsByClassName('pos-' + pos)[0];
    var front = digit.getElementsByClassName('front')[0];
    var back = digit.getElementsByClassName('back')[0];
    var under = digit.getElementsByClassName('under')[0];
    var flap = digit.querySelectorAll('.flap');
    var base = digit.getElementsByClassName('base')[0];

    digit.dataset['num'] = newValue;
    front.dataset['content'] = oldValue;
    back.dataset['content'] = newValue;
    under.dataset['content'] = newValue;
    for (var i = 0; i < flap.length; i++) {
        flap[i].style.display = 'block';
    }

    setTimeout(function() {
        base.innerHTML = newValue;
        for (var j = 0; j < flap.length; j++) {
            flap[j].style.display = 'none';
        }
    }, 350);
}

function update(newValue, oldValue) {

    for (var i = oldValue.length; i > 0; i--) {

        if (newValue[i] !== oldValue[i]) {

            flip(newValue[i], oldValue[i], i);
        }
    }
}

function render(jackpot) {

    var ticker = document.getElementById('jackpot-ticker');

    for (var i = 0; i < jackpot.length; i++) {

        ticker.innerHTML +=
            '<div class="digit pos-' + i + '" data-num="' + jackpot[i] + '">' +
            '<span class="base">' + jackpot[i] + '</span>' +
            '<div class="flap over front"></div>' +
            '<div class="flap over back"></div>' +
            '<div class="flap under"></div>' +
            '</div>';
    }
}

function tick(jackpot) {

    render(jackpot.toString());

    jackpotTickerInterval = setInterval(function() {

        var oldValue = (jackpot).toString();
        var newValue = (parseInt(oldValue) + 1).toString();
        jackpot = newValue;

        (jackpot.length === oldValue.length) ?
        update(jackpot, oldValue):
            clearInterval(jackpotTickerInterval);
    }, 1000);
}