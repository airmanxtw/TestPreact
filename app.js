import { h } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
//import htm from "https://esm.sh/htm";
import { html } from 'https://esm.sh/htm/preact/standalone'
export const useApp = () => {
  //const html = htm.bind(h);

  const App = ({ show, onClick }) => {
    const [name, setName] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
      setName(new Date().toLocaleTimeString());
    }, 1000);
    return html`
              ${show ? html`<h1>${name}</h1>` : html`<h2>Hello ${name}</h2>`} <br />
              <button class='border-2 rounded-full p-2 bg-orange-300 shadow-lg hover:bg-gray-300' onClick=${() => onClick(new Date().toLocaleTimeString())}>
                GET TIME
              </button> 
          `;
  };

  return { App };
};
