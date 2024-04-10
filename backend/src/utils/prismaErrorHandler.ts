import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { AppError } from "./errorHandler";

export function prismaErrorHandler(callback: Function) {
    return Promise.resolve(callback())
        .then((data) => data)
        .catch((error) => {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    return new AppError(`${error.meta?.target} already exists`, 409);
                }
                if (error.code === "P2001") {
                    return new AppError(` Record does not exist`, 404);
                }
                if (error.code === "P2011") {
                    return new AppError(`Make Sure all required fields are filled`, 400);
                }
                return new AppError(`Invalid Input`, 409);
            }
            return error;
        });
}