import { Schema } from 'mongoose';
import { ProductCategory, ProductStatus, ProductWeight } from '../libs/enums/product.enum';

const ProductSchema = new Schema(
	{
		productCategory: {
			type: String,
			enum: ProductCategory,
			required: true,
		},

		productStatus: {
			type: String,
			enum: ProductStatus,
			default: ProductStatus.ACTIVE,
		},

		productTitle: {
			type: String,
			required: true,
		},

		// brandName: {
		// 	type: String,
		// 	required: true,
		// },

		productPrice: {
			type: Number,
			required: true,
		},

		productOldPrice: {
			type: Number,
			required: true,
		},

		productWeight: {
			type: String,
			enum: ProductWeight,
			default: ProductWeight.TWO_KG,
		},

		productViews: {
			type: Number,
			default: 0,
		},

		productLikes: {
			type: Number,
			default: 0,
		},

		productComments: {
			type: Number,
			default: 0,
		},

		productRank: {
			type: Number,
			default: 0,
		},

		productImages: {
			type: [String],
			required: true,
		},

		productDesc: {
			type: String,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'products' },
);

ProductSchema.index({ productCategory: 1, productTitle: 1, productPrice: 1 }, { unique: true });

export default ProductSchema;
