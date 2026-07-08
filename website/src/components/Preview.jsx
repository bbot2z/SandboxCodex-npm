export default function Preview({ html }) {
  return (
    <iframe
      title="preview"
      srcDoc={html}
      sandbox="allow-scripts"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: "#fff",
      }}
    />
  );
}
