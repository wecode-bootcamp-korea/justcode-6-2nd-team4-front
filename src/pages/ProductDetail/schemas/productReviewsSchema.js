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
      sourceField: 'content',
    },
    createdAt: {
      sourceField: 'created_at',
    },
    userId: {
      sourceField: 'user_id',
    },
    userName: {
      sourceField: 'user_name',
    },
    userImage: {
      sourceField: 'user_image',
    },
  },
};
