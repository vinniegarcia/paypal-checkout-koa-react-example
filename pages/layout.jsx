import React from 'react';

const Layout = ({children, title}) => {
    return (
       <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          <div id="content">
          {children}
          </div>
          <script src="/js/dist/bundle.js"></script>
        </body>
      </html> 
    );
};

export default Layout;