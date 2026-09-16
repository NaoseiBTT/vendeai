import { ProductListing, ProductListingStatus } from "../src/modules/products/domain/entities/product-listing.entity.js"

describe("ProductListing", ()=>{

    it("não deve permitir anuncio sem titulo", ()=>{
        expect(()=>
            ProductListing.create({
                title: "",
                description:"Bicicleta usada",
                priceInCents: 50000,
                sellerId:"seller-1",
                categoryId:"category-1"
            }),

        ).toThrow("O titulo do anuncio é obrigatorio")
    })

    it("deve criar um anuncio válido",()=>{
        const listing = ProductListing.create({
            title:"Bicicleta Caloi",
            description:"Bicicleta usada em ótimo estado",
            priceInCents:50000,
            sellerId:"sellet-1",
            categoryId:"category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
    })

    it("deve iniciar com status AVAILABLE",()=>{
        const listing = ProductListing.create({
            title:"Bicicleta Caloi",
            description:"Bicicleta usada em ótimo estado",
            priceInCents:50000,
            sellerId:"sellet-1",
            categoryId:"category-1"
        })

        expect(listing.status).toBe("AVAILABLE")
    })

    it("não deve permitir preço negativo", ()=>{
        expect(()=>
            ProductListing.create({
                title: "Bicicleta Caloi",
                description:"Bicicleta usada",
                priceInCents: -100,
                sellerId:"seller-1",
                categoryId:"category-1"
            }),

        ).toThrow("O preço nao pode ser negativo")
    })

    it("não deve permitir descricao vazia", ()=>{
        expect(()=>
            ProductListing.create({
                title: "Bicicleta Caloi",
                description:"",
                priceInCents: 50000,
                sellerId:"seller-1",
                categoryId:"category-1"
            }),

        ).toThrow("A descrição do anuncio é obrigatória")
    })

    it("não deve permitir anuncio sem vendedor", ()=>{
        expect(()=>
            ProductListing.create({
                title: "Bicicleta Caloi",
                description:"Bicicleta usada",
                priceInCents: 50000,
                sellerId:"",
                categoryId:"category-1"
            }),

        ).toThrow("O vendedor é obrigatorio")
    })

    it("não deve permitir anuncio sem categoria", ()=>{
        expect(()=>
            ProductListing.create({
                title: "Bicicleta Caloi",
                description:"Bicicleta usada",
                priceInCents: 50000,
                sellerId:"seller-1",
                categoryId:""
            }),

        ).toThrow("A categoria é obrigatoria")
    })

    it("deve marcar o anuncio como vendido",()=>{
        const listing = ProductListing.create({
                title: "Bicicleta Caloi",
                description:"Bicicleta usada",
                priceInCents: 50000,
                sellerId:"seller-1",
                categoryId:"category-1"
        })

        listing.markAsSold()

        expect(listing.status).toBe(ProductListingStatus.SOLD)
    })


})