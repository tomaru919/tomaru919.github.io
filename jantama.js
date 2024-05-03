const charList = [{name: "藤田佳奈", have: false}, {name: "三上千織", have: false}, {name: "相原舞", have: false}, {name: "撫子", have: false},
{name: "八木唯", have: false}, {name: "九条璃雨", have: false}, {name: "ジニア", have: false}, {name: "カーヴィ", have: false},
{name: "サラ", have: false}, {name: "二之宮花", have: false}, {name: "白石奈々", have: false}, {name: "小鳥遊雛田", have: false},
{name: "五十嵐陽菜", have: false}, {name: "涼宮杏樹", have: false}, {name: "北見紗和子", have: false}, {name: "雛桃", have: false},
{name: "藤本キララ", have: false}, {name: "かぐや姫", have: false}, {name: "エリサ", have: false}, {name: "寺崎千穂理", have: false},
{name: "福姫", have: false}, {name: "七海礼奈", have: false}, {name: "姫川響", have: false}, {name: "森川綾子", have: false},
{name: "小野寺七羽", have: false}, {name: "ゆず", have: false}, {name: "四宮冬実", have: false}, {name: "セイラン", have: false},
{name: "如月彩音", have: false}, {name: "未来", have: false}, {name: "嵐星", have: false}, {name: "ハンナ", have: false},
{name: "イブ・クリス", have: false}, {name: "琳琅", have: false}];

const itemList = [{name: "和了演出:爆炎", have: false}, {name: "和了演出:烈風", have: false}, {name: "和了演出:桜吹雪", have: false},
{name: "和了演出:黒炎", have: false}, {name: "和了演出:炎の嵐", have: false}, {name: "和了演出:電子", have: false},
{name: "和了演出:赤い薔薇", have: false}, {name: "和了演出:ドットK.O.", have: false}, {name: "和了演出:逆鱗", have: false},
{name: "和了演出:ゴースト", have: false}, {name: "和了演出:ブラックホール", have: false}, {name: "和了演出:切り裂き", have: false},
{name: "和了演出:水の道", have: false}, {name: "和了演出:青炎", have: false}, {name: "和了演出:凍結", have: false},
{name: "和了演出:火焔", have: false}, {name: "和了演出:残影", have: false}, {name: "和了演出:羽", have: false},
{name: "和了演出:ドットコイン", have: false}, {name: "和了演出:龍舞", have: false}, {name: "和了演出:コウモリ", have: false},
{name: "和了演出:ねこのサイン", have: false}, {name: "和了演出:心の鎌", have: false}, {name: "和了演出:雪玉転がし", have: false},
{name: "にぼしの立直棒", have: false}, {name: "ねぎの立直棒", have: false}, {name: "骨の立直棒", have: false},
{name: "クリムゾン立直棒", have: false}, {name: "24Kゴールド棒", have: false}, {name: "悪断ちの立直棒", have: false},
{name: "アイスバーの立直棒", have: false}, {name: "小悪魔の立直棒", have: false}, {name: "硬いパンの立直棒", have: false},
{name: "面白眼鏡の立直棒", have: false}, {name: "球児の立直棒", have: false}, {name: "ネオンサインの立直棒", have: false},
{name: "エメラルドの雀卓", have: false}, {name: "鳩羽色の雀卓", have: false}, {name: "バイオレットの雀卓", have: false},
{name: "スイカの雀卓", have: false}, {name: "芽吹きの地の雀卓", have: false}, {name: "花月夜の雀卓", have: false},
{name: "ホタルの森の雀卓", have: false}, {name: "紫藤の雀卓", have: false}, {name: "ワインレッドの雀卓", have: false},
{name: "ライトグレーの雀卓", have: false}, {name: "淡黄色の麻雀牌", have: false}, {name: "若葉色の麻雀牌", have: false},
{name: "真っ赤な麻雀牌", have: false}, {name: "ゴーストの麻雀牌", have: false}, {name: "真珠貝の麻雀牌", have: false},
{name: "みかんの麻雀牌", have: false}, {name: "しいたけの麻雀牌", have: false}, {name: "コスモスの麻雀牌", have: false},
{name: "ローズグレーの麻雀牌", have: false}, {name: "青の麻雀牌", have: false}, {name: "子ネコの手", have: false},
{name: "「真剣勝負」", have: false}, {name: "「激闘」", have: false}, {name: "「出陣」", have: false},
{name: "「一触即発」", have: false}, {name: "「勝利への道」", have: false}, {name: "「凌雲の志」", have: false},
{name: "秘伝の戦陣", have: false}, {name: "気ままに", have: false}, {name: "和やか", have: false},
{name: "未来", have: false}];

const rareMaterialList = [{name: "香ばしいクッキー"}, {name: "次世代ゲーム機"}, {name: "不朽の名画"},
{name: "高級ワイングラス"}, {name: "碧洋のハート"}, {name: "テディベアXXL"},
{name: "大手の同人誌"}, {name: "派手なワンピース"}];

const materialList = [{name: "バタークッキー"}, {name: "携帯ゲーム機"}, {name: "立派な絵画"},
{name: "上品なおちょこ"}, {name: "巨大なダイヤ"}, {name: "テディベアL"},
{name: "薄い本"}, {name: "セーラー服"}];

const havingCharTable = document.querySelector("#havingChar");
const havingItemTable = document.querySelector("#havingItem");

function makeTable(table, list) {
    for ( let i = 0; i < list.length; i++) {
        const havingDiv = document.createElement("div");
        const havingImg = document.createElement("img");
        const havingName = document.createElement("span");
        havingDiv.classList.add("tableDiv");
        havingImg.classList.add(`${table.id}Img`, "notHaving");
        havingName.classList.add("tableSpan");
        if (list === charList) {
            havingImg.src = `charImg/char(${i}).png`;
        } else {
            havingImg.src = `itemImg/item(${i}).png`;
        }
        havingName.innerText = list[i].name;
        havingDiv.append(havingImg);
        havingDiv.append(havingName);
        table.append(havingDiv);
    }
}

makeTable(havingCharTable, charList);
makeTable(havingItemTable, itemList);

let rollNum = 0;
let wishStoneNum = 0;
let starStoneNum = 0;

const rollButton = document.querySelector("#roll");
const resultSpace = document.querySelector("#resultSpace");
const rollNumH1 = document.querySelector(".rollNum");
const wishStone = document.querySelector(".stone_num .wish_stone span");
const starStone = document.querySelector(".stone_num .star_stone span");

async function clickButton() {
    buttonActive(rollButton);
    while (resultSpace.firstChild) {
        resultSpace.removeChild(resultSpace.firstChild);
    }
    await tenRoll();
    rollNumH1.innerText = `ガチャ回数: ${rollNum}回`;
    wishStone.innerText = `願いの石: ${wishStoneNum}個`;
    starStone.innerText = `星の石: ${starStoneNum}個`;
    confirmationHaving();
}

function makeRandNum() {
    const randNum = Math.floor(Math.random() * 100);
    if (randNum >= 95) {
        const charNum = Math.floor(Math.random() * 34);
        return {list: charList, num: charNum, url: `charImg/char(${charNum}).png`};
    } else if (randNum >= 80) {
        const itemNum = Math.floor(Math.random() * 67);
        return {list: itemList, num: itemNum, url: `itemImg/item(${itemNum}).png`};
    }
    const randNum1 = Math.floor(Math.random() * 10000);
    if (randNum1 >= 9375) {
        const rareMaterialNum = Math.floor(Math.random() * 8);
        return {list: rareMaterialList, num: rareMaterialNum, url: `rare_materialImg/rare_material(${rareMaterialNum}).png`};
    }
    const materialNum = Math.floor(Math.random() * 8);
    return {list: materialList, num: materialNum, url: `materialImg/material(${materialNum}).png`};
}

function confirmationHaving() {
    const tableImgChar = document.querySelectorAll(".havingCharImg");
    const tableImgItem = document.querySelectorAll(".havingItemImg");
    removeClass(charList, tableImgChar);
    removeClass(itemList, tableImgItem);
}

function removeClass(list, imgs) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].have === true) {
            imgs[i].classList.remove("notHaving");
        }
    }
}

function rollGacha() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newElems = {
                div: document.createElement("div"),
                img: document.createElement("img"),
                h2: document.createElement("h2")
            };
            addClass(newElems);
            gachaResult(newElems);
            newElems.div.append(newElems.img);
            newElems.div.append(newElems.h2);
            resultSpace.append(newElems.div);
            resolve();
        }, 300);
    })
}

async function tenRoll() {
    for (let i = 0; i < 10; i++) {
        await rollGacha();
        rollNum++;
    }
}

function addClass({ div, img, h2 }) {
    div.classList.add("resultStyle");
    img.classList.add("gachaResultImg");
    h2.classList.add("gachaResultName");
}

function gachaResult({ img, h2 }) {
    const { list, num, url } = makeRandNum();
    if (list[num].have === true) {
        if (list === charList) {
            img.src = "img/wishStone.png";
            h2.innerText = "願いの石";
            wishStoneNum++;
        } else {
            img.src = "img/starStone.png";
            h2.innerText = "星の石";
            starStoneNum++;
        }
    } else {
        if (list === charList || list === itemList) {
            list[num].have = true;
        }
        img.src = url;
        h2.innerText = list[num].name;
    }
}

function buttonActive(button) {
    button.classList.add("active");
    button.innerText = "祈願中";
    setTimeout(() => {
        button.classList.remove("active");
        button.innerText = "祈願！";
    }, 3000)
}

rollButton.addEventListener("click", clickButton);
