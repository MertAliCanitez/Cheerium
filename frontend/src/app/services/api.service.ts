import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl = (window as any)?.__env?.apiBaseUrl || 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getThemes() { return this.http.get<any[]>(`${this.baseUrl}/themes`); }
  createCard(payload: any) { return this.http.post<any>(`${this.baseUrl}/cards`, payload, this.authOptions()); }
  getCardByToken(token: string) { return this.http.get<any>(`${this.baseUrl}/cards/token/${token}`); }
  listMessages(cardId: string) { return this.http.get<any[]>(`${this.baseUrl}/cards/${cardId}/messages`); }
  addMessage(cardId: string, payload: any) { return this.http.post<any>(`${this.baseUrl}/cards/${cardId}/messages`, payload); }
  suggestMessage(payload: any) { return this.http.post<any>(`${this.baseUrl}/ai/suggest-message`, payload); }
  listCollections() { return this.http.get<any[]>(`${this.baseUrl}/collections`, this.authOptions()); }
  listWorkspaceCards(workspaceId: string) { return this.http.get<any[]>(`${this.baseUrl}/workspaces/${workspaceId}/cards`, this.authOptions()); }

  login(payload: any) { return this.http.post<any>(`${this.baseUrl}/auth/login`, payload); }
  register(payload: any) { return this.http.post<any>(`${this.baseUrl}/auth/register`, payload); }

  private authOptions() {
    const token = localStorage.getItem('jwt');
    if (!token) return {};

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return { headers };
  }
}
