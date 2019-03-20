export class Request 
{
    id: number;
    userId: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    submittedDate: string;
    status: string;
    total: number;

    constructor(id: number, userId: number, description: string, justification: string, rejectionReason: string, deliveryMode: string, submittedDate: string,
        status: string, total: number)
    {
        this.id = 0;
        this.userId = userId;
        this.description = description;
        this.justification = justification;
        this.rejectionReason = rejectionReason;
        this.deliveryMode = deliveryMode;
        this.submittedDate = submittedDate;
        this.status = status;
        this.total = 0;
    }
}
