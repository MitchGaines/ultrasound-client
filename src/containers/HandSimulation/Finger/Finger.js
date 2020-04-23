import * as Three from 'three';
import * as ThreeSTLLoader from 'three-stl-loader';

class Finger {

    constructor(scene, stl, position, rotation) {
        this.finger_obj = null;
        this.init_rotation = rotation;
        let STLLoader = new ThreeSTLLoader(Three);
        let stl_load = new STLLoader();
        let material = new Three.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
        const stlOnLoadFunc = ((geometry) => {
            this.finger_obj = new Three.Mesh( geometry, material );
            this.finger_obj.position.set( position[0], position[1], position[2] );
            this.finger_obj.rotation.set( rotation[0], rotation[1], rotation[2]);
            this.finger_obj.scale.set( 0.5, 0.5, 0.5 );
            this.finger_obj.castShadow = true;
            this.finger_obj.receiveShadow = true;
            scene.add(this.finger_obj)
        }).bind(this);

        stl_load.load(stl, stlOnLoadFunc);
    }

    setPose(base_pose, top_pose) {
        if(this.finger_obj) {
            // get angle of rotation from top_pose
            this.finger_obj.position.x = base_pose[0];
            this.finger_obj.position.y = base_pose[1];
            this.finger_obj.position.z = base_pose[2];

            let adjusted_rotation = Math.PI/2 - Math.atan2(top_pose[1]-base_pose[1], top_pose[2]-base_pose[2]);

            this.finger_obj.rotation.x = this.init_rotation[0] + adjusted_rotation;

        }
    };
}

export default Finger;