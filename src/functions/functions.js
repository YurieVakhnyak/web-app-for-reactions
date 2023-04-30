export function includeWord(str, setEmojis) {
  let emoji = "😃";
  if (str.includes("smile")) {
    createEmoji(emoji, setEmojis);
  }
  if (str.includes("sad")) {
    emoji = "😢";
    createEmoji(emoji, setEmojis);
  }
  if (str.includes("angry")) {
    emoji = "😠";
    createEmoji(emoji, setEmojis);
  }
  if (str.includes("like")) {
    emoji = "👍";
    createEmoji(emoji, setEmojis);
  }
  if (str.includes("strong")) {
    emoji = "💪";
    createEmoji(emoji, setEmojis);
  }
  return null;
}

export function createEmoji(emoji, setEmojis) {
  const newEmoji = {
    id: Date.now(),
    top: 0,
    left: Math.floor(Math.random() * window.innerWidth),
    emoji: emoji,
  };
  setEmojis((prevState) => [...prevState, newEmoji]);
  setTimeout(() => {
    setEmojis((prevState) =>
      prevState.filter((emoji) => emoji.id !== newEmoji.id)
    );
  }, 5000);
}
