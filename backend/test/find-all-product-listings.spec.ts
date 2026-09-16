
import { ProductListingRepository } from "../src/modules/products/application/repositories/product-listing.repository.js"
import { FindAllProductListingsUseCase } from "../src/modules/products/application/use-cases/find-all-product-listing.use-case.js"


describe("Find all product listings",()=>{

    it("deve retornar todos os produtos", async ()=>{

        const productListingRepository = {
            findAll: async () => [
                {
                    id:"1",
                    title:"iphone 13",
                    description: "Iphone usado",
                    priceInCents: 250000,
                    sellerId: "seller-1",
                    categoryId: "category-1",
                    status:"AVAILABLE",
                },
            ],
        } as ProductListingRepository

        const sut = new FindAllProductListingsUseCase(
            productListingRepository
        )

        const result = await sut.execute()

        expect(result).toHaveLength(1)
        expect(result[0].title).toBe("iphone 13")
    })
})