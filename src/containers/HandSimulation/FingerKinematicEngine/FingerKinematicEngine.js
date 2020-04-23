import { matrix, multiply } from 'mathjs';

function Fwkin() {}; // helper class to access objects globally

function FingerKinematicEngine(links, z_offset, x_offset) {
    Fwkin.links = links;
    Fwkin.z_offset = z_offset;
    Fwkin.x_offset = x_offset;
    Fwkin.angle_offset = Math.atan2(-x_offset, z_offset);
    console.log(Fwkin.angle_offset);
}

FingerKinematicEngine.prototype.doFwKin = (joints) => {
    let len_mcp = 1;
    let len_pip = 1;
    let len_dip = 1;

    let T00p = getTDH(Math.PI/2,0,0, Math.PI/2 + Fwkin.angle_offset);
    let T0pPalm = getTDH(0, Math.sqrt(Math.pow(Fwkin.z_offset,2) + Math.pow(Fwkin.x_offset,2)), Fwkin.links[0], -Fwkin.angle_offset);
    let TPalmMCPb = getTDH(joints[0], 0, len_mcp, 0);
    let TMCPbMCPt = getTDH(0, 0, Fwkin.links[1], 0);
    let TMCPtPIPb = getTDH(joints[1], 0, len_pip,0);
    let TPIPbPIPt = getTDH(0, 0, Fwkin.links[2], 0);
    let TPIPtDIPb = getTDH(joints[2], 0, len_dip, 0);
    let TDIPbDIPt = getTDH(0, 0, Fwkin.links[3], 0);

    let T0MCPb = multiply(T00p, T0pPalm, TPalmMCPb);
    Fwkin.MCPb = [T0MCPb.get([0,3]), T0MCPb.get([1,3]), T0MCPb.get([2,3])];

    let T0MCPt = multiply(T0MCPb, TMCPbMCPt);
    Fwkin.MCPt = [T0MCPt.get([0,3]), T0MCPt.get([1,3]), T0MCPt.get([2,3])];

    let T0PIPb = multiply(T0MCPt, TMCPtPIPb);
    Fwkin.PIPb = [T0PIPb.get([0,3]), T0PIPb.get([1,3]), T0PIPb.get([2,3])];

    let T0PIPt = multiply(T0PIPb, TPIPbPIPt);
    Fwkin.PIPt = [T0PIPt.get([0,3]), T0PIPt.get([1,3]), T0PIPt.get([2,3])];

    let T0DIPb = multiply(T0PIPt, TPIPtDIPb);
    Fwkin.DIPb = [T0DIPb.get([0,3]), T0DIPb.get([1,3]), T0DIPb.get([2,3])];

    let T0DIPt = multiply(T0DIPb, TDIPbDIPt);
    Fwkin.DIPt = [T0DIPt.get([0,3]), T0DIPt.get([1,3]), T0DIPt.get([2,3])];
};

FingerKinematicEngine.prototype.getFwkin = () => {
    return [Fwkin.MCPb, Fwkin.MCPt, Fwkin.PIPb, Fwkin.PIPt, Fwkin.DIPb, Fwkin.DIPt];
};

const getTDH = (theta, d, a, alpha) => {
    return matrix(
        [   [Math.cos(theta), -Math.sin(theta)*Math.cos(alpha), Math.sin(theta)*Math.sin(alpha), a*Math.cos(theta)],
            [Math.sin(theta), Math.cos(theta)*Math.cos(alpha), -Math.cos(theta)*Math.sin(alpha), a*Math.sin(theta)],
            [0, Math.sin(alpha), Math.cos(alpha), d],
            [0, 0, 0, 1]    ]);
};

export default FingerKinematicEngine;