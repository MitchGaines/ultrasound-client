import { matrix, multiply } from 'mathjs';

class FingerKinematicEngine {

    constructor(links, z_offset, x_offset) {
        this.links = links;
        this.z_offset = z_offset;
        this.x_offset = x_offset;
        this.angle_offset = Math.atan2(-x_offset, z_offset);
    }

    doFwKin = (joints) => {
        let len_mcp = 1;
        let len_pip = 1;
        let len_dip = 1;

        let T00p = this.getTDH(Math.PI/2,0,0, Math.PI/2 + this.angle_offset);
        let T0pPalm = this.getTDH(0, Math.sqrt(Math.pow(this.z_offset,2) + Math.pow(this.x_offset,2)), this.links[0], -this.angle_offset);
        let TPalmMCPb = this.getTDH(joints[0], 0, len_mcp, 0);
        let TMCPbMCPt = this.getTDH(0, 0, this.links[1], 0);
        let TMCPtPIPb = this.getTDH(joints[1], 0, len_pip,0);
        let TPIPbPIPt = this.getTDH(0, 0, this.links[2], 0);
        let TPIPtDIPb = this.getTDH(joints[2], 0, len_dip, 0);
        let TDIPbDIPt = this.getTDH(0, 0, this.links[3], 0);

        let T0MCPb = multiply(T00p, T0pPalm, TPalmMCPb);
        this.MCPb = [T0MCPb.get([0,3]), T0MCPb.get([1,3]), T0MCPb.get([2,3])];

        let T0MCPt = multiply(T0MCPb, TMCPbMCPt);
        this.MCPt = [T0MCPt.get([0,3]), T0MCPt.get([1,3]), T0MCPt.get([2,3])];

        let T0PIPb = multiply(T0MCPt, TMCPtPIPb);
        this.PIPb = [T0PIPb.get([0,3]), T0PIPb.get([1,3]), T0PIPb.get([2,3])];

        let T0PIPt = multiply(T0PIPb, TPIPbPIPt);
        this.PIPt = [T0PIPt.get([0,3]), T0PIPt.get([1,3]), T0PIPt.get([2,3])];

        let T0DIPb = multiply(T0PIPt, TPIPtDIPb);
        this.DIPb = [T0DIPb.get([0,3]), T0DIPb.get([1,3]), T0DIPb.get([2,3])];

        let T0DIPt = multiply(T0DIPb, TDIPbDIPt);
        this.DIPt = [T0DIPt.get([0,3]), T0DIPt.get([1,3]), T0DIPt.get([2,3])];
    };

    getFwkin = () => {
        return [this.MCPb, this.MCPt, this.PIPb, this.PIPt, this.DIPb, this.DIPt];
    };

    getTDH = (theta, d, a, alpha) => {
        return matrix(
            [   [Math.cos(theta), -Math.sin(theta)*Math.cos(alpha), Math.sin(theta)*Math.sin(alpha), a*Math.cos(theta)],
                [Math.sin(theta), Math.cos(theta)*Math.cos(alpha), -Math.cos(theta)*Math.sin(alpha), a*Math.sin(theta)],
                [0, Math.sin(alpha), Math.cos(alpha), d],
                [0, 0, 0, 1]    ]);
    };

}

export default FingerKinematicEngine;