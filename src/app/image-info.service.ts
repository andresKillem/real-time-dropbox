import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ImageInfo } from './model/image-info';


@Injectable({
  providedIn: 'root'
})
export class ImageInfoService {

  private host: string;
  private port: string;
  private basePath: string;
  private imageInfoUrl: string;
  constructor(private http: HttpClient) {
    this.host = 'localhost';
    this.port = '8080';
    this.basePath = 'getFileInfo';
    this.imageInfoUrl = `http://${this.host}:${this.port}/${this.basePath}`;
   }

  // Get image info based on the identifier: background/temp-background.
  getFileInfo(identifier: string): Observable<ImageInfo> {
    return this.http.get<ImageInfo>(`${this.imageInfoUrl}/${identifier}`)
    .pipe(
      catchError<ImageInfo, ImageInfo>(this.handleError('getImageInfo', {}))
    );
  }

  // Error handler.
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
