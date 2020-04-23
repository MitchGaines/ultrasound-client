import React, { Component } from 'react';
import * as Three from 'three';
import RHPalmSTL from '../../assets/FlexyRH/RH_palm.stl';
import RHThumb1STL from '../../assets/FlexyRH/RH_1-1.stl';
import RHThumb2STL from '../../assets/FlexyRH/RH_1-2.stl';
import RHIndex1STL from '../../assets/FlexyRH/RH_2-1.stl';
import RHMiddle1STL from '../../assets/FlexyRH/RH_3-1.stl';
import RHRing1STL from '../../assets/FlexyRH/RH_4-1.stl';
import RHPinky1STL from '../../assets/FlexyRH/RH_5-1.stl';
import RHIndex2STL from '../../assets/FlexyRH/RH_2-2.stl';
import RHMiddle2STL from '../../assets/FlexyRH/RH_3-2.stl';
import RHRing2STL from '../../assets/FlexyRH/RH_4-2.stl';
import RHPinky2STL from '../../assets/FlexyRH/RH_5-2.stl';
import RHIndex3STL from '../../assets/FlexyRH/RH_2-3.stl';
import RHMiddle3STL from '../../assets/FlexyRH/RH_3-3.stl';
import RHRing3STL from '../../assets/FlexyRH/RH_4-3.stl';
import RHPinky3STL from '../../assets/FlexyRH/RH_5-3.stl';
import * as ThreeSTLLoader from 'three-stl-loader';
import Finger from './Finger/Finger';
import FingerKinematicEngine from "./FingerKinematicEngine/FingerKinematicEngine";

class HandSimulation extends Component {

    componentDidMount() {
        let container, camera, cameraTarget, scene, renderer;
        let palm, thumb_1, thumb_2,
            index_1, index_2, index_3,
            middle_1, middle_2, middle_3,
            ring_1, ring_2, ring_3,
            pinky_1, pinky_2, pinky_3;

        // let thumb_finger = new FingerKinematicEngine([mcp, mcp, 10], [thumb_1, thumb_2]);
        let index_finger = new FingerKinematicEngine([53, 19, 11], -8, -6);
        // let middle_finger = new FingerKinematicEngine([mcp, mcp, 10], [middle_1, middle_2, middle_3]);
        // let ring_finger = new FingerKinematicEngine([mcp, mcp, 10], [ring_1, ring_2, ring_3]);
        // let pinky_finger = new FingerKinematicEngine([mcp, mcp, 10], [pinky_1, pinky_2, pinky_3]);

        const init = () => {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
            scene = new Three.Scene();
            camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set( 120, 120, 120 );
            cameraTarget = new Three.Vector3( 0, 70, 0);

            scene = new Three.Scene();
            scene.background = new Three.Color( 0x72645b );

            // HAND
            let STLLoader = new ThreeSTLLoader(Three);
            let stl_load = new STLLoader();
            let material = new Three.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );

            stl_load.load(RHPalmSTL,  function (geometry ) {
                palm = new Three.Mesh( geometry, material );
                palm.position.set( 0, 0, 0 );
                palm.rotation.set( -Math.PI/2, 0, Math.PI/2);
                palm.scale.set( 0.5, 0.5, 0.5 );
                palm.castShadow = true;
                palm.receiveShadow = true;
                scene.add( palm );
            });

            thumb_1 = new Finger(scene, RHThumb1STL, [24, 28, 9.5], [-Math.PI/4, Math.PI/3-0.15, Math.PI/2]);
            thumb_2 = new Finger(scene, RHThumb2STL, [38, 35, 16.5], [-Math.PI/4, Math.PI/3-0.15, Math.PI/2]);
            index_1 = new Finger(scene, RHIndex1STL, [8, 53, -6], [-Math.PI/2, 0, Math.PI]);
            index_2 = new Finger(scene, RHIndex2STL, [8, 73, -6], [-Math.PI/2, 0, Math.PI]);
            index_3 = new Finger(scene, RHIndex3STL, [8, 85.5, -6], [-Math.PI/2, 0, Math.PI]);
            middle_1 = new Finger(scene, RHMiddle1STL, [-2.5, 52, -7], [-Math.PI/2, 0, Math.PI]);
            middle_2 = new Finger(scene, RHMiddle2STL, [-2.5, 74, -7], [-Math.PI/2, 0, Math.PI]);
            middle_3 = new Finger(scene, RHMiddle3STL, [-2.5, 88, -7], [-Math.PI/2, 0, Math.PI]);
            ring_1 = new Finger(scene, RHRing1STL, [-13, 50, -7 ], [-Math.PI/2, 0, Math.PI]);
            ring_2 = new Finger(scene, RHRing2STL, [-13, 70.5, -7 ], [-Math.PI/2, 0, Math.PI]);
            ring_3 = new Finger(scene, RHRing3STL, [-13, 83.5, -7 ], [-Math.PI/2, 0, Math.PI]);
            pinky_1 = new Finger(scene, RHPinky1STL, [-23, 43, -6 ], [-Math.PI/2, 0, Math.PI]);
            pinky_2 = new Finger(scene, RHPinky2STL, [-23, 60, -6 ], [-Math.PI/2, 0, Math.PI]);
            pinky_3 = new Finger(scene, RHPinky3STL, [-23, 70, -6 ], [-Math.PI/2, 0, Math.PI]);

            // Axes
            let scene_axes = new Three.AxesHelper( 500);
            scene.add( scene_axes );

            // Lights
            scene.add( new Three.HemisphereLight( 0x443333, 0x111122 ) );
            addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
            addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );

            // renderer
            renderer = new Three.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.outputEncoding = Three.sRGBEncoding;

            renderer.shadowMap.enabled = true;

            container.appendChild(renderer.domElement);

            window.addEventListener( 'resize', onWindowResize, false );
        };

        const addShadowedLight = (x, y, z, color, intensity) => {
            let directionalLight = new Three.DirectionalLight( color, intensity );
            directionalLight.position.set( x, y, z );
            scene.add( directionalLight );

            directionalLight.castShadow = true;

            var d = 1;
            directionalLight.shadow.camera.left = - d;
            directionalLight.shadow.camera.right = d;
            directionalLight.shadow.camera.top = d;
            directionalLight.shadow.camera.bottom = - d;

            directionalLight.shadow.camera.near = 1;
            directionalLight.shadow.camera.far = 4;

            directionalLight.shadow.bias = - 0.002;
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );
        };

        const animate = () => {
            requestAnimationFrame( animate );
            render();
        };

        const render = () => {
            let timer = Date.now() * 0.0005;
            camera.position.x = Math.sin( timer ) * 100;
            camera.position.z = Math.cos( timer ) * 100;
            console.log(Math.abs(Math.sin(timer) * Math.PI/2));
            camera.position.y = 120;

            // make sure all the components are loaded before doing anything with them
            if(index_1 && index_2 && index_3
                && middle_1 && middle_2 && middle_3
                && ring_1 && ring_2 && ring_3
                && pinky_1 && pinky_2 && pinky_3) {
                for(let i = 1; i <= 90; i++){
                    // iterate degrees 1-90
                    // index_3.setPose([Math.abs(Math.sin(timer)*50)-6], []);
                    index_finger.doFwKin([Math.abs(Math.sin(timer) * Math.PI/2), Math.abs(Math.sin(timer) * Math.PI/2), 0]);

                    let index_fwkin = index_finger.getFwkin();

                    index_1.setPose(index_fwkin[0], [Math.atan2(index_fwkin[1][2]-53,index_fwkin[0][3]-6),0,0]);
                    index_2.setPose(index_fwkin[2], []);
                    index_3.setPose(index_fwkin[3], []);
                }
            }

            camera.lookAt( cameraTarget );
            renderer.render( scene, camera );
        };

        init();
        animate();
    }

    render() {
        return (
            <div />
        );
    }
}

export default HandSimulation;