import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //wrapper around a value and set up subscriptions to that value

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    private messages = signal<string[]>([]);
    allMessages = this.messages.asReadonly();
    addMessage(message: string) {
        this.messages.update((prevMessages) => [...prevMessages, message]);
    }

    // messages$ = new BehaviorSubject<string[]>([])
    // private messages: string[] = [];
    // get allMessages() {
    //     return [...this.messages]
    // }

    // addMessage(message: string) {
    //     this.messages = [...this.messages, message]
    //     this.messages$.next([...this.messages])
    // }

}