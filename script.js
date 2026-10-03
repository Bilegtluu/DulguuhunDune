
function hideAll() {
    document.getElementById("home").style.display = "none";
    document.getElementById("surprise").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("flowers").style.display = "none";
    document.getElementById("cake").style.display = "none";
}


// HOME → SURPRISE

function openSurprise() {
    hideAll();

    document.getElementById("surprise").style.display = "block";
}


// SURPRISE → LETTER

function openLetter() {
    document.getElementById("surprise").style.display = "none";
    document.getElementById("letter").style.display = "block";

    const message = document.getElementById("letter-message");

    const text = `Төрсөн өдрийн мэнд хүргэе ээ! 🎂🤍

Танилцаад ердөө 1 сар болж байгаа ч яг л танилцаад удсан юм шиг тухтай санагддаг шүү хаха. 😂 Богинохон хугацаанд ч гэсэн чамтай танилцаж, ярилцаж, хамт инээж байгаа маань надад их гоё санагддаг.

Одоо 22 нас хүрч байгаа болохоор энэ нас чинь чамд маш олон гоё дурсамж, аз жаргалтай мөчүүд авчраасай. Хүссэн зүйлс чинь бага багаар биелж, өдөр бүр инээх шалтгаан ихтэй байгаасай. 🫶🏻

Бас цаашдаа бид хоёрын танилцсан энэ 1 сар зүгээр нэг “1 сар” байгаад дуусахгүй, илүү олон гоё дурсамжийн эхлэл болоосой гэж хүсэж байна. 🤍

Ямартай ч 22 насны төрсөн өдрийн мэнд! 🎉
Өнөөдөр ёстой гоё өнгөрүүлээрэй. Харин бэлэг нэхээд хэрэггүй шүү, танилцаад дөнгөж 1 сар болж байна шд хаха 😂🎁`;

    message.textContent = "";

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            message.textContent += text[i];
            i++;
            setTimeout(typeWriter, 30);
        }
    }

    typeWriter();
}


// LETTER → ENVELOPE OPEN

function openEnvelope(element) {
    element.classList.toggle("open");
}


// LETTER → BACK

function closeLetter() {
    hideAll();

    document.getElementById("surprise").style.display = "block";
}


// SURPRISE → FLOWERS

function openFlowers() {
    hideAll();

    document.getElementById("flowers").style.display = "block";
}


// FLOWERS → BACK

function closeFlowers() {
    hideAll();

    document.getElementById("surprise").style.display = "block";
}


// SURPRISE → CAKE

function openCake() {
    hideAll();
    document.getElementById("cake").style.display = "block";

    setTimeout(() => {
        startCountdown();
    }, 2000);
}

function startCountdown() {
    const countdown = document.getElementById("countdown");
    const cakeImage = document.getElementById("cake-image");
    const message = document.getElementById("cake-message");

    let number = 3;

    function showNumber(num) {
        countdown.classList.remove("bounce");

        // animation дахин ажиллуулах
        void countdown.offsetWidth;

        countdown.textContent = num;
        countdown.classList.add("bounce");
    }

    showNumber(number);

    const timer = setInterval(() => {

        number--;

        if (number > 0) {
            showNumber(number);
        }

        if (number === 0) {
            clearInterval(timer);

            countdown.classList.remove("bounce");
            countdown.textContent = "💨";
            countdown.classList.add("bounce");

            setTimeout(() => {
              cakeImage.src = "Cake.png";
              countdown.textContent = "";

              createFireworks();

              message.textContent = "Хүсэл нь биелээсэй 🤍✨";
            }, 1500);
        }

    }, 1500);
}


// CAKE → BACK

function closeCake() {
    hideAll();

    document.getElementById("surprise").style.display = "block";
}
function checkPassword() {

    const input =
        document.getElementById("password-input");

    const message =
        document.getElementById("password-message");

    const password =
        input.value;

    if (password === "1005") {

        document.getElementById(
            "password-screen"
        ).style.display = "none";

    } else {

        message.innerHTML =
            "Hint 💡<br>Dulguun хэдэн сарын хэдэнд төрсөн бэ?";

        input.value = "";

        input.focus();
    }
}
document.getElementById("password-input")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });



function createFireworks() {
    const container = document.createElement("div");
    container.className = "fireworks";

    document.body.appendChild(container);

    // Олон удаа салют буудна
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createFirework(container);
        }, i * 400);
    }

    // 5 секундийн дараа бүгдийг цэвэрлэнэ
    setTimeout(() => {
        container.remove();
    }, 5500);
}


function createFirework(container) {

    // Дэлгэцийн хаана дэлбэрэхийг random болгоно
    const x = Math.random() * window.innerWidth;
    const y = 10 + Math.random() * (window.innerHeight * 0.65);

    const explosion = document.createElement("div");

    explosion.className = "firework-explosion";

    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;

    container.appendChild(explosion);

    // Нэг салютаас олон particle
    for (let i = 0; i < 70; i++) {

        const particle = document.createElement("span");

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 220;

        const px = Math.cos(angle) * distance;
        const py = Math.sin(angle) * distance;

        particle.style.setProperty("--x", `${px}px`);
        particle.style.setProperty("--y", `${py}px`);

        explosion.appendChild(particle);
    }

    setTimeout(() => {
        explosion.remove();
    }, 1800);
}