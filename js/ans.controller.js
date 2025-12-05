'use strict'

function onAsk() {
    document.querySelector('.ans').classList.remove('show')    
    document.querySelector('.loading').hidden = false    
    getAns(renderAns)
}

function renderAns(ans) {
    console.log('ans is:', ans)
    document.querySelector('.ans h2').innerText = (ans.answer === 'yes') ? 'כן!' : 'לא...'
    document.querySelector('.ans img').src = ans.image    
}

function onImgReady() {
    document.querySelector('.ans').classList.add('show')    
    document.querySelector('.loading').hidden = true    
}