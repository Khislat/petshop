import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { MemberModule } from '../member/member.module';
import { LikeModule } from '../like/like.module';
import ProductSchema from '../../schemas/Product.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
		AuthModule,
		ViewModule,
		MemberModule,
		LikeModule,
	],
	providers: [ProductResolver, ProductService],
	exports: [ProductService],
})
export class ProductModule {}
