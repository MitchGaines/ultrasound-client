import React from 'react';
import Layout from './components/Layout/Layout';
import NeuralNetForm from './containers/NeuralNetForm/NeuralNetForm';
import ImageUpload from './containers/ImageUpload/ImageUpload';

function App() {
  return (
    <div>
        <Layout>
            <NeuralNetForm />
            <ImageUpload />
        </Layout>
    </div>
  );
}

export default App;
