export class RequestLine 
{
    id: number;
    requestId: number;
    productId: number;
    quantity: number;

    constructor(requestId: number = 0, productId: number = 0)
    {
        this.id = 0;
        this.requestId = requestId;
        this.productId = productId;
        this.quantity = 1;
    }
}
