import { Inject } from "@nestjs/common";
import { ProductListingRepository } from "../repositories/product-listing.repository.js";
import { ProductListing } from "../../domain/entities/product-listing.entity.js";

export class FindAllProductListingsUseCase {

    constructor(
        @Inject(ProductListingRepository)
        private productListingRepository: ProductListingRepository
    ){}

    async execute():Promise<ProductListing[]>{
        return this.productListingRepository.findAll()
    }
}