import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ObjectId } from 'mongoose';
import { ProductCategory, ProductStatus, ProductWeight } from '../../enums/product.enum';


@InputType()
export class ProductUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => ProductCategory, { nullable: true })
	productCategory?: ProductCategory;

	@IsOptional()
	@Field(() => ProductWeight, { nullable: true })
	productWeight?: ProductWeight;

	@IsOptional()
	@Field(() => ProductStatus, { nullable: true })
	productStatus?: ProductStatus;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	productTitle?: string;

	// @IsOptional()
	// @Length(3, 100)
	// @Field(() => String, { nullable: true })
	// brandName?: string;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	productPrice?: number;



	@IsOptional()
	@Field(() => [String], { nullable: true })
	productImages?: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	productDesc?: string;

	soldAt?: Date;

	deletedAt?: Date;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}
