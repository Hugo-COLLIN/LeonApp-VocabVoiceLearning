import {initRouter} from "./application/router.js";
import {addTrainingPictures} from "./pages/training.js";
import {addEvaluationPictures} from "./pages/gridGame.js";


initRouter();
addTrainingPictures();
addEvaluationPictures();