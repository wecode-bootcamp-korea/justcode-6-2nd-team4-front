export const productReviewsSchema = {
  isList: true,
  data: '',
  format: {
    id: {
      sourceField: 'id',
    },
    rate: {
      sourceField: 'rate',
    },
    content: {
      sourceField: 'review_content',
    },
    createdAt: {
      sourceField: 'date',
    },
    userName: {
      sourceField: 'name',
    },
    userImage: {
      sourceField: 'user_image',
    },
  },
};
