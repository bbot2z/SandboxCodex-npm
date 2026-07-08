import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [code, setCode] = useState(`function hello() {
  console.log("Sandbox CodeX");
}

hello();
`);

  return (
    <Editor
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 15,
        minimap: { enabled: true },
        automaticLayout: true,
        wordWrap: "on",
      }}
    />
  );
}
