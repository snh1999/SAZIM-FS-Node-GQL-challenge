import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constants/values";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.get("Authorization");
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        if (token && token !== "") {
            try {
                const decodedToken: any = JWT.verify(token, JWT_SECRET_KEY);
                if (decodedToken) {
                    req.isAuthenticaed = true;
                    req.user = decodedToken.id;
                    return next();
                }
            } catch (_) {
                req.isAuthenticaed = false;
                return next();
            }
        }
    }
    req.isAuthenticaed = false;
    return next();
}