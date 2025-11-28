import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl = '/api';
  constructor(private http: HttpClient) {}

  getThemes() { return this.http.get<any[]>(`${this.baseUrl}/themes`); }
  createCard(payload: any) { return this.http.post<any>(`${this.baseUrl}/cards`, payload); }
  getCardByToken(token: string) { return this.http.get<any>(`${this.baseUrl}/cards/token/${token}`); }
  listMessages(cardId: string) { return this.http.get<any[]>(`${this.baseUrl}/cards/${cardId}/messages`); }
  addMessage(cardId: string, payload: any) { return this.http.post<any>(`${this.baseUrl}/cards/${cardId}/messages`, payload); }
  suggestMessage(payload: any) { return this.http.post<any>(`${this.baseUrl}/ai/suggest-message`, payload); }
  listCollections() { return this.http.get<any[]>(`${this.baseUrl}/collections`); }
  listWorkspaceCards(workspaceId: string) { return this.http.get<any[]>(`${this.baseUrl}/workspaces/${workspaceId}/cards`); }
}
