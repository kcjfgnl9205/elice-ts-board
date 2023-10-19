import express from "express";

import boardsController from "../controllers/boards.controller";

const router = express.Router();

// 게시판 목록
router.get("/", boardsController.list);

// 게시판 상세
router.get("/:id", boardsController.read);

// 게시판 등록
router.post("/", boardsController.create);

// 게시판 수정
router.put("/:id", boardsController.update);

// 게시판 삭제
router.delete("/:id", boardsController.remove);

export default router;
