export default class Snap {
    position: Object;
    tankAngle: number;
    turretAngle: number;
    userId: number;


    constructor(userId: number, x: number, y: number, tnkAng: number, trrAng: number) {
        this.userId = userId;
        this.position = {
            valX: x,
            valY: y
        };
        this.tankAngle = tnkAng;
        this.turretAngle = trrAng;
    }

    get playerSnap() {
        return {
            platform: this.position,
            platformAngle: this.tankAngle,
            turretAngle: this.turretAngle,
            isShoot: true,
            class: "TankSnap",
            userId: this.userId
        };
    }

}