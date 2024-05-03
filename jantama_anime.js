const paiTyun = document.querySelector(".pai_tyun");
const paiHatu = document.querySelector(".pai_hatu");
const paiHaku = document.querySelector(".pai_haku");

function makeDot(dotDiv) {
    for (let i = 0; i < 264 ; i++) {
        const dot = document.createElement("div");
        dot.classList.add(`dot_${dotDiv.className}`);
        dotDiv.append(dot);
    }
}

makeDot(paiTyun);
makeDot(paiHatu);
makeDot(paiHaku);

function anime1(dotDiv) {
    let count12 = 0;
    let count6Top = 0;
    let count6Bottom = 4;
    let count6Middle = 3;
    setInterval(() => {
        const dot = document.querySelectorAll(`.dot_${dotDiv.className}`);
        function addBlack(i, count6) {
            const count = (12 * count6);
            if ((i > 12 + count && i < 23 + count) ||
            (i > 192 + count && i < 203 + count) ||
            (i >= 24 + count && i <= 180 + count && i % 12 === 0) ||
            (i >= 35 + count && i <= 191 + count && i % 12 === 11)) {
                dot[i].classList.add("black");
            }
        }
        for (let i = 0; i < dot.length; i++) {
            dot[i].classList.remove("black", "red", "green");
            if (dotDiv.className === "pai_tyun") {
                const count = (12 * count6Top);
                if ((i >= 74 + count && i <= 80 + count) ||
                (i >= 110 + count && i <= 116 + count) ||
                (i >= 41 + count && i <= 173 + count && i % 12 === 5) ||
                (i >= 74 + count && i <= 110 + count && i % 12 === 2) ||
                (i >= 80 + count && i <= 126 + count && i % 12 === 8)) {
                    dot[i].classList.add("red");
                }
                addBlack(i, count6Top);
            } else if (dotDiv.className === "pai_hatu") {
                const count = (12 * count6Bottom);
                if ((i >= 50 + count && i <= 54 + count) ||
                (i >= 78 + count && i <= 80 + count) ||
                (i >= 91 + count && i <= 93 + count) ||
                (i >= 98 + count && i <= 100 + count) ||
                (i >= 102 + count && i <= 104 + count) ||
                (i >= 122 + count && i <= 124 + count) ||
                (i >= 126 + count && i <= 128 + count) ||
                (i >= 138 + count && i <= 140 + count) ||
                (i >= 146 + count && i <= 148 + count) ||
                (i >= 170 + count && i <= 172 + count) ||
                (i === 56 + count || i === 69 + count || i === 64 + count ||
                i === 76 + count || i === 74 + count || i === 112 + count ||
                i === 116 + count || i === 134 + count || i === 152 + count ||
                i === 150 + count || i === 163 + count || i === 174 + count ||
                i === 86 + count || i === 87 + count || i === 176 + count ||
                i === 177 + count || i === 66 + count || i === 67 + count ||
                i === 160 + count)) {
                    dot[i].classList.add("green");
                }
                addBlack(i, count6Bottom);
            } else {
                addBlack(i, count6Middle);
            }
        }
        if (count12 === 11) {
            count12 = -1;
            count6Top = 0;
            count6Middle = 2;
            count6Bottom = 4;
        } else if (count12 >= 5) {
            count6Top--;
            count6Bottom++;
        } else {
            count6Top++;
            count6Bottom--;
        }
        if (count12 >= 2 && count12 <= 7) {
            count6Middle--;
        } else {
            count6Middle++;
        }
        count12++;
    }, 200)
}

anime1(paiTyun);
anime1(paiHatu);
anime1(paiHaku);
