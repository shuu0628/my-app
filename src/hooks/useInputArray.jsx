import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");

  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length >= 5) {
      alert("5文字以内");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が存在");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);
  return { text, array, handleChange, handleAdd };
};
