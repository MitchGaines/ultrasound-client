import React from 'react';
import Layout from './components/Layout/Layout';
import NeuralNetForm from './containers/NeuralNetForm/NeuralNetForm';
import ImageUpload from './containers/ImageUpload/ImageUpload';
import ThreeDViewer from "./containers/ThreeDViewer/ThreeDViewer";

function App() {
    return (
        <div>
            <Layout>
                <ImageUpload/>
                <ThreeDViewer />
                <NeuralNetForm/>
            </Layout>
        </div>
    );
}

export default App;
