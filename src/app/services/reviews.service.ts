import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiKey = 'AIzaSyBix3ZsT3JPeARKm4rfTlt8DKaEUWT254Y'; // replace with your key
  private placeId = 'ChIJ2ZGFX3m_1DsR03iu1WEe6PQ'; // replace with your clinic's Place ID

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    const url = `https://places.googleapis.com/v1/places/${this.placeId}`;
    return this.http.get(url, {
      params: {
        fields: 'reviews',
        key: this.apiKey
      }
    });
  }  
  
  
}
