export default class SpawnRequest {
    userId: number;
    username: string;

    constructor(userId: number, username: string) {
        this.userId = userId;
        this.username = username;
    }

    get spawnSnap() {
        return {
            class: "SpawnRequest",
            userId: this.userId,
            username: this.username
        };
    }
}