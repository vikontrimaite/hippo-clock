function getTheDate() {
    let dateNow = new Date();

    let year = dateNow.getFullYear();
    let month = dateNow.getMonth() + 1;
    let day = dateNow.getDate();
    let hour = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let milisecs = dateNow.getMilliseconds();

    document.getElementById('year').innerHTML = `Year of ${year}`;
    document.getElementById('month').innerHTML = `${month} month`;
    document.getElementById('day').innerHTML = `${day} day`;
    document.getElementById('hour').innerHTML = `${hour} hour`;
    document.getElementById('minutes').innerHTML = `${minutes} minutes`;
    document.getElementById('seconds').innerHTML = `${seconds} seconds`;
    document.getElementById('milisecs').innerHTML = `${milisecs} miliseconds`;
}

function showDate() {
    dateCont = document.getElementById('dateCont');
    dateCont.className = 'container';

    hideBtn = document.getElementById('hiddenButton');
    hideBtn.className = 'hideButton';

    tip = document.getElementById('tipParagr');
    tip.className = 'tip';
}

function hideDate() {
    dateCont = document.getElementById('dateCont');
    dateCont.className = 'hide';

    hideBtn = document.getElementById('hiddenButton');
    hideBtn.className = 'hide';

    clickHippo = document.getElementById('clickableHippo');
    clickHippo.className = 'clickHippo';

    tip = document.getElementById('tipParagr');
    tip.className = 'hide';
}

function moreImg() {
    let element = document.getElementById('hippoDiv');
    element.insertAdjacentHTML('afterend', `<img src="./img/hippo.png" alt="This is hippo!" id="hippo" onclick="moreImg()">`);
}

// calling function
getTheDate();
