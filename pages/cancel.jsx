import React from 'react';
import escapeHtml from 'escape-html';
import ReactDomServer from 'react-dom/server';
import Layout from './layout';

const CancelPage = ({title}) => {
    return (
      <Layout title={title}>
        <h1>{title}</h1>
        <p>Transaction cancelled. Try again, pretty please? 😥</p>
      </Layout>
    );
};

export default CancelPage;