import "./App.css";

const aiModels = [
  "OpenAI",
  "Claude",
  "Gemini",
  "Grok",
  "DeepSeek",
  "Qwen",
  "Mistral",
  "Llama",
];

const features = [
  "AI Agent",
  "Browser IDE",
  "Linux Terminal",
  "Docker Sandbox",
  "Live Preview",
  "Git Integration",
  "File Manager",
  "Plugin Marketplace",
];

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Sandbox CodeX</div>

        <nav>
          <a href="#features">Features</a>
          <a href="#models">AI</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#docs">Docs</a>
        </nav>
      </header>

      <section className="hero">
        <span className="badge">🚀 v0.1 Alpha</span>

        <h1>
          Next Generation
          <br />
          AI Sandbox IDE
        </h1>

        <p>
          Build, Run, Test and Deploy applications directly from your browser.
          Mobile First. AI Native. Secure Sandbox.
        </p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Documentation</button>
        </div>
      </section>

      <section id="features" className="grid">
        {features.map((item) => (
          <div className="card" key={item}>
            <h3>{item}</h3>
            <p>Powerful tools built for modern developers.</p>
          </div>
        ))}
      </section>

      <section id="models">
        <h2>Supported AI Models</h2>

        <div className="chips">
          {aiModels.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="roadmap">
        <h2>Roadmap</h2>

        <ul>
          <li>✅ Landing Page</li>
          <li>🔄 Browser IDE</li>
          <li>🤖 AI Agent</li>
          <li>🐳 Docker Sandbox</li>
          <li>🚀 Version 1.0</li>
        </ul>
      </section>

      <footer>
        © 2026 Sandbox CodeX • Mobile First • Open Source
      </footer>
    </div>
  );
}
