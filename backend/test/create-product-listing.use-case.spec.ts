import { CreateProductListingUseCase } from "../src/modules/produtos/application/use-cases/create-product-listing.use-case.js"
import { ProductListing, ProductListingStatus } from "../src/modules/produtos/domain/entities/product-listing.entities.js"

describe("CreateProductListingUserCase",() => {

    it ("deve criar um anuncio",() => {
        const useCase = new CreateProductListingUseCase()

        const listing = useCase.execute({
            title: "Biblioteca Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
        expect(listing.status).toBe(ProductListingStatus.AVAILABLE)
    })
})