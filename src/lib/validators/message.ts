import {z} from "zod"

export const MessageSchema = z.object({
    id: z.string(),
    role: z.string(),
    content: z.string()

})

//array validator

export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>