import InApp from 'detect-inapp';

const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
console.log(inapp);

function DetectInApp() {
    return (
      <div>
        <h2>Detect InApp Library</h2>
        <ul>
          <li><b>User Agent:</b> {inapp.ua}</li>
          <li><b>Browser Type:</b> {inapp.browser}</li>
          <li><b>In App?</b> {inapp.isInApp ? "Yes ✅" : "No ❌"}</li>
          <li><b>Desktop?</b> {inapp.isDesktop ? "Yes ✅" : "No ❌"}</li>
          <li><b>Mobile?</b> {inapp.isMobile ? "Yes ✅" : "No ❌"}</li>
        </ul>
      </div>
    );
  }
  
  export default DetectInApp;