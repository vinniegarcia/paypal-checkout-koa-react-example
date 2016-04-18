import React from 'react';
import escapeHtml from 'escape-html';
import ReactDomServer from 'react-dom/server';
import Layout from './layout';
import Incontext from '../components/incontext';
import config from '../server/config';

const Index = ({title, list}) => {
    // pass data to client side js
    // xss!!!
    var dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(list))}';
    window.__paypal__ = '${escapeHtml(JSON.stringify(config.paypal))}';`;
    // render as a dynamic react component
    var contentString = ReactDomServer.renderToString(<Incontext list={list} />);
    console.log('CONTENT: ', contentString);
    
    return (
      <Layout title={title}>
        <h1>{title}</h1>
        <div id="inner" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
        <script dangerouslySetInnerHTML={{ __html: dataScript }}></script>
        <script src="//www.paypalobjects.com/api/checkout.src.js"></script>
        <script src="/js/incontext-checkout.js"></script>
        <script>
            incontextSetup(window.paypal);
        </script>
      </Layout>
    );
};

export default Index;