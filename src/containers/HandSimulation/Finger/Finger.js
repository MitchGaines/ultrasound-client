import * as Three from 'three';
import * as ThreeSTLLoader from 'three-stl-loader';


class Finger {
    constructor(scene, stl, position, rotation) {
        let finger_obj;
        let STLLoader = new ThreeSTLLoader(Three);
        let stl_load = new STLLoader();
        let material = new Three.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );

        stl_load.load(stl,  function (geometry ) {
            finger_obj = new Three.Mesh( geometry, material );
            let mesh_axes = new Three.AxesHelper(70);
            finger_obj.add(mesh_axes);
            finger_obj.position.set( position[0], position[1], position[2] );
            finger_obj.rotation.set( rotation[0], rotation[1], rotation[2]);
            finger_obj.scale.set( 0.5, 0.5, 0.5 );
            finger_obj.castShadow = true;
            finger_obj.receiveShadow = true;
            scene.add(finger_obj)
        });
    }

}

export default Finger;