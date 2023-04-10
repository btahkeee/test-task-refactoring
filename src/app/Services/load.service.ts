export class LoadService<T> {
    async loadData(loadUrl: string): Promise<T[]> {
        return await (await fetch(loadUrl)).json();
    }
}