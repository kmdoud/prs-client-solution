import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class';

@Pipe
({
  name: 'rsearch'
})
export class RsearchPipe implements PipeTransform 
{

  transform(requests: Request[], criteria:string ): Request[]
  {
    if (criteria == '')
      return requests;
    let arrOut: Request[] = [];
    for(let request of requests)
    {
      if( request.description.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }
      if( request.justification.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }
      if( request.rejectionReason.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }
      if(request.deliveryMode != null &&  request.deliveryMode.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }
      if( request.submittedDate.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }
      if( request.status.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(request);
      continue;
      }

    };
    
  
    return arrOut;
  }

}
