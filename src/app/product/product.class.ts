export class Product 
{
    id: number;
    vendorId: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photopath: string;
    isActive: boolean;


    constructor(id: number, vendorId: number, partNumber: string, name: string, price: number, unit: string, photopath: string, isActive: boolean = true)
    {
        this.id = id;
        this.vendorId = vendorId;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photopath = photopath;
        this.isActive = isActive;
    }
}
