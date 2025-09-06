import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed: number = 100, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return showCursor ? displayText + (displayText.length > 0 ? "" : "") : displayText;
}
