export class Product 
{
    id: number;
    vendorId: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    isActive: boolean;


    constructor(id: number, vendorId: number, partNumber: string, name: string, price: number, unit: string, photoPath: string, isActive: boolean = true)
    {
        this.id = 0;
        this.vendorId = vendorId;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
        this.isActive = isActive;
    }
}
