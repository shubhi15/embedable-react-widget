import ReactDOM from "react-dom/client";
import App from "./App";


const container = document.createElement("div"); // const shadow = container.attachShadow({mode: "open"});
container.id = "widget";
document.body.appendChild(container);
export function renderWidget(options: { token: string }) {
  const target = document.getElementById("widget-root");
  if (target) {
    ReactDOM.createRoot(target).render(<App token={options.token} />);
  } else {
    console.error('Target element with attribute "data-canny" not found.');
  }
}
