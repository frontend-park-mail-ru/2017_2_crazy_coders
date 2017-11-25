export default class Snap {
    position: Object;
    tankAngle: number;
    turretAngle: number;

    constructor(x: number, y: number, tnkAng: number, trrAng: number) {
        this.position = {x: x,
                         y: y};
        this.tankAngle = tnkAng;
        this.turretAngle = trrAng;
    }

    get playerSnap() {
        return {
            position: this.position,
            tankAngle: this.tankAngle,
            turretAngle: this.turretAngle
        };
    }

}