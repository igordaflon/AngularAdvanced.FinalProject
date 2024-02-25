export class LocalStorageUtils {
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('dev.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('dev.token');
        localStorage.removeItem('dev.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('dev.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('dev.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('dev.user', JSON.stringify(user));
    }
}