import express  from 'express';
// import React    from 'react';
// import ReactDom from 'react-dom/server';
// import App      from 'components/App';
// import News     from 'components/News';

const app = express();

app.use((req, res) => {
  const componentHTML = ' '; // ReactDom.renderToString(<App />);

  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';


function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <script src="//vk.com/js/api/openapi.js"></script>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
        <script language="javascript">
          VK.init({
            apiId: 5087365
          });
          </script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
