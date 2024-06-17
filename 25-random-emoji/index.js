const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=d607eaf5a2b2bf3c2b375ca9b258c05a3f1801b8"
  );

  data = await response.json();

  console.log(data);

  for (let i = 0; i < 1500; i++) {
    const cleanedUnicodeName = data[i].unicodeName.replace(/^E\d+\.\d+ /, ""); // Remove the "E1.0" part
    emoji.push({
      emojiName: data[i].character,
      emojiCode: cleanedUnicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
