import Editor from "@monaco-editor/react";

export default function CodeEditor({
  language,
  code,
  setCode,
}) {
  return (
    <Editor
      height="100%"
      theme="vs-dark"
      language={language}
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 15,
        automaticLayout: true,
        minimap: {
          enabled: true,
        },
        wordWrap: "on",
      }}
    />
  );
}
