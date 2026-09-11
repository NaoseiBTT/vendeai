export enum ProductListingStatus {
    AVAILABLE = "AVAILABLE",
    SOLD =      "SOLD",
    INACTIVE =  "INACTIVE"
}

// 1. Defina as propriedades base do input
export interface CreateProductListingData {
    title: string;
    description: string;
    priceInCents: number;
    sellerId: string;
    categoryId: string;
}

// 2. Interface interna do objeto (com o status)
export interface ProductListingProps extends CreateProductListingData {
    status: ProductListingStatus;
}

export class ProductListing {
    private constructor(
        private readonly data: ProductListingProps
    ){}

    static create(data: CreateProductListingData): ProductListing {
        if (!data.title.trim()) {
            throw new Error("O título do anúncio é obrigatório");
        }

        if (data.priceInCents < 0) {
            throw new Error("O preço não pode ser negativo");
        }

        if (!data.description.trim()) {
            throw new Error("A descrição do anúncio é obrigatória");
        }

        if (!data.sellerId.trim()) {
            throw new Error("O vendedor é obrigatório");
        }

        if (!data.categoryId.trim()) {
            throw new Error("A categoria é obrigatória");
        }

        return new ProductListing({
            ...data,
            status: ProductListingStatus.AVAILABLE
        });
    }

    get status(): ProductListingStatus {
        return this.data.status; // Corrigido para acessar a propriedade interna
    }

    markAsSold(): void{
        this.data.status = ProductListingStatus.SOLD
    }

}