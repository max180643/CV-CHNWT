import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='name' content='Chanwit Settavongsin · Curriculum Vitae' />
          <meta name='description' content={`Hi, I'm Chanwit Settavongsin.`} />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel='stylesheet' />
        </Head>
        <body className='bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
