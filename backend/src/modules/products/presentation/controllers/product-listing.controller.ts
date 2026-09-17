import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/use-cases/create-product-listing.use-case.js";
import { CreateProductListingDto } from "../dtos/create-product-listing.dto.js";
import { FindAllProductListingsUseCase } from "../../application/use-cases/find-all-product-listing.use-case.js";




@Controller("products")
export class ProductListingController {

    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingUseCase: FindAllProductListingsUseCase
    ){}

    @Post()
    create(@Body() data: CreateProductListingDto){
        return this.createProductListingUseCase.execute(data)
    }

    
    @Get()
    async findAll() {
        const listings = await this.findAllProductListingUseCase.execute();
        
        return listings.map((product) => ({
            title: product.title,
            description: product.description,
            priceInCents: product.priceInCents,
            sellerId: product.sellerId,
            categoryId: product.categoryId,
            status: product.status,
            phone: product.phone,
        }));
    }
}