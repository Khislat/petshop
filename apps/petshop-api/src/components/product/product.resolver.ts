import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import {
	AllProductsInquiry,
	OrdinaryInquiry,
	ProductsInquiry,
	ProductInput,
	VendorProductsInquiry,
} from '../../libs/dto/product/product.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { WithoutGuard } from '../auth/guards/without.guard';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { ProductUpdate } from '../../libs/dto/product/product.update';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Product, Products } from '../../libs/dto/product/product';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Roles(MemberType.VENDOR)
	@UseGuards(RolesGuard)
	@Mutation(() => Product)
	public async createProduct(
		@Args('input') input: ProductInput,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Product> {
		console.log('Mutation: createProduct');
		input.memberId = memberId;
		return await this.productService.createProduct(input);
	}

	@UseGuards(WithoutGuard)
	@Query(() => Product)
	public async getProduct(@Args('productId') input: string, @AuthMember('_id') memberId: ObjectId): Promise<Product> {
		console.log('Query: getProduct');
		const productId = shapeIntoMongoObjectId(input);
		return await this.productService.getProduct(memberId, productId);
	}

	@Roles(MemberType.VENDOR)
	@UseGuards(RolesGuard)
	@Mutation((returns) => Product)
	public async updateProduct(
		@Args('input') input: ProductUpdate,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Product> {
		console.log('Mutation updateProduct');
		input._id = shapeIntoMongoObjectId(input._id);
		return await this.productService.updateProduct(memberId, input);
	}

	@UseGuards(WithoutGuard)
	@Query((returns) => Products)
	public async getProducts(
		@Args('input') input: ProductsInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Products> {
		console.log('Query: getProducts');
		return await this.productService.getProducts(memberId, input);
	}

	@UseGuards(AuthGuard)
	@Query((returns) => Products)
	public async getFavorites(
		@Args('input') input: OrdinaryInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Products> {
		console.log('Query: getFavorites');
		return await this.productService.getFavorites(memberId, input);
	}

	@UseGuards(AuthGuard)
	@Query((returns) => Products)
	public async getVisited(
		@Args('input') input: OrdinaryInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Products> {
		console.log('Query: getVisited');
		return await this.productService.getVisited(memberId, input);
	}

	@Roles(MemberType.VENDOR)
	@UseGuards(RolesGuard)
	@Query((returns) => Products)
	public async getVendorProducts(
		@Args('input') input: VendorProductsInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Products> {
		console.log('Query: getVendorProducts');
		return await this.productService.getVendorProducts(memberId, input);
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Product)
	public async likeTargetProduct(
		@Args('productId') input: string,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Product> {
		console.log('Mutation: likeTargetProduct');
		const likeRefId = shapeIntoMongoObjectId(input);
		return await this.productService.likeTargetProduct(memberId, likeRefId);
	}

	/** ADMIN **/

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Query((returns) => Products)
	public async getAllProductsByAdmin(
		@Args('input') input: AllProductsInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Products> {
		console.log('Query: getAllProductsByAdmin');
		return await this.productService.getAllProductsByAdmin(input);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation((returns) => Product)
	public async updateProductByAdmin(@Args('input') input: ProductUpdate): Promise<Product> {
		console.log('Query: updateProductByAdmin');
		return await this.productService.updateProductByAdmin(input);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation((returns) => Product)
	public async removeProductByAdmin(@Args('productId') input: string): Promise<Product> {
		const productId = shapeIntoMongoObjectId(input);
		return await this.productService.removeProductByAdmin(productId);
	}
}
