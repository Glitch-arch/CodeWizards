import { Request, Response } from "express";
import { submissionDto } from "../dtos/submission.Dto";

export const addSubmission = async (req: Request, res: Response) => {
    
    const submissionDTO = req.body as submissionDto;

    res.status(201).json({
        success: true,
        message: " Successfully collected the submission DTO ",
        payload: submissionDTO
    });

};