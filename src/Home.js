const text = document.getElementById("text");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
btn1.style.display = 'none';

let isRecording = false;
let recognition;

const handleRecord = () => {
    if (!isRecording) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onstart = () => {
            btn.textContent = 'Stop Recording...';
            isRecording = true;
        };
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            text.textContent += transcript + ' ';
        };
        recognition.onend = () => {
            if (isRecording) {
                recognition.start();
                btn1.style.display = 'block';
              
                console.log(btn1)
                if (text.length > 0) {
                    text.classList.add("border-4 border-t-black")
                } 
                //else {
                //     btn1.style.display = 'none';
                //     text.classList.remove("dtext")
                // }

            } else {
                btn.textContent = 'Record Voice';
            }
        };
        text.textContent = '';
        // Clear previous text when starting a new recording
        recognition.start();
        text.classList.remove("dtext");
        btn1.style.display = 'none';
    } else {
        isRecording = false;
        recognition.stop();
    }
};

const handleCopy = () => {
    console.log(btn1.innerHTML)
    setTimeout(() => {
        btn1.innerHTML = "Copied Record"
    }, 1000);
    setTimeout(() => {
        btn1.innerHTML = "Copy text"
    }, 6000);
    // let newtext1 = text.select();
    // console.log(newtext1)
    const range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeRange(range);
};

const handleDownload = () => {
    console.log()
}