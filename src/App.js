import React from 'react';
import Layout from './components/Layout/Layout';
import NeuralNetForm from './containers/NeuralNetForm/NeuralNetForm';
import ImageUpload from './containers/ImageUpload/ImageUpload';
import HandSimulation from "./containers/HandSimulation/HandSimulation";

function App() {
    return (
        <div>
            <Layout>
                <ImageUpload/>
                <HandSimulation />
                <NeuralNetForm/>
            </Layout>
        </div>
    );
}

export default App;
