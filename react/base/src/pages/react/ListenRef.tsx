// 如何监听ref
import React, { useRef, useCallback } from "react";

export default function ListenRef() {
  const customRef = useCallback((node: any) => {
    if (node != null) {
      console.log(node);
    } else {
      console.log(node, "node");
    }
  }, []);
  return <div>ListenRef</div>;
}
