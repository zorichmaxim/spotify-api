export class AuthenticatedUrl {
    private base_url: string = "https://accounts.spotify.com/authorize?";
    private client_id: string = "16c81a87f384470db2d99358b40a824a";
    private redirect_url: string = "http://localhost:8080/set-token";
    private response_type: string = "token";
    private scope: string = "user-library-read%20user-library-modify";

    public loginUrl(): string {
        return `${this.base_url}
        scope=${this.scope}&
        client_id=${this.client_id}&
        response_type=${this.response_type}&
        redirect_url=${this.redirect_url}`
    }
}
