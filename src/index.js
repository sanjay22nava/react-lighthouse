import React from "react";
import ReactDOM from "react-dom";
import ReportViewer from "react-lighthouse-viewer";
import jsonReport from "./report.json";

const App = () => <ReportViewer json={jsonReport} />;

ReactDOM.render(<App />, document.getElementById("root"));
