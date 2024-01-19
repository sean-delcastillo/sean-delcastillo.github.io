import modelViewer from "model-viewer.min.js";

const mv = document.createElement(modelViewer);
mv.src = "myhead.glb";
document.body.append(mv);