let p = document.createElement('p');
const results = document.querySelector('.results');
results.appendChild(p);

let recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 5;

recognition.onresult = function (event) {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
    p.textContent = transcript;

    if (event.results[0].isFinal) {
        p = document.createElement('p');
        results.appendChild(p);
    }
};
recognition.addEventListener('end', recognition.start);
recognition.start();