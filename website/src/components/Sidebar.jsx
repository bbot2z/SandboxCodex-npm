const files = [
  { name: "index.html", type: "html" },
  { name: "style.css", type: "css" },
  { name: "script.js", type: "js" },
];

export default function Sidebar({ current, setCurrent }) {
  return (
    <aside
      style={{
        width: "220px",
        background: "#111827",
        color: "#fff",
        borderRight: "1px solid #222",
        padding: "10px",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>EXPLORER</h3>

      {files.map((file) => (
        <div
          key={file.name}
          onClick={() => setCurrent(file.name)}
          style={{
            padding: "8px",
            cursor: "pointer",
            borderRadius: "6px",
            background:
              current === file.name ? "#374151" : "transparent",
          }}
        >
          📄 {file.name}
        </div>
      ))}
    </aside>
  );
}
