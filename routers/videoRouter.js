import express from "express";
import routes from "../routes";
import {videos, deleteVideo, editVideo, upload, videoDetail } from '../controllers/videoControllers';

const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;