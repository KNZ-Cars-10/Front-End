import { z } from "zod";
import { requestLoginSchema } from "../schemas/login.schemas";

export type LoginData = z.infer<typeof requestLoginSchema>;
