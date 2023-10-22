import { NextFunction, Request, Response } from "express";

import boardService from "../services/board.service";
import { ReqBody, ResBody, ReqParams, ReqQuery } from "../types/types";

type ControllerFunction = (req: Request<ReqParams, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => void;

// 게시판 목록
const list: ControllerFunction = async (req, res, next) => {
  try {
    const data = await boardService.listBoards(req.query);
    res.json(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("게시판 목록데이터 가져오는데 에러 발생:  ", err.message);
    }
    next(err);
  }
}

// 게시판 상세정보
const read: ControllerFunction = async (req, res, next) => {
  try {
    const data = await boardService.readBoard(req.params);
    res.json(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("게시판 상세데이터 가져오는데 에러 발생:  ", err.message);
    }
    next(err);
  }
};

// 게시판 등록
const create: ControllerFunction = async (req, res, next) => {
  try {
    const data = await boardService.createBoard(req.body);
    res.json(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("게시판 등록 에러 발생:  ", err.message);
    }
    next(err);
  }
}

// 게시판 수정
const update: ControllerFunction = async (req, res, next) => {
  try {
    const data = await boardService.updateBoard(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("게시판 수정 에러 발생:  ", err.message);
    }
    next(err);
  }
}

// 게시판 삭제
const remove: ControllerFunction = async (req, res, next) => {
  try {
    const data = await boardService.deleteBoard(req.params.id);
    res.json(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("게시판 삭제 에러 발생:  ", err.message);
    }
    next(err);
  }
}

export default {
  list,
  read,
  create,
  update,
  remove,
};
