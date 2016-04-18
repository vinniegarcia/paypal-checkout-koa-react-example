import React from 'react';
import escapeHtml from 'escape-html';
import ReactDomServer from 'react-dom/server';
import Layout from './layout';
import Content from '../components/content';

const Index = ({title, list}) => {
    // pass data to client side js
    // xss!!!
    var dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(list))}';`;
    // render as a dynamic react component
    var contentString = ReactDomServer.renderToString(<Content list={list} />);

    return (
      <Layout title={title}>
        <h1>{title}</h1>
        <div id="inner" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
        
        <script dangerouslySetInnerHTML={{__html: dataScript}}></script>
      </Layout>
    );
};

export default Index;