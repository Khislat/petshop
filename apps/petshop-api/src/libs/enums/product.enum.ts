import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategory {
	DOGS = 'DOGS',
	CATS = 'CATS',
	BIRDS = 'BIRDS',
	FUN_TOYS = 'FUN_TOYS',
	HEALTHY = 'HEALTHY',
	ACCESSORIES = 'ACCESSORIES',
	SOAPS_SHAMPOOS = 'SOAPS_SHAMPOOS',
	BOWLS = "BOWLS",
	CLOTHINGS = "CLOTHINGS",
	CRATES = "CREATES",
	FLEA_AND_TICK = "FLEA_AND_TICK",
	FOODS = "FOODS",
	FURNITURES = 'FURNITURES',
	TREATS = "TREATS",
	ALL = "ALL"

}
registerEnumType(ProductCategory, {
	name: 'ProductCategory',
});

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

export enum ProductWeight {
	FIVE_HUNDRED_GRAMS = 'FIVE_HUNDRED_GRAMS',
	ONE_KG = 'ONE_KG',
	TWO_KG = 'TWO_KG',
	FIVE_KG = 'FIVE_KG',
}

registerEnumType(ProductWeight, {
	name: 'ProductWeight',
});
