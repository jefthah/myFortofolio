import { useState, useEffect } from "react";

const useTypingEffect = (words: string[], typingSpeed = 100, delay = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typeTimeout: NodeJS.Timeout;

    if (isDeleting) {
      typeTimeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, typingSpeed / 2);
    } else {
      typeTimeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typeTimeout);
  }, [displayText, isDeleting, typingSpeed, delay, words, wordIndex]);

  return displayText;
};

export default useTypingEffect;
