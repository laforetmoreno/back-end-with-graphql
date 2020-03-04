import Comment from './CommentsModels';

export const saveComment = async (_, { input }) => Comment.create(input);

export const getComments = async () => Comment.find();
