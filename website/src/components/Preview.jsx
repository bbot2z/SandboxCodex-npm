export default function Preview() {
  const html = `
<!DOCTYPE html>
<html>
<head>
<style>
body{
margin:0;
font-family:Arial;
background:#0f172a;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
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
<p>Live Preview Ready 🚀</p>
</div>
</body>
</html>
`;

  return (
    <iframe
      title="preview"
      srcDoc={html}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: "#fff",
      }}
    />
  );
}
