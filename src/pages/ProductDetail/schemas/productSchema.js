export const productSchema = {
  isList: false,
  data: '',
  format: {
    id: {
      sourceField: 'id',
    },
    name: {
      sourceField: 'product_name',
    },
    price: {
      sourceField: 'origin_price',
    },
    imageUri: {
      sourceField: 'thumbnail_image',
    },
    isLiked: {
      sourceField: 'is_liked',
    },
    likeCount: {
      sourceField: 'like_count',
    },
    averageRate: {
      sourceField: 'avg_rate',
    },
    reviewCount: {
      sourceField: 'review_count',
    },
    contentImageUri: {
      sourceField: 'image_url',
    },
    content: {
      sourceField: 'content',
    },
    sellerId: {
      sourceField: 'seller_id',
    },
    sellerName: {
      sourceField: 'name',
    },
    sellerImage: {
      sourceField: 'profile_image',
    },
    deliveryPeriod: {
      sourceField: 'production_period',
    },
    deliveryType: {
      sourceField: 'delivery_condition',
    },
    deliveryFee: {
      sourceField: 'delivery_fee',
    },
    deliveryExcludedArea: {
      sourceField: 'prohibited_deliver_area',
    },
    options: {
      sourceField: 'options',
    },
  },
};
