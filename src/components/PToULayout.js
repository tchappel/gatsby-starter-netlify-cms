import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const PToULayout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div class="sky-body">
        <Helmet>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
            <meta name="robots" content="index, follow" />
            <meta name="referrer" content="unsafe-url" />
            <title>Payments | eBay.com</title>
            <meta name="description" content="Terms of Use for eBay Payment" />
            <meta name="image" content="https://ir.ebaystatic.com/pictures/aw/social/social-share-default.jpg" />
            <link rel="canonical" href="https://pages.ebay.com/payment/2.0/terms.html" />
            <meta property="fb:app_id" content="102628213125203" />
            <meta name="og:title" content="Payments" />
            <meta name="og:description" content="Terms of Use for eBay Payment" />
            <meta name="og:image" content="https://ir.ebaystatic.com/pictures/aw/social/social-share-default.jpg" />
            <meta name="og:image:secure_url" content="https://ir.ebaystatic.com/pictures/aw/social/social-share-default.jpg" />
            <meta name="og:url" content="https://pages.ebay.com/payment/2.0/terms/" />
            <meta name="og:site_name" content="Payments" />
            <meta name="og:locale" content="en" />
            <meta name="og:type" content="website" />
            <link rel="stylesheet" href="https://ir.ebaystatic.com/rs/c/market-sans-regular-bold.css" />
            <link rel="stylesheet" href="https://ir.ebaystatic.com/pictures/aw/pics/skinny/skinny-v2.4.0.min.css" />
            <link rel="stylesheet" href="https://ir.ebaystatic.com/pictures/aw/pics/payment/payment-2020.css" />
        </Helmet>
        {children}
    </div>
    );
};

export default PToULayout;
