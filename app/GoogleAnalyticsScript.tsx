import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ2"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-E720JHXSJ1');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
