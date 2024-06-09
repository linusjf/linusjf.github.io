const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    react: "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
    "react-bootstrap": "https://esm.sh/react-bootstrap@2.10.2",
    drummachine: "/DrumMachine/drummachine.mjs",
  },
});
document.currentScript.after(im);
