import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class BehaviorService {
    private messageSource = new BehaviorSubject<string>("default message");
    private currentMessage = this.messageSource.asObservable();

    public changeMessage(message:string): void{
        this.messageSource.next(message);
    }
}
