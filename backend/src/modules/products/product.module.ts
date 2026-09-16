import { Module } from "@nestjs/common";
import { ProductListingController } from "./presentation/controllers/product-listing.controller.js";
import { CreateProductListingUseCase } from "./application/use-cases/create-product-listing.use-case.js";

import { ProductListingRepository } from "./application/repositories/product-listing.repository.js";
import { ProductListingTypeOrmRepository } from "./infra/database/typeorm/repositories/product-listing-typeorm.repository.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductListingSchema } from "./infra/database/typeorm/entities/product-listing-schema.js";
import { FindAllProductListingsUseCase } from "./application/use-cases/find-all-product-listing.use-case.js";


@Module({

    imports:[
        TypeOrmModule.forFeature([ProductListingSchema])
    ],
    controllers:[ProductListingController],

    providers:[
    CreateProductListingUseCase,
    FindAllProductListingsUseCase,
    {
    provide:ProductListingRepository,
    useClass: ProductListingTypeOrmRepository
    },    
        
    ],
    exports:[
        ProductListingRepository
    ]
})

export class ProductsModule{}