import { z } from "zod";

import {
  commentSchema,
  commentSchemaFull,
  commentSchemaRquest,
  commentsSchema,
  commentsSchemaUpdate,
} from "../../schemas/comments.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TCommentRequest = z.infer<typeof commentSchemaRquest>;

export type TCommentupdate = z.infer<typeof commentsSchemaUpdate>;

export type TComment = z.infer<typeof commentSchema>;

export type TCommentFull = z.infer<typeof commentSchemaFull>;

export type TComments = z.infer<typeof commentsSchema>;

export type TCommentContext = {
  deleteCommentModal: boolean;
  setDeleteCommentModal: React.Dispatch<React.SetStateAction<boolean>>;

  registerComment(formData: TCommentRequest, id: number): Promise<void>;

  updateComment(
    formData: TCommentupdate,
    commentid: number,
    advertId: number
  ): Promise<void>;

  deleteComment(commentid: number, advertId: number): Promise<void>;
};
