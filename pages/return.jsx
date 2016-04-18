import React from 'react';
import escapeHtml from 'escape-html';
import ReactDomServer from 'react-dom/server';
import Layout from './layout';

const ReturnPage = ({title}) => {
    return (
      <Layout title={title}>
        <h1>{title}</h1>
        <p>Transaction successful. Yay! 👏</p>
      </Layout>
    );
};

export default ReturnPage;