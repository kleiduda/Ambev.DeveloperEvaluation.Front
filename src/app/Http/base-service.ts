import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NotificationService } from '../shared/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {
    constructor(
        protected http: HttpClient,
        protected notificationService: NotificationService,
        @Inject(String) private baseUrl: string
    ) { }

    
}
