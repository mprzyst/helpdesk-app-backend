import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';

interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    //here: run something before request is handled by request handler
    // console.log('running before the handler', context);
    return handler.handle().pipe(
      map((data: any) => {
        //run something before response is sent out
        // console.log('running before response is sent out ', data);
        return plainToClass(this.dto, data, { excludeExtraneousValues: true });
        //excludeExtraneousValues set to true - whenever we have instance of UserDto and trying turn into
        // plain JSON, it ensures that we share/expose only these fields that we specified in Dto as EXPOSE
      }),
    );
  }
}
