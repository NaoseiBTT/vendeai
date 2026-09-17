export enum ProductListingStatus {
    AVAILABLE = "AVAILABLE",
    SOLD = "SOLD",
    INACTIVE = "INACTIVE"
}

export interface CreateProductListingData {
    title: string,
    description: string
    priceInCents: number
    sellerId: string
    categoryId: string
}

interface ProductListingData extends CreateProductListingData {
    status: ProductListingStatus
    phone?: string // <-- Adicionado como opcional para vir no JOIN do repositório
}

export class ProductListing {

    private constructor(
        private readonly data: ProductListingData,
    ){}

    static create(data: CreateProductListingData): ProductListing {
        if(!data.title.trim()){
            throw new Error("O titulo do anuncio é obrigatorio")
        }

        if(data.priceInCents < 0){
            throw new Error("O preço nao pode ser negativo")
        }

        if(!data.description.trim()){
            throw new Error("A descrição do anuncio é obrigatória")
        }

        if(!data.sellerId.trim()){
            throw new Error("O vendedor é obrigatorio")
        }

        if(!data.categoryId.trim()){
            throw new Error("A categoria é obrigatoria")
        }

        return new ProductListing({
            ...data,
            status: ProductListingStatus.AVAILABLE
        })
    }

    static restore(data: ProductListingData): ProductListing {
        return new ProductListing(data)
    }

    get status(): ProductListingStatus {
        return this.data.status
    }

    get title(): string {
        return this.data.title
    }

    get description(): string {
        return this.data.description
    }

    get priceInCents(): number {
        return this.data.priceInCents
    }

    get sellerId(): string {
        return this.data.sellerId
    }

    get categoryId(): string {
        return this.data.categoryId
    }

    get phone(): string | undefined {
        return this.data.phone // <-- Getter para acessar o telefone do vendedor
    }

    markAsSold(): void {
        this.data.status = ProductListingStatus.SOLD
    }
}