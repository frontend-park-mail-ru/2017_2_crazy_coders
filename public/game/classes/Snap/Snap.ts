export default class Snap {
    position: Object;
    tankAngle: number;
    turretAngle: number;
    userId: number;
    username: string;
    isShoot: boolean;
    health: number;


    constructor(userId: number, username: string, x: number, y: number, tnkAng: number, trrAng: number, isShoot: boolean, health: number) {
        this.userId = userId;
        this.username = username;
        this.position = {
            valX: x,
            valY: y
        };
        this.tankAngle = tnkAng;
        this.turretAngle = trrAng;
        this.isShoot = isShoot;
        this.health = health;
    }

    get playerSnap() {
        return {
            platform: this.position,
            platformAngle: this.tankAngle,
            turretAngle: this.turretAngle,
            class: "TankSnap",
            userId: this.userId,
            username: this.username,
            isShoot: this.isShoot,
            health: this.health
        };
    }

}