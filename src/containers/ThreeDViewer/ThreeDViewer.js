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

class ThreeDViewer extends Component {

    componentDidMount() {
        let container, camera, cameraTarget, scene, renderer;

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
                let mesh = new Three.Mesh( geometry, material );
                mesh.position.set( 0, 0, 0 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI/2);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Thumb 1
            stl_load.load(RHThumb1STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( 24, 28, 9.5 );
                mesh.rotation.set(-Math.PI/4,Math.PI/3-0.15,Math.PI/2);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Thumb 2
            stl_load.load(RHThumb2STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( 38, 35, 16.5 );
                mesh.rotation.set(-Math.PI/4,Math.PI/3-0.15,Math.PI/2);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Index 1
            stl_load.load(RHIndex1STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( 8, 53, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Index 2
            stl_load.load(RHIndex2STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( 8, 73, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Index 3
            stl_load.load(RHIndex3STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( 8, 85.5, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Middle 1
            stl_load.load(RHMiddle1STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -2.5, 52, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Middle 2
            stl_load.load(RHMiddle2STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -2.5, 74, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Middle 3
            stl_load.load(RHMiddle3STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -2.5, 88, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Ring 1
            stl_load.load(RHRing1STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -13, 50, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Ring 2
            stl_load.load(RHRing2STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -13, 70.5, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Ring 3
            stl_load.load(RHRing3STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -13, 83.5, -7 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Pinky 1
            stl_load.load(RHPinky1STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -23, 43, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Pinky 2
            stl_load.load(RHPinky2STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -23, 60, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

            // Pinky 3
            stl_load.load(RHPinky3STL,  function (geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                let mesh_axes = new Three.AxesHelper(70);
                mesh.add(mesh_axes);
                mesh.position.set( -23, 70, -6 );
                mesh.rotation.set( -Math.PI/2, 0, Math.PI);
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

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
            camera.position.y = 120;
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

export default ThreeDViewer;