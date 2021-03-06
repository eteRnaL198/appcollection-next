import '../styles/global.css'

const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps}/>
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return {pageProps};
  } else {
    return {};
  }
};

export default MyApp