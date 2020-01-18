import { Injectable } from "@angular/core";

@Injectable()
export class GitService {
    private username: string;
    private apiUrl: string = "https://api.github.com/users/";
    private apiKey: string = environment.accessToken;
}