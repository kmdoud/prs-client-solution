import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe
({
  name: 'vsearch'
})
export class VsearchPipe implements PipeTransform 
{
  transform(vendors: Vendor[], criteria:string ): Vendor[]
  {
    if (criteria == '')
      return vendors;
    let arrOut: Vendor[] = [];
    for(let vendor of vendors)
    {
      if( vendor.code.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.name.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.address.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.city.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.state.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.phone.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }
      if( vendor.email.toLowerCase().includes(criteria.toLowerCase()))
      {
      arrOut.push(vendor);
      continue;
      }

    };
    
  
    return arrOut;
  }

}
