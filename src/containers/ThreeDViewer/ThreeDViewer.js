import React, { Component } from 'react';
import * as Three from 'three';
import HandSTL from '../../assets/Hand.stl';
import * as ThreeSTLLoader from 'three-stl-loader';

class ThreeDViewer extends Component {

    componentDidMount() {
        let container, camera, cameraTarget, scene, renderer;

        const init = () => {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
            scene = new Three.Scene();
            camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set( 3, 0.15, 10 );
            cameraTarget = new Three.Vector3( 0, - 0.25, 0 );

            scene = new Three.Scene();
            scene.background = new Three.Color( 0x72645b );
            scene.fog = new Three.Fog( 0x72645b, 2, 15 );

            // Ground
            let plane = new Three.Mesh(
                new Three.PlaneBufferGeometry( 40, 40 ),
                new Three.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
            );
            plane.rotation.x = - Math.PI / 2;
            plane.position.y = - 0.5;
            scene.add( plane );

            plane.receiveShadow = true;

            let STLLoader = new ThreeSTLLoader(Three);
            let stlload = new STLLoader();
            let material = new Three.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
            stlload.load(HandSTL,  function ( geometry ) {
                let mesh = new Three.Mesh( geometry, material );
                mesh.position.set( 0, - 0.25, 0.6 );
                mesh.rotation.set( 0, - Math.PI / 2, 0 );
                mesh.scale.set( 0.5, 0.5, 0.5 );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            });

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
            camera.position.x = Math.cos( timer ) * 3;
            camera.position.z = Math.sin( timer ) * 3;
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