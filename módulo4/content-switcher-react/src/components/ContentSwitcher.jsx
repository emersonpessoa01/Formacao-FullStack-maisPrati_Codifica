import { useState } from "react";

export default function ContentSwitcher() {
  const [activeTab, setActiveTab] = useState("why-react");

  const renderContent = () => {
    switch (activeTab) {
      case "why-react":
        return (
          <ul>
            <li>React is extremely popular</li>
            <li>It makes building complex, interactive UIs a breeze</li>
            <li>It&apos;s powerful & flexible</li>
            <li>It has a very active and versatile ecosystem</li>
          </ul>
        );
      case "core-features":
        return (
          <ul>
            <li>Components, JSX & Props</li>
            <li>State</li>
            <li>Hooks (e.g., useEffect())</li>
            <li>Dynamic rendering</li>
          </ul>
        );
      case "related-resources":
        return (
          <ul>
            <li>Official web page (react.dev)</li>
            <li>Next.js (Fullstack framework)</li>
            <li>React Native (build native mobile apps with React)</li>
          </ul>
        );
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <header className="header">
        <img src="./src/assets/image/logo-JS.png" alt="JavaScript Logo" title="JavaScript Logo" className="image" />
        <div className="box-content">
          <h1 className="title"> Vanilla JavaScript | React</h1>
          <p className="text">i.e., JavaScript without any(UI) framework or library</p>
        </div>
      </header>
      <div className="tabs">
        <button className={`tab-btn ${activeTab === "why-react" ? "active" : ""}`} onClick={() => setActiveTab("why-react")}>
          Why React
        </button>
        <button className={`tab-btn ${activeTab === "core-features" ? "active" : ""}`} onClick={() => setActiveTab("core-features")}>
          Core Features
        </button>
        <button className={`tab-btn ${activeTab === "related-resources" ? "active" : ""}`} onClick={() => setActiveTab("related-resources")}>
          Related Resources
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}
