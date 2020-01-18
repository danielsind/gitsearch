import { Injectable } from "@angular/core";
import {environment} from '..././environments/environment.ts'

@Injectable()
export class GitService {
    private username: string;
    private apiUrl: string = "https://api.github.com/users/";
    private apiKey: string = environment.accessToken;
}