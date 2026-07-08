import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Terminal from "../components/Terminal";

export default function IDE() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
<style>
body{
background:#0f172a;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
font-family:Arial;
color:white;
}
h1{
color:#7c5cff;
}
</style>
</head>
<body>
<div>
<h1>Sandbox CodeX</h1>
<p>Edit code and preview instantly.</p>
</div>
</body>
</html>`);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr 1fr",
        gridTemplateRows: "1fr 220px",
        height: "100vh",
      }}
    >
      <Sidebar />

      <Editor code={code} setCode={setCode} />

      <iframe
        title="preview"
        srcDoc={code}
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          background: "#fff",
        }}
      />

      <div style={{ gridColumn: "2 / 4" }}>
        <Terminal />
      </div>
    </div>
  );
}
