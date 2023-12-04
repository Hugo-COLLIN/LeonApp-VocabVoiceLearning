import {initRouter} from "./application/router/router.js";
import {addEvaluationPictures} from "./pages/game.js";
import {initPagesContent} from "./pages/pages.js";


initRouter();
initPagesContent();
addEvaluationPictures();