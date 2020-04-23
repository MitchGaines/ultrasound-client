import * as Three from 'three';
import * as ThreeSTLLoader from 'three-stl-loader';

class Finger {

    constructor(scene, stl, position, rotation) {
        this.finger_obj = null;
        this.init_position = position;
        this.init_rotation = rotation;
        this.current_position = this.init_position;
        this.current_rotation = this.init_rotation;
        let STLLoader = new ThreeSTLLoader(Three);
        let stl_load = new STLLoader();
        let material = new Three.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
        const stlOnLoadFunc = ((geometry) => {
            this.finger_obj = new Three.Mesh( geometry, material );
            let mesh_axes = new Three.AxesHelper(70);
            this.finger_obj.add(mesh_axes);
            this.finger_obj.position.set( position[0], position[1], position[2] );
            this.finger_obj.rotation.set( rotation[0], rotation[1], rotation[2]);
            this.finger_obj.scale.set( 0.5, 0.5, 0.5 );
            this.finger_obj.castShadow = true;
            this.finger_obj.receiveShadow = true;
            scene.add(this.finger_obj)
        }).bind(this);

        stl_load.load(stl, stlOnLoadFunc);
    }

    setPose(position, rotation) {
        if(this.finger_obj) {
            this.finger_obj.position.x = position[0];
            this.finger_obj.position.y = position[1];
            this.finger_obj.position.z = position[2];
            /*
            this.finger_obj.rotation.x = rotation[0];
            this.finger_obj.rotation.y = rotation[1];
            this.finger_obj.rotation.z = rotation[2];
             */
        }
    };
}

export default Finger;