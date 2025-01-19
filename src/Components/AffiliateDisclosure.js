// AffiliateDisclosure.js
import React from 'react';
import '../Styles/AffiliateDisclosure.css'; // Importing the CSS file for styling

const AffiliateDisclosure = () => {
  return (
    <div className="affiliate-disclosure">
      <header className="disclosure-header">
        <h1>Amazon Affiliate Disclosure</h1>
      </header>
      <main className="disclosure-content">
        <p>
          This site participates in the Amazon Services LLC Associates Program, an affiliate 
          advertising program designed to provide a means for sites to earn advertising fees 
          by advertising and linking to Amazon.com. If you click on an Amazon link on this site 
          and make a purchase, we may receive a small commission at no additional cost to you.
        </p>
        <p>
          We only recommend products that we genuinely believe will add value to your experience. 
          The commissions we earn through these links help us maintain and improve our content.
        </p>
        <p>
          Thank you for supporting us through these purchases! Your support enables us to keep 
          producing quality content.
        </p>
      </main>
      <footer className="disclosure-footer">
        <p>Last updated: [01/01/2025]</p>
      </footer>
    </div>
  );
};

export default AffiliateDisclosure;