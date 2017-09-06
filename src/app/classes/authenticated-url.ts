export class AuthenticatedUrl {

    public loginUrl(): string {
        const base_url: string = "https://accounts.spotify.com/authorize?",
            client_id: string = "16c81a87f384470db2d99358b40a824a",
            redirect_url: string = "http://localhost:8080/set-token",
            response_type: string = "token",
            scope: string = "user-library-read%20user-library-modify";

        return `${base_url}
        scope=${scope}&
        client_id=${client_id}&
        response_type=${response_type}&
        redirect_url=${redirect_url}`
    }
}
