// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLR6q75PA5f/6b4gclw6r0PpuUhy4B5vP3wh5dRg8F"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLR6q75PA5f/6b4gclw6r0PpuUhy4B5vP3wh5dRg8F"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLR6q75PA5f/6b4gclw6r0PpuUhy4B5vP3wh5dRg8F"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
