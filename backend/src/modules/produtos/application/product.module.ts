import { Module } from "@nestjs/common";
import { ProductListingController } from "../presentation/controllers/product-listing.controller.js";
import { CreateProductListingUseCase } from "./use-cases/create-product-listing.use-case.js";

@Module({
    controllers:[ProductListingController],
    providers:  [CreateProductListingUseCase]
})

export class ProductsModule{}