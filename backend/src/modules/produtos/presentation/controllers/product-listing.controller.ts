import { Body, Controller, Post } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/use-cases/create-product-listing.use-case.js";
import { CreateProductListingDto } from "../dtos/create-product-listing.dto.js";

@Controller("products")
export class ProductListingController {
    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase
    ){}

    @Post()
    create(@Body() body: CreateProductListingDto) {
        return this.createProductListingUseCase.execute(body);
    }
}