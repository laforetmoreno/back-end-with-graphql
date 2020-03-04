import Comment from './CommentsModels';

export const saveComment = async (_, { input }) => {
  const comment = await Comment.create(input);

  return comment;
};

export const getComments = async () => {
  const comments = await Comment.find();

  return comments;
};
