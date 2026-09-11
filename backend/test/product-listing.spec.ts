import { ProductListing, ProductListingStatus } from "../src/modules/produtos/domain/entities/product-listing.entities.js";

describe("ProductListing", () => {
    it("não deve permitir anuncios sem titulos", () => {
        expect(() => 
            ProductListing.create({
                title: "",
                description: "Bicicleta usada",
                priceInCents: 50000,
                sellerId: "seller-1",
                categoryId: "category-1"
            })

        ).toThrow("O título do anúncio é obrigatório");
    });

    it("deve criar um anuncio valido", () => {
        const listing = ProductListing.create({
            title: "Biblioteca Caloi",
            description: "Bicicleta usada em otimo estado",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
    });

    it("deve iniciar com status AVAILABLE", () => {
        const listing = ProductListing.create({
            title: "Biblioteca Caloi",
            description: "Bicicleta usada em otimo estado",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing.status).toBe("AVAILABLE")
    })

    it("nao deve permitir preco negativo", () => {
        expect(() => 
            ProductListing.create({
                title: "Biblioteca Caloi",
                description: "Bicicleta usada",
                priceInCents: -50000,
                sellerId: "seller-1",
                categoryId: "category-1"
            })

        ).toThrow("O preço não pode ser negativo");
    });

    it("nao deve permitir descricao vazia", () => {
        expect(() => 
            ProductListing.create({
                title: "Biblioteca Caloi",
                description: "",
                priceInCents: 50000,
                sellerId: "seller-1",
                categoryId: "category-1"
            })

        ).toThrow("A descrição do anúncio é obrigatória");
    });

    it("nao deve permitir anuncio sem vendedor", () => {
        expect(() => 
            ProductListing.create({
                title: "Biblioteca Caloi",
                description: "Bicicleta usada",
                priceInCents: 50000,
                sellerId: "",
                categoryId: "category-1"
            })

        ).toThrow("O vendedor é obrigatório");
    });

    it("nao deve permitir anuncio sem categoria", () => {
        expect(() => 
            ProductListing.create({
                title: "Biblioteca Caloi",
                description: "Bicicleta usada",
                priceInCents: 50000,
                sellerId: "seller-1",
                categoryId: ""
            })

        ).toThrow("A categoria é obrigatória");
    });

    it("Deve marcar o anuncio como vendido"), () => {
        const listing = ProductListing.create({
            title: "Biblioteca Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        listing.markAsSold()

        expect(listing.status).toBe(ProductListingStatus.SOLD  )



        
    }
    












});