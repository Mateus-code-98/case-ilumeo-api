import { Request, Response } from "express";
import { STATUS_OK } from "../../../shared/utils/status_codes";
import { getUserWorkingHoursService } from "../services/getUserWorkingHours.service";

export const getUserWorkingHoursController = async (req: Request, res: Response) => {
	const { id: user_id } = req.user;

	const result = await getUserWorkingHoursService({ user_id });

	return res.status(STATUS_OK).json(result);
}