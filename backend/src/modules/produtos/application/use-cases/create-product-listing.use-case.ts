import { CreateProductListingData, ProductListing } from "../../domain/entities/product-listing.entities.js";

export class CreateProductListingUseCase{

    execute(data: CreateProductListingData):ProductListing{
        return ProductListing.create(data)
    }
}