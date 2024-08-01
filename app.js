import { h } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";
export const useApp = () => {
    
  const html = htm.bind(h);

  const App = (props) => {
    const [name, setName] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
      setName(new Date().toLocaleTimeString());
    }, 1000);
    return html`${props.show ? html`<h1>${name}</h1>` : html`<h2>Hello ${name}</h2>`} `;
  };

  return { App };
};
