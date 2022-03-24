import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PToULayout from "../components/PToULayout";

export const PToUPageTemplate = ({ title }) => {
  return (
    <main className="ski-main">
      <header className="ski-main--header">
        <div className="ski-container">
          <h1>{title}</h1>
        </div>
      </header>
      <div className="ski-container">
        <div className="content">
          <nav className="content-nav">
            <p>
              <a href="#intro">Introduction</a>
            </p>
            <ol type="I">
              <li>
                <a href="#section-i">GENERAL PAYMENT TERMS</a>
                <ol type="1">
                  <li>
                    <a href="#article-1">About Payments on eBay Services</a>
                  </li>
                  <li>
                    <a href="#article-2">International Sales</a>
                  </li>
                  <li>
                    <a href="#article-3">Seller Payment Fees</a>
                  </li>
                  <li>
                    <a href="#article-4">Seller Onboarding</a>
                  </li>
                  <li>
                    <a href="#article-5">Shipping</a>
                  </li>
                  <li>
                    <a href="#article-6">Managed Payments Limitations</a>
                  </li>
                  <li>
                    <a href="#article-7">Using Managed Payments</a>
                  </li>
                  <li>
                    <a href="#article-8">
                      Security; Third-Party Payment Service Providers; Data
                      Protection
                    </a>
                  </li>
                  <li>
                    <a href="#article-9">
                      Collection of Fees and Other Amounts You Owe
                    </a>
                  </li>
                  <li>
                    <a href="#article-10">Amendment</a>
                  </li>
                  <li>
                    <a href="#article-11">Term, Termination</a>
                  </li>
                  <li>
                    <a href="#article-12">Assignment</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#section-ii">
                  ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY EBAY
                  COMMERCE INC.
                </a>
              </li>
              <li>
                <a href="#section-iii">
                  ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY EBAY
                  S.À.R.L.
                </a>
              </li>
              <li>
                <a href="#section-iv">
                  ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY EBAY
                  COMMERCE CANADA LTD.
                </a>
              </li>
              <li>
                <a href="#section-v">
                  ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY EBAY
                  COMMERCE AUSTRALIA PTY LTD.
                </a>
              </li>
              <li>
                <a href="#section-vi">
                  ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY EBAY
                  COMMERCE UK LTD.
                </a>
              </li>
            </ol>
            <p>
              <a
                className="ski-btn ski-btn--btn-pdf ski-btn--aggressive"
                href="https://ir.ebaystatic.com/cr/v/c1/ptou_us_140322_final.pdf"
                target="_top"
              >
                Download PDF
                <svg viewBox="0 0 14 14" className="ski-btn__arrow" alt="→">
                  <g transform="translate(-917 -1576)">
                    <path
                      d="M919.16,1319.411a.738.738,0,0,1-.51-.193.689.689,0,0,1-.207-.5.668.668,0,0,1,.208-.489c.206-.2,2.539-2.428,3.247-3.1h-7.237a.7.7,0,1,1,0-1.4H921.9c-.71-.676-3.01-2.868-3.248-3.106a.666.666,0,0,1,0-.993.7.7,0,0,1,.989-.029l.03.029c.28.28,4.882,4.667,4.928,4.712l.086.082-.086.081c-.047.045-4.7,4.493-4.93,4.711a.73.73,0,0,1-.508.2"
                      transform="translate(3.341 267.843)"
                    ></path>
                  </g>
                </svg>
              </a>
            </p>
            <p className="only-screen">
              <a href="https://pages.ebay.com/payment/2.0/previous-terms/">
                Previous Payments Terms of Use
              </a>
            </p>
          </nav>
          <div className="content-sections">
            <div className="learn-more__all learn-more__all-active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
              </svg>
              <p>Expand All</p>
            </div>
            <section className="content-sections--version">
              <p>
                <strong>
                  Effective upon acceptance for new sellers who successfully
                  complete the managed payments onboarding process on or after
                  March 18, 2022 at 00:00:00 (12:00 AM) Pacific Time; effective
                  from May 18, 2022 for all other sellers who have successfully
                  completed the onboarding process before March 18, 2022 at
                  00:00:00 (12:00 AM) Pacific Time.
                </strong>
              </p>
              <p className="only-screen">
                The previous version of these Payments Terms of Use can be
                accessed by clicking{" "}
                <a href="https://pages.ebay.com/payment/2.0/previous-terms/">
                  here
                </a>
                .
              </p>
            </section>
            <section id="intro">
              <h2>Introduction</h2>
              <p>
                These Payments Terms of Use (“Payments Terms of Use”) set out
                the terms on which the eBay Payment Entities set forth below
                offer you Payment Services (as defined below in Part I, Section
                1) in relation to your use of the eBay Services. Your use of the
                eBay Services will continue to be governed by the
                <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                applicable to you. Capitalized terms used, but not defined, in
                these Payments Terms of Use have the same meaning as set forth
                in the User Agreement. The applicable
                <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>
                , related eBay policies, or other agreements between you and us
                (for example, a billing agreement) may include provisions
                regarding your use of the eBay Services without Managed Payments
                (as defined below) which may conflict with these Payments Terms
                of Use. You understand that, with respect to our Payment
                Services, these Payments Terms of Use supersede any and all such
                conflicting provisions. You agree to comply with these Payments
                Terms of Use when accessing or using our Payment Services. If
                you disagree with any part of these Payments Terms of Use,
                please do not list items for sale on eBay.
              </p>
              <p>
                These Payments Terms of Use are between you and the applicable
                eBay Payment Entities, as set forth below. If you have
                international sales, you may receive Payment Services from one
                or more eBay Payment Entities, as described in Part I, Section 2
                below. In addition to the General Payments Terms (Part I of
                these Payments Terms of Use), each eBay Payment Entity has
                Additional Payments Terms (Parts II, III, IV, V and VI of these
                Payments Terms of Use) that apply to the Payment Services such
                entity provides. eBay Inc. and the companies it directly or
                indirectly controls, is controlled by, or is under common
                control with, are referred to as our “
                <strong>Affiliates</strong>.” The eBay Payment Entities are
                Affiliates of eBay Inc.
              </p>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>eBay Payment Entity</th>
                      <th>Contact Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>eBay Commerce Inc. (“eCI”)</strong> <br />
                          2065 Hamilton Avenue <br />
                          San Jose, CA 95126
                        </p>
                        <p>
                          <strong>
                            Part II (“Additional Terms for Services Provided by
                            eCI”) of these Payments Terms of Use contains an
                            Agreement to Arbitrate which will, with limited
                            exception, require you to submit claims you have
                            against us or our agents to binding and final
                            arbitration, unless you opt out of the Agreement to
                            Arbitrate (see Part II, Section 4 (“Legal
                            Disputes”), Subsection B ("Agreement to
                            Arbitrate")). If you do not opt out: (1) you will
                            only be permitted to pursue claims against us or our
                            agents on an individual basis, not as a plaintiff or
                            class member in any class or representative action
                            or proceeding and (2) you will only be permitted to
                            seek relief (including monetary, injunctive, and
                            declaratory relief) on an individual basis.
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          English:{" "}
                          <a href="https://www.ebay.com/help/home">
                            https://www.ebay.com/
                            <wbr />
                            help/home
                          </a>
                        </p>
                        <p>
                          Chinese:{" "}
                          <a href="https://ocsnext.ebay.com.hk/ocs/home">
                            https://ocsnext.ebay.com.hk/
                            <wbr />
                            ocs/home
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>eBay S.à.r.l. (“eBay Sarl”)</strong> <br />
                          22-24, Boulevard Royal <br />
                          L-2449 Luxembourg <br />
                          RCS registration number: B164557 <br />
                          VAT-ID LU26188648
                        </p>
                        <p>
                          eBay Sarl is authorized in Luxembourg as a payments
                          institution and subject to the supervision of the
                          Commission de Surveillance du Secteur Financier
                          (CSSF), 283 route d’Arlon, 1150 Luxembourg, (license
                          no. 33/19). You can check eBay Sarl’s registration
                          details by visiting the CSSF’s website at{" "}
                          <a href="http://www.cssf.lu/en/" target="_blank">
                            http://www.cssf.lu/en/
                          </a>
                          .
                        </p>
                      </td>
                      <td>
                        <p>
                          Germany:{" "}
                          <a href="https://www.ebay.de/help/home">
                            https://www.ebay.de/help/home
                          </a>
                        </p>
                        <p>
                          United Kingdom:{" "}
                          <a href="https://www.ebay.co.uk/help/home">
                            https://www.ebay.co.uk/help/home
                          </a>
                        </p>
                        <p>
                          France:{" "}
                          <a href="https://www.ebay.fr/help/home">
                            https://www.ebay.fr/help/home
                          </a>
                        </p>
                        <p>
                          Italy:{" "}
                          <a href="https://www.ebay.it/help/home">
                            https://www.ebay.it/help/home
                          </a>
                        </p>
                        <p>
                          Spain:{" "}
                          <a href="https://www.ebay.es/help/home">
                            https://www.ebay.es/help/home
                          </a>
                        </p>
                        <p>
                          Austria:{" "}
                          <a href="https://ocsnext.ebay.at/ocs/home">
                            https://ocsnext.ebay.at/ocs/home
                          </a>
                        </p>
                        <p>
                          Ireland:{" "}
                          <a href="https://ocsnext.ebay.ie/ocs/home">
                            https://ocsnext.ebay.ie/ocs/home
                          </a>
                        </p>
                        <p>
                          Switzerland:{" "}
                          <a href="https://ocsnext.ebay.ch/ocs/home">
                            https://ocsnext.ebay.ch/ocs/home
                          </a>
                        </p>
                        <p>
                          Belgium (French):{" "}
                          <a href="https://ocsnext.befr.ebay.be/ocs/home">
                            https://ocsnext.befr.ebay.be/ocs/home
                          </a>
                        </p>
                        <p>
                          Belgium (Dutch):{" "}
                          <a href="https://ocsnext.benl.ebay.be/ocs/home">
                            https://ocsnext.benl.ebay.be/ocs/home
                          </a>
                        </p>
                        <p>
                          Netherlands:{" "}
                          <a href="https://ocsnext.ebay.nl/ocs/home">
                            https://ocsnext.ebay.nl/ocs/home
                          </a>
                        </p>
                        <p>
                          Poland:{" "}
                          <a href="https://ocsnext.ebay.pl/ocs/home">
                            https://ocsnext.ebay.pl/ocs/home
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>eBay Commerce Canada Ltd. (“ECCA”)</strong>{" "}
                          <br />
                          44 Chipman Hill <br />
                          Suite 1000 <br />
                          Saint John NB E2L 2A9
                        </p>
                      </td>
                      <td>
                        <p>
                          English:{" "}
                          <a href="https://www.ebay.ca/help/home">
                            https://www.ebay.ca/
                            <wbr />
                            help/home
                          </a>
                        </p>
                        <p>
                          French:{" "}
                          <a href="https://www.cafr.ebay.ca/help/home">
                            https://www.cafr.ebay.ca/
                            <wbr />
                            help/home
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            eBay Commerce Australia Pty Ltd. (“ECA”)
                          </strong>{" "}
                          <br />
                          Level 18 <br />
                          1 York Street <br />
                          Sydney NSW 2000 <br />
                          Australia
                        </p>
                        <p>
                          ECA is registered as a remittance service provider
                          with, and is subject to the supervision of, the
                          Australian Transaction Reports and Analysis Centre
                          (“AUSTRAC”), PO Box 5516, West Chatswood NSW 1515. You
                          can check ECA’s registration by visiting AUSTRAC’s
                          website at
                          <a
                            href="https://online.austrac.gov.au/ao/public/rsregister.seam"
                            target="_blank"
                          >
                            https://online.austrac.gov.au/
                            <wbr />
                            ao/public/
                            <wbr />
                            rsregister.seam
                          </a>
                          .
                        </p>
                      </td>
                      <td>
                        <p>
                          <a href="https://www.ebay.com.au/help/home">
                            https://www.ebay.com.au/
                            <wbr />
                            help/home
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>eBay Commerce UK Ltd. (“ECUK”)</strong> <br />
                          1 More London Place, <br />
                          London, SE1, 2AF, United Kingdom
                        </p>
                        <p>
                          ECUK is authorized in the UK as a payment institution
                          and regulated by the Financial Conduct Authority
                          (“FCA”), with firm reference number 925354. You can
                          check ECUK’s registration details by visiting the
                          FCA’s website
                          <a href="https://register.fca.org.uk" target="_blank">
                            https://register.fca.org.uk
                          </a>
                          .
                        </p>
                      </td>
                      <td>
                        <p>
                          United Kingdom:
                          <a href="https://www.ebay.co.uk/help/home">
                            https://www.ebay.co.uk/
                            <wbr />
                            help/
                            <wbr />
                            home
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section id="section-i">
              <h2>I. GENERAL PAYMENT TERMS</h2>
              <p>
                This Part I of the Payments Terms of Use applies to all Payment
                Services you receive from the eBay Payment Entities (also
                collectively referred to as <strong>“we”</strong> or{" "}
                <strong>“us”</strong> in this Part).
              </p>
              <article id="article-1">
                <h3>1. About Payments on the eBay Services</h3>
                <p>
                  You agree to have the eBay Payment Entities receive or execute
                  payments on your behalf in relation to your use of the eBay
                  Services, and manage settlement of related payments to you
                  (referred to as “Managed Payments,” “Payment Services,” or
                  similar names).
                </p>
                <p>
                  Buyers may pay for your items using payment methods such as
                  the following, the availability of which may vary:
                </p>
                <ul>
                  <li>
                    Certain credit or debit cards (VISA, MasterCard, American
                    Express, and Discover),
                  </li>
                  <li>PayPal,</li>
                  <li>Google Pay,</li>
                  <li>Apple Pay,</li>
                  <li>Direct debit,</li>
                  <li>
                    “Pay Later” payment methods, otherwise known in some areas
                    as payment via installments, or “direct debit upon invoice”
                    or “payment upon invoice,” or “Buy Now Pay Later”,
                  </li>
                  <li>eBay coupons, gift cards, etc. (if applicable), or</li>
                  <li>
                    Funds held in a stored value account issued under eBay's
                    Balance Terms and Conditions (currently only available to
                    selected sellers residing or established in the United
                    States).
                  </li>
                </ul>
                <p>
                  We may modify the scope of payment methods available in our
                  sole discretion.
                </p>
                <p>
                  The underlying contract for the buyer’s purchase of “items”
                  (which may refer to goods and/or services) from you is
                  directly concluded between you and the buyer.
                </p>
                <p>
                  After a Managed Payments transaction occurs, you will receive
                  a notification confirming such payment transaction. We will
                  initiate settlement of proceeds received to your Linked
                  Financial Account (as defined below in Part I, Section 4
                  “Seller Onboarding”. You can access the status of your Managed
                  Payments transactions, including settlements and other payment
                  information, under the Payments tab in the{" "}
                  <a href="https://www.ebay.com/sh/landing">Seller Hub</a>,
                  which will be available to you when you successfully onboard
                  to Managed Payments. If a payment is made to you in error, or
                  if you receive funds that you are not otherwise entitled to
                  receive at the time of disbursement, we have the right to
                  recoup such amounts from you.
                </p>
              </article>
              <article id="article-2">
                <h3>2. International Sales</h3>
                <p>
                  <strong>
                    Because multiple eBay Payment Entities provide Payment
                    Services, you may receive Payment Services from more than
                    one eBay Payment Entity, as follows:
                  </strong>
                </p>
                <ul>
                  <li>
                    If you receive Payment Services from an eBay Payment Entity,
                    such entity is appointed to process transactions and manage
                    the settlement of funds related to your sales.
                  </li>
                  <li>
                    Each eBay Payment Entity is appointed to manage payments for
                    sales on one or more sites, as set forth in the table below
                    (<strong>“Responsible Payment Entity”</strong>). The site on
                    which you list your item will determine the Responsible
                    Payment Entity for a given sale. For example, ECA would be
                    the Responsible Payment Entity if you sell an item that you
                    listed on ebay.com.au.
                  </li>
                  <li>
                    Your <strong>“Payout Entity”</strong> is the eBay Payment
                    Entity associated with the country in which you reside or
                    are established as a business. Your Payout Entity is
                    assigned to you as illustrated in the table below, unless
                    you and we otherwise agree. You will receive all
                    disbursements to your Linked Financial Account from this
                    entity, regardless of where you list your items.
                  </li>
                  <li>
                    If you sell an item listed on an eBay site whose Responsible
                    Payment Entity is also your Payout Entity, your Payout
                    Entity will process the sale and settle the corresponding
                    funds to your Linked Financial Account. For example, if your
                    Payout Entity is ECCA, your funds awaiting payout from sales
                    on ebay.ca will be processed and settled to your Linked
                    Financial Account by ECCA.
                  </li>
                  <li>
                    If you sell an item listed on an eBay site whose Responsible
                    Payment Entity differs from your Payout Entity, the
                    Responsible Payment Entity will process the sale and
                    transfer the corresponding funds to your Payout Entity,
                    which will receive the funds on your behalf and in turn
                    disburse them to your Linked Financial Account. For example,
                    if your Payout Entity is eCI and you reside in an
                    “Additional Country” (as such term is defined in the chart
                    below), your funds awaiting payout from sales on ebay.de
                    will be managed by eBay Sarl and settled to eCI. eCI will
                    then disburse the funds to your Linked Financial Account.
                  </li>
                </ul>
                <p>The following table illustrates these distinctions:</p>
                <div className="table-container">
                  <table className="table-4">
                    <thead>
                      <tr>
                        <th>eBay Payment Entity</th>
                        <th>
                          Responsible Payment Entity for Sales of Items Listed
                          on
                        </th>
                        <th>
                          Payout Entity for Sellers Residing or Established in
                        </th>
                        <th>Additional Payments Terms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>eCI</td>
                        <td>ebay.com</td>
                        <td>
                          the United States (all references herein to the
                          “United States” shall include its territories)
                        </td>
                        <td>
                          <a href="#section-ii">
                            II. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED
                            BY eBay Commerce Inc.
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>eBay Sarl</td>
                        <td>
                          All European Economic Area (“EEA”) eBay sites
                          (including ebay.de, ebay.ie, ebay.fr, ebay.it,
                          ebay.es, ebay.at, ebay.nl, ebay.be, befr.ebay.be,
                          benl.ebay.be, ebay.pl etc.) and ebay.ch
                        </td>
                        <td>
                          EEA countries (except Iceland), the United Kingdom, or
                          Switzerland
                        </td>
                        <td>
                          <a href="#section-iii">
                            III. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED
                            BY eBay S.à.r.l.
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>ECCA</td>
                        <td>
                          ebay.ca <br />
                          cafr.ebay.ca
                        </td>
                        <td>Canada</td>
                        <td>
                          <a href="#section-iv">
                            IV. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED
                            BY eBay Commerce Canada Ltd.
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>ECA</td>
                        <td>ebay.com.au</td>
                        <td>
                          Australia. Where we choose in our sole discretion, ECA
                          may be the Payout Entity for sellers residing or
                          established in New Zealand as well.
                        </td>
                        <td>
                          <a href="#section-v">
                            V. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED BY
                            eBay Commerce Australia Pty Ltd.
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>ECUK</td>
                        <td>ebay.co.uk</td>
                        <td>N/A</td>
                        <td>
                          <a href="#section-vi">
                            VI. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED
                            BY eBay Commerce UK Ltd.
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>eCI</td>
                        <td>eBay sites not listed above</td>
                        <td>
                          All other countries (together, the “Additional
                          Countries”). Additional Countries include New Zealand
                          in situations where ECA is not the Payout Entity for
                          sellers residing or established in New Zealand.
                        </td>
                        <td>
                          <a href="#section-ii">
                            II. ADDITIONAL PAYMENT TERMS FOR SERVICES PROVIDED
                            BY eBay Commerce Inc.
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  If you reside outside the EEA (except Iceland), the United
                  Kingdom, and Switzerland, the performance of any Payment
                  Services provided to you by eBay Sarl and/or ECUK is deemed
                  suspended until an item you listed on a EEA, UK, or Swiss eBay
                  site is sold.
                </p>
                <article>
                  <h4>Payout Currency</h4>
                  <p>
                    Your “<strong>Payout Currency</strong>” is the currency that
                    we will use for settling your transaction proceeds to your
                    Linked Financial Account. We will generally determine your
                    Payout Currency as follows, unless you and we agree
                    otherwise:
                  </p>
                  <ul>
                    <li>
                      If you are a seller residing or established in the United
                      States, New Zealand, or any of the Additional Countries,
                      your Payout Currency is the US Dollar.
                    </li>
                    <li>
                      If you are a seller residing or established in an EEA
                      country (except Iceland), your Payout Currency will be the
                      Euro.
                    </li>
                    <li>
                      If you are a seller residing or established in the United
                      Kingdom, Switzerland, Liechtenstein, or Australia, your
                      Payout Currency will be based on your country of
                      residence.
                    </li>
                    <li>
                      If you are a seller residing or established in Canada,
                      your Payout Currency will be the Canadian Dollar or, if
                      offered by us and selected by you, the US Dollar.
                    </li>
                  </ul>
                  <p>
                    We may enable further Payout Currencies at our sole
                    discretion in the future. Where offered by us and agreed
                    upon by you and your buyer, your buyer may pay for an item
                    you sell with currency other than your Payout Currency. When
                    this happens, the paid amount will be converted into your
                    Payout Currency prior to disbursement of the funds to you,
                    using the applicable transaction exchange rate and assessing
                    the currency conversion charge as indicated on our Fee Page
                    described in Section 3 (“Seller Payment Fees”) below.
                    Similarly, your receipt of eBay Services from Affiliates may
                    cause you to incur fees which are published in a currency
                    other than your Payout Currency; if this happens, we may
                    convert such fees into your Payout Currency in the same
                    manner as described in the prior sentence.
                  </p>
                  <p>
                    Further, if you live in an Additional Country, the financial
                    institution you opened your Linked Financial Account with
                    may charge you a separate fee for converting your funds from
                    the US Dollar to your local currency.
                  </p>
                </article>
              </article>
              <article id="article-3">
                <h3>3. Seller Payment Fees</h3>
                <p>
                  The fees and expenses which we charge in relation to your use
                  of Managed Payments are, unless otherwise communicated to you,
                  set forth in the applicable fee page linked in the tables
                  below based on the country that you reside or are established
                  in (“<strong>Fee Page</strong>”). For instance, if you reside
                  in Australia and do not have an eBay store, clicking on the
                  “Australia” link in the “Sellers in ___ without eBay Stores”
                  column will take you to your applicable Managed Payments fee
                  page; in contrast, if you reside in Australia and have an eBay
                  store, you should click on the “Australia” link in the “eBay
                  Store Sellers in” column. Such fees and expenses are subject
                  to change, as set forth in the applicable User Agreement. For
                  instance, if the Australian User Agreement is applicable, we
                  may change our seller fees from time to time by posting the
                  changes on the Australian eBay site 30 days in advance, but
                  with no advance notice required for temporary promotions, new
                  services, or any changes that result in the reduction of fees.
                </p>
                <div className="table-container">
                  <table className="table-4">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Sellers in ____ without eBay Stores</strong>
                        </td>
                        <td>
                          <strong>eBay Store Sellers in</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com.au/help/selling/fees-credits-invoices/selling-fees-managed-payments-sellers-without-ebay-store?id=4822#currency">
                            Australia
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com.au/help/selling/fees-credits-invoices/ebay-stores-selling-fees-managed-payments-sellers?id=4809#currency">
                            Australia
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.ca/help/selling/fees-credits-invoices/selling-fees-managed-payments-sellers?id=4822#currency">
                            Canada (English)
                          </a>
                          ;
                          <a href="https://www.cafr.ebay.ca/help/selling/fees-credits-invoices/frais-de-mise-en-vente-pour-les-vendeurs-participant-aux-paiements-grs?id=4822#currency">
                            Canada (French)
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.ca/help/selling/fees-credits-invoices/store-selling-fees-managed-payments-sellers?id=4809#currency">
                            Canada (English)
                          </a>
                          ;
                          <a href="https://www.cafr.ebay.ca/help/selling/fees-credits-invoices/frais-de-mise-en-vente-dune-boutique-pour-les-vendeurs-participant-aux-paiements-grs?id=4809#currency">
                            Canada (French)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees-managed-payments-sellers?id=4822#currency">
                            United States
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/store-selling-fees-managed-payments-sellers?id=4809#currency">
                            United States
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-container">
                  <table className="table-4">
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            Private, Individual, or Non-Professional Sellers in
                          </strong>
                        </td>
                        <td>
                          <strong>Business or Professional Sellers in</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.at/pages/help/sell/fees2.html#currency">
                            Austria
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.at/pages/help/sell/businessfees2.html#currency">
                            Austria
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.benl.ebay.be/pages/help/sell/fees2.html#currency">
                            Belgium (Dutch)
                          </a>
                          ;{" "}
                          <a href="https://www.befr.ebay.be/pages/help/sell/fees2.html#currency">
                            Belgium (French)
                          </a>
                        </td>
                        <td>
                          <a href="https://www.benl.ebay.be/pages/help/sell/businessfees2.html#currency">
                            Belgium (Dutch)
                          </a>
                          ;{" "}
                          <a href="https://www.befr.ebay.be/pages/help/sell/businessfees2.html#currency">
                            Belgium (French)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            China (Mainland)
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            China (Mainland)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.fr/help/selling/fees-credits-invoices/services-de-paiement-frais-pour-les-vendeurs-particuliers?id=4822#currency">
                            France
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.fr/help/selling/fees-credits-invoices/services-de-paiement-frais-pour-les-vendeurs-professionnels?id=4809#currency">
                            France
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.de/help/selling/fees-credits-invoices/gebhren-fr-private-verkufer-die-der-zahlungsabwicklung-teilnehmen?id=4822#currency">
                            Germany
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.de/help/selling/fees-credits-invoices/gebhren-fr-gewerbliche-verkufer-die-der-zahlungsabwicklung-teilnehmen?id=4809#currency">
                            Germany
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Hong Kong
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Hong Kong
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.ie/pages/help/sell/fees2.html#currency">
                            Ireland
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.ie/pages/help/sell/businessfees2.html#currency">
                            Ireland
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.it/help/selling/fees-credits-invoices/servizi-di-pagamento-tariffe-per-venditori-non-professionali?id=4822#currency">
                            Italy
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.it/help/selling/fees-credits-invoices/servizi-di-pagamento-tariffe-per-venditori-professionali?id=4809#currency">
                            Italy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Macau
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Macau
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.nl/pages/help/sell/fees2.html#currency">
                            Netherlands
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.nl/pages/help/sell/businessfees2.html#currency">
                            Netherlands
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.pl/pages/help/sell/fees2.html#currency">
                            Poland
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.pl/pages/help/sell/businessfees2.html#currency">
                            Poland
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.es/help/selling/fees-credits-invoices/servicios-de-pago-comisiones-y-tarifas-para-vendedores-particulares?id=4822#currency">
                            Spain
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.es/help/selling/fees-credits-invoices/servicios-de-pago-comisiones-y-tarifas-para-vendedores-profesionales?id=4809#currency">
                            Spain
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.ch/pages/help/sell/fees2.html#currency">
                            Switzerland
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.ch/pages/help/sell/businessfees2.html#currency">
                            Switzerland
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Taiwan
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com.hk/pages/help/sell/fees-cbt-gc.html#currency">
                            Taiwan
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.co.uk/help/selling/fees-credits-invoices/fees-private-sellers-activated-managed-payments?id=4822#currency">
                            United Kingdom
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.co.uk/help/selling/fees-credits-invoices/fees-business-sellers-activated-managed-payments?id=4809#currency">
                            United Kingdom
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=5224">
                            Additional Countries and EEA Countries Not
                            Identified Above
                          </a>
                        </td>
                        <td>
                          <a href="https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=5224#currency">
                            Additional Countries and EEA Countries Not
                            Identified Above
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  In some circumstances, you might be eligible for a credit of
                  certain fees you paid, as described on the{" "}
                  <a href="https://www.ebay.com/help/selling/fees-credits-invoices/fee-credits?id=4128">
                    Fee Credits page
                  </a>
                  .
                </p>
              </article>

              <article id="article-4">
                <h3>4. Seller Onboarding</h3>
                <p>
                  In order to use our services, you must register and accept
                  these Payments Terms of Use. If you reside in the EEA, the
                  United Kingdom, or Switzerland, your submission of your
                  Managed Payments online registration application constitutes
                  your offer to conclude this agreement. If your onboarding is
                  not immediately confirmed, you will receive notification that
                  you have been approved to receive services once we have
                  reviewed your information.
                </p>
                <p>
                  To set up and use your eBay account for Managed Payments, you
                  must:
                </p>
                <ul>
                  <li>
                    Link a financial account, so you may receive settlements of
                    proceeds from Managed Payments to this account (
                    <strong>“Linked Financial Account”</strong>). If you reside
                    in the United States, Canada, the United Kingdom or
                    Australia, your Linked Financial Account must be a bank
                    account based in your country of residence. If you reside in
                    a country within the EEA (except Iceland), you may provide a
                    bank account located in any EEA member state (except
                    Iceland), as your Linked Financial Account. If you reside in
                    Switzerland or Liechtenstein, you must provide a bank
                    account located in Switzerland or Liechtenstein as your
                    Linked Financial Account. During registration, we may
                    provide you with the option to use a bank account located in
                    an Additional Country at our sole discretion. If you reside
                    in New Zealand or any other Additional Country, we may
                    require you to create and link an account with a specific
                    bank or a non-bank third-party financial institution as we
                    may direct. If we cannot make direct debits from your Linked
                    Financial Account for Owed Amounts (as defined in Section
                    9), we require you to keep another payment method on file
                    with us and we may withhold payouts to your Linked Financial
                    Account until you have successfully provided us with such
                    other payment method.
                  </li>
                  <li>
                    Regardless of any other terms about settlement methods on
                    the eBay Services (including{" "}
                    <a href="https://www.ebay.com/help/policies/payment-policies/payment-policies?id=4219">
                      eBay’s payment policies
                    </a>{" "}
                    and information available when you create listings, which
                    may continue to display settlement methods that are not
                    currently supported for payments that we manage),
                    disbursements via other settlement methods, such as to
                    PayPal, are not available at this time. You may change your
                    Linked Financial Account at any time. Payouts will be made
                    to your new Linked Financial Account subject to (i) your
                    completion of the Linked Financial Account verification
                    process, and (ii) the completion of our assessment for
                    security and risk purposes and under our anti-money
                    laundering and other legal obligations. Our assessment
                    typically takes up to two (2) days after your completion of
                    the verification process, or longer if any issues or
                    irregularities arise in which case we will complete our
                    assessment without undue delay. You represent and warrant
                    that you are the lawful owner of, or have the lawful right
                    to use, any Linked Financial Account you associate with your
                    eBay account.
                  </li>
                  <li>
                    Provide us with all information which we may require for
                    purposes that include: verifying your identity, complying
                    with applicable anti-money laundering and sanctions
                    screening obligations, allowing us to manage settlements of
                    your transaction proceeds, and assessing fraud and risk. If
                    you are an individual, this information may include, without
                    limitation, your full name, address, phone number, date of
                    birth, taxpayer identification number, bank account
                    information, and a form of government-issued identification
                    (e.g., a copy of your identity card or driver’s license). If
                    you are a business, this information may include, without
                    limitation, your full business name, address, phone number,
                    entity type, bank account information, tax identification
                    number, and business number, in addition to details
                    regarding your beneficial owner(s), director(s), officer(s),
                    authorized representative, and/or primary contact, such as
                    name, contact information, nationality, title, and
                    government-issued identification (such as a United States
                    Social Security Number). You understand that we will be
                    unable to settle your proceeds or issue you any tax
                    documents (such as a United States Internal Revenue Service
                    Form 1099-K) if you do not provide or appropriately update
                    us with accurate contact information and other requested
                    data.
                  </li>
                  <li>
                    Provide us with all information necessary to authenticate
                    you when you use Managed Payments, which may include
                    validation of your phone number or email. You understand
                    that we may be unable to execute certain transactions or
                    complete certain requests without this information.
                  </li>
                  <li>
                    Timely maintain the accuracy of the information we have on
                    file, and consent to our periodical updating of such stored
                    information based on information provided by you, your bank,
                    or other payments services providers. You will only provide
                    us information about payment or settlement methods that you
                    are authorized to use. You understand that if you update
                    information such as your country of residency, you may need
                    to repeat some or all of the onboarding steps described
                    above to continue using Payment Services.
                  </li>
                  <li>
                    Comply with all, and not cause a third party to violate any,
                    applicable laws, regulations, rules, and terms and
                    conditions in connection with your use of the eBay Services.
                    You understand that some third parties (such as banks,
                    credit and debit card issuers, credit and debit card
                    networks, and payments services providers) may have their
                    own terms and conditions for the payment or settlement
                    methods you or buyers choose to use in connection with
                    payments that we manage, such as terms and conditions that
                    relate to the settlement of funds, chargebacks, prohibited
                    items, and overdrafts. Failure to abide by third-party terms
                    and conditions may result in fees assessed to you, delays in
                    your receipt of funds, or other actions taken by such third
                    parties. You agree that we have no control over, or
                    responsibility or liability for, such fees, delays, or
                    actions.
                  </li>
                </ul>
                <p>
                  You authorize us and our Affiliates to check information you
                  provide to us, including by verifying the existence of your
                  bank account and obtaining reports from, or comparing your
                  information to, third-party sources. Such third-party sources
                  may include without limitation, banks, credit agencies, data
                  brokers, and other service providers. We reserve the right to
                  close, suspend, or limit your account or rescind your access
                  to Managed Payments in the event we are unable to obtain or
                  verify any of this information. We are not responsible for any
                  losses suffered by you as a result of incomplete or inaccurate
                  information you provide.
                </p>
              </article>
              <article id="article-5">
                <h3>5. Shipping</h3>
                <p>
                  When you receive notice that a buyer has paid for an item
                  through a Managed Payments transaction, you must then ship or
                  otherwise deliver your item in accordance with the buyer's
                  selection from the
                  <a href="https://www.ebay.com/help/selling/posting-items/setting-postage-options?id=4089">
                    shipping options
                  </a>{" "}
                  that you made available in your listing. You agree to deliver
                  all items purchased pursuant to the terms of your listing and
                  the
                  <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                    User Agreement
                  </a>
                  , and perform all other necessary transaction-related actions,
                  when we notify you that we have received payment from your
                  buyer.
                </p>
              </article>
              <article id="article-6">
                <h3>6. Managed Payments Limitations</h3>
                <p>
                  In some listings or categories, eBay may allow sellers to
                  offer buyers the option to pay for a purchase directly to the
                  seller without using the payment services offered by us under
                  these Payments Terms of Use, for example by cash payment on
                  pickup (“Offline Payment Methods”). We do not manage payments
                  for such Offline Payment Methods. Offline Payment Methods are
                  not covered by the eBay Money Back Guarantee or similar eBay
                  buyer protection programs; additionally, we will not assist
                  buyers or sellers with payment disputes (such as chargebacks)
                  in connection with Offline Payment Methods. Your listings are
                  subject to{" "}
                  <a href="https://www.ebay.com/help/policies/payment-policies/payment-policies?id=4219">
                    eBay’s payment policies
                  </a>{" "}
                  and any other terms about payments that may appear on the eBay
                  Services, including terms relating to the payment and
                  disbursement methods available to you for such listings.
                </p>
              </article>
              <article id="article-7">
                <h3>7. Using Managed Payments</h3>
                <article>
                  <h4>Returns and Cancellations; Refunds</h4>
                  <p>
                    If your buyer is entitled to a refund for a{" "}
                    <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259#Returns">
                      return or cancellation
                    </a>{" "}
                    for a Managed Payments transaction, based on an agreement
                    between you and the buyer or according to eBay’s policies
                    regarding such transaction, you authorize us to pay to the
                    buyer the corresponding refund amount on your behalf.
                  </p>
                </article>
                <article>
                  <h4>eBay Buyer Protection Programs</h4>
                  <p>
                    eBay offers buyer protection programs on certain eBay
                    Services to ensure that buyers receive the item they ordered
                    or get their money back. Such programs are referred to as “
                    <strong>
                      <a href="https://www.ebay.com/help/policies/ebay-money-back-guarantee-policy/ebay-money-back-guarantee-policy?id=4210">
                        eBay Buyer Protection Programs
                      </a>
                    </strong>
                    ,” and known in many jurisdictions as the “eBay Money Back
                    Guarantee” (<strong>“eMBG”</strong>). You understand that if
                    your buyer successfully files a claim under such program for
                    a Managed Payments transaction, the respective eBay company
                    offering the eBay Buyer Protection Program (“
                    <strong>eMBG Service Provider</strong>”) will reimburse the
                    buyer the amount owed on your behalf pursuant to the
                    applicable User Agreement and eMBG policy. According to the
                    applicable
                    <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a href="https://www.ebay.com/help/policies/ebay-money-back-guarantee-policy/ebay-money-back-guarantee-policy?id=4210">
                      eMBG policy
                    </a>
                    , you must reimburse the eMBG Service Provider for any such
                    amounts.
                  </p>
                </article>
                <article>
                  <h4>Disputes</h4>
                  <p>
                    A buyer (or the owner of a payment instrument) may initiate
                    a chargeback, direct debit reversal, or PayPal buyer
                    protection claim, or otherwise asks their financial
                    institution to open a payment dispute (all referred to
                    solely within this Part I as “<strong>Dispute</strong>”) in
                    connection with a Managed Payments transaction. The final
                    outcome of the Dispute will be decided by the buyer’s
                    financial institution.
                  </p>
                  <p>
                    We will manage Disputes, as follows: When a Dispute is
                    opened, we will notify you and ask you whether you choose to
                    accept or challenge the Dispute. If you accept the Dispute,
                    you agree to the reversal of the payment to the buyer. If
                    you challenge the Dispute, eBay will submit to the financial
                    institution any relevant evidence you provide about the
                    Dispute. You agree to provide timely information to assist
                    in the Dispute resolution process and understand that your
                    failure to provide requested information on the timeline we
                    require and as specified by credit and debit card networks'
                    and other payment service providers' rules could adversely
                    impact the outcome of a Dispute investigation, up to
                    complete forfeiture of the amounts in Dispute. If you accept
                    the Dispute or if the buyer’s financial institution decides
                    in favor of the buyer, the respective amount will be
                    refunded to the buyer's original payment method and charged
                    to us. You must reimburse us for such charges, unless you
                    are eligible for
                    <a href="https://www.ebay.com/help/policies/selling-policies/seller-protections?id=4345">
                      seller protection
                    </a>{" "}
                    in which case you are not held liable for amounts refunded
                    to the buyer. If you choose to accept the Dispute, we may
                    still decide to challenge the Dispute in our discretion and
                    at no additional costs to you.
                  </p>
                  <p>
                    Some payment institutions offer an optional arbitration
                    process to contest the results of an individual Dispute. We
                    may ask for your consent to participate in such arbitration
                    process. If you consent to chargeback arbitration, you
                    authorize us to represent and defend you throughout the
                    arbitration. You will be responsible for all costs and
                    expenses (including reasonable legal fees and any
                    arbitration fees assessed by third parties, arising from
                    such arbitration proceedings), as agreed between you and us
                    in each case, and you authorize us to pay these amounts on
                    your behalf while the arbitration is pending.
                  </p>
                  <p>
                    You will not contest the resolution of any Dispute that we
                    investigate and/or re-present, nor will you re-open resolved
                    Dispute investigations. If you are a consumer in the EU, UK
                    or Australia, your rights to file a complaint or to take
                    legal action in court remain unaffected.
                  </p>
                </article>
                <article>
                  <h4>Seller Protection</h4>
                  <p>
                    If you have met your eligibility requirements for, and
                    fulfilled all your applicable obligations, under the{" "}
                    <a href="https://www.ebay.com/help/policies/selling-policies/seller-protections?id=4345">
                      Seller Protection policy
                    </a>
                    , you will not be held liable for any amounts to be returned
                    to buyers due to eBay Buyer Protection Program claims and
                    Disputes.
                  </p>
                </article>
                <article>
                  <h4>Fines, Penalties and Losses</h4>
                  <p>
                    We are unable to manage payments for{" "}
                    <a href="https://www.ebay.com/help/policies/prohibited-restricted-items/prohibited-restricted-items?id=4207">
                      prohibited and restricted items
                    </a>
                    . Before listing your item, you must ensure it complies with
                    eBay’s rules, applicable laws, and any additional
                    restrictions imposed by credit card associations, network
                    rules, or third-party payments service providers that we may
                    use.
                  </p>
                  <p>
                    You agree to indemnify and reimburse us for all reversals,
                    chargebacks, claims, costs, losses, damages, fees, fines,
                    penalties and other liabilities and expenses incurred by us
                    or brought against us by a third party arising out of (a)
                    your breach of these Payments Terms of Use or the User
                    Agreement including without limitation any violation of
                    eBay’s policies; (b) your violation of any law or the rights
                    of a third party; or (c) any transaction processed by us for
                    you for an item or service you listed on eBay (including
                    without limitation the accuracy of your item description or
                    any claim or dispute arising out of items or services
                    offered or sold by you).
                  </p>
                </article>
                <article>
                  <h4>Holds</h4>
                  <p>
                    We reserve the right to manage the risks associated with
                    providing you the Payment Services, by placing restrictions
                    on your access to your funds when deemed necessary, as
                    described in further detail below.
                  </p>
                  <p>
                    You agree that we may place holds on your funds or instruct
                    a payment service provider to hold your funds, prior to
                    disbursement. For the avoidance of doubt, if you receive
                    funds to either a stored value account issued to you under
                    eBay’s Balance Terms and Conditions or to a payment account,
                    a hold may also be placed on such funds. If a hold is placed
                    on your funds, the amount and status of the hold will be
                    displayed under the Payments tab in the Seller Hub/My eBay.
                    We will notify you through the eBay Message Center and/or by
                    email and, depending on the reason, may request additional
                    information from you to help resolve the issue. A hold may
                    be placed if we have reason to believe there is an increased
                    risk associated with the provision of our Payment Services
                    or with a certain Managed Payments transaction; for example,
                    if we cannot verify your identity or if your buyer files a
                    dispute. Please see our{" "}
                    <a href="https://www.ebay.com/help/selling/getting-paid/getting-paid-items-youve-sold/pending-payments?id=4816">
                      holds help page
                    </a>{" "}
                    for more detail on the hold types and examples. We take into
                    consideration relevant factors when assessing the risks,
                    including selling history, seller performance, returns and
                    cancellations, chargebacks, riskiness of the listing
                    category, transaction value, the ability to make direct
                    debits from your Linked Financial Account, and the filing of
                    eBay Buyer Protection Program claims. We also may cancel or
                    freeze the settlement of your proceeds as necessary to
                    comply with our legal obligations in connection with fraud
                    prevention, risk management, or regulatory compliance. Any
                    hold placed on your funds will be lifted when the issue is
                    resolved.
                  </p>

                  <p>
                    Unless your payout entity is eBay Sarl or ECUK, we may
                    retain an amount that we reasonably believe may be necessary
                    to pay for any refunds, reimbursements, or other payments
                    associated with returns, Disputes, or other post-transaction
                    activities, when your eBay account is closed. Unless
                    otherwise required by law, we will settle any unused
                    retained amounts to your Linked Financial Account within 180
                    days of your eBay account closure.
                  </p>
                  <p>
                    Your bank’s holds and settlement procedures may at times
                    cause delays in the settlement of funds to your Linked
                    Financial Account, and we do not have control over these
                    delays.
                  </p>
                </article>
                <article>
                  <h4>Reserves</h4>
                  <p>
                    In order to manage risk or secure your obligations under
                    these Payments Terms of Use, we have the right to require a
                    reserve of transaction proceeds. This means that the
                    respective portion of your funds is reserved as unavailable
                    for disbursement. Reserves may be in the form of rolling
                    and/or minimum reserves.
                  </p>
                  <ul>
                    <li>
                      A rolling reserve is a reserve funded by withholding a set
                      percentage of your transaction proceeds each day for a
                      fixed period to be released to you later at a scheduled
                      time on a rolling basis. For example, we may require a
                      rolling reserve of 10% for a period of 60 days. Under this
                      requirement, 10% of your transaction proceeds earned on
                      day 1 will be withheld from your payouts and then be
                      released to you on day 61. Subsequently, 10% of your
                      transaction proceeds earned on day 2 will be withheld and
                      then released to you on day 62, and so forth. Rolling
                      reserves are the most common type of reserve.
                    </li>
                    <li>
                      A minimum reserve is a requirement to hold a specific
                      amount of money in your reserve. A minimum reserve may be
                      funded by contributing a set percentage of your daily
                      transaction proceeds to the reserve up to the minimum
                      requirement, or by setting-off the entire amount of the
                      minimum requirement from your pending payouts. For
                      example, if we require a minimum reserve of $5,000, the
                      reserve may be funded by contributing 10% of your
                      transaction proceeds to the reserve each day until the
                      amount reaches $5,000. Alternately, if your pending
                      payouts equal or exceed $5,000, the minimum reserve may be
                      funded by setting off the reserve requirement from your
                      pending payouts at one-time in full.
                    </li>
                  </ul>
                  <p>
                    We may require a reserve if we have reason to believe there
                    is an increased risk of non-fulfilment of your obligations
                    under these Payments Terms of Use. We take into
                    consideration relevant risk factors before requiring a
                    reserve, including, as applicable (i) your eBay account
                    history, (ii) whether the category you are listing in has a
                    higher likelihood of chargebacks or refunds, (iii) whether
                    your eBay account has an elevated number of customer claims
                    or disputes, (iv) your business and/or personal credit
                    history (business sellers may be subject to credit agency
                    checks), (v) whether you are selling products in advance of
                    availability (pre-selling orders), and (vi) whether you have
                    extended delivery time frames. Depending on your performance
                    and the risk associated with your use of Managed Payments, a
                    reserve may be raised, lowered, or removed at any time. The
                    amount of each reserve (and any subsequent change) will be
                    reasonably determined based on the seller-specific risk
                    (including the volume of your sales). The amount and status
                    of each reserve will be displayed under the Payments tab in
                    the Seller Hub/My eBay and we will notify you of any
                    reserves we require of you.
                  </p>
                </article>
                <article>
                  <h4>Our Liability</h4>
                  <p>
                    If we have acted with reasonable precautions and/or in
                    accordance with our legal obligations, we are not liable for
                    any unauthorized, incorrectly, unexecuted, or delayed
                    payment transactions when such issues were caused by
                    abnormal and unforeseeable circumstances beyond our control.
                  </p>
                </article>
                <article>
                  <h4>Signature</h4>
                  <p>
                    In instances where we are required to collect your signature
                    to meet anti-money laundering and/or other legal
                    requirements, we may (where not prohibited by applicable
                    law) treat your acceptance of these Payments Terms of Use as
                    the equivalent of you providing us your signature.
                  </p>
                </article>
              </article>
              <article id="article-8">
                <h3>
                  8. Security; Third-Party Payment Services Providers; Data
                  Protection
                </h3>
                <article>
                  <h4>Security</h4>
                  <p>
                    You acknowledge the importance of the security measures we
                    put in place with regards to Managed Payments, and agree to
                    comply with them. You are responsible for maintaining the
                    security of all passwords, codes, or other login credentials
                    used to access your eBay account and the related Payment
                    Services and, subject to eBay’s seller protection policies,
                    for any transactions made or actions taken using your eBay
                    account.
                  </p>
                  <p>
                    If you become aware of an unauthorized payment transaction
                    or of a delayed or incorrectly executed transaction, you
                    must notify us immediately by using a contact method stated
                    in the “Introduction” of these Payments Terms of Use, above.
                    If eBay Sarl or ECUK is your Payout Entity and you notify us
                    by telephone of such a transaction, we may request written
                    confirmation immediately following the notification; the
                    notification shall be free of charge.
                  </p>
                </article>
                <article>
                  <h4>Third-Party Payment Services Providers</h4>
                  <p>
                    We may use third-party payment services providers to assist
                    us in providing Managed Payments (such as companies that
                    process payments and disburse settlements, perform risk
                    assessments or compliance checks, verify identity, or
                    validate payment or settlement methods), and we may process
                    your data and transfer it to these third parties. You hereby
                    explicitly consent to: our use of such third-party service
                    providers, the outsourcing of services to them, and the
                    related transfer and processing of data. Where applicable so
                    we can provide you with Managed Payments, you hereby waive
                    any professional secrecy rights. Regardless of whether we
                    use third-party service providers, the appropriate eBay
                    Payment Entity remains responsible to you for the
                    performance of the services contemplated under these
                    Payments Terms of Use.
                  </p>
                </article>
                <article>
                  <h4>
                    Data Protection [Applicable to Payment Services Provided by
                    eBay Payment Entities, except ECA; For ECA’s Data Protection
                    Terms, See Part V]
                  </h4>
                  <p>
                    Our performance of Payment Services entails the processing
                    of your buyer’s personal data when a sale happens. With
                    respect to such data processing, you, the Responsible
                    Payment Entity, and the Payout Entity each act as a separate
                    data controller/business under the applicable data
                    protection laws (which may without limitation include, the
                    General Data Protection Regulation, the California Consumer
                    Privacy Act, or other data protection laws to which you are
                    subject). You agree to: comply with your obligations as a
                    data controller/business pursuant to the applicable data
                    protection laws, and provide us with all such reasonable
                    cooperation, information, and assistance as necessary for us
                    to meet our requirements as a data controller/business.
                  </p>
                </article>
              </article>
              <article id="article-9">
                <h3>9. Collection of Fees and Other Amounts You Owe</h3>
                <p>
                  You authorize us to collect from you any amounts you owe us or
                  our Affiliates (in particular the Affiliate which provides the
                  eBay Services to you) under these Payments Terms of Use, the
                  User Agreement, any other service contract, policy, agreement
                  or as required by law (referred to as “
                  <strong>Owed Amounts</strong>”). Owed Amounts typically
                  include the following:
                </p>
                <ul>
                  <li>Fees;</li>
                  <li>
                    Amounts as described in “Returns and Cancellations;
                    Refunds”, “Disputes” or “Fines, Penalties and Losses” in
                    Section 7 above;
                  </li>
                  <li>
                    Amounts you owe the eMBG Service Provider under the
                    applicable eMBG Policy;
                  </li>
                  <li>
                    Taxes or other charges related to your use of our or our
                    Affiliates’ services, if applicable and required by law; and
                  </li>
                  <li>
                    Amounts we incorrectly settled to you due to a payment
                    processing error or otherwise (see Section 1 above).
                  </li>
                </ul>
                <p>
                  For the avoidance of doubt, this Section 9 only provides the
                  authorization for us to collect such amounts which you already
                  owe us or our Affiliates and does not establish any
                  independent claims against you.
                </p>
                <p>
                  Collection of the Owed Amounts may be carried out on a
                  one-time, sporadic, or recurring basis by the following means:
                </p>
                <ul>
                  <li>
                    Retaining such amounts from your current or future
                    disbursements relating to any transactions that you may
                    have;
                  </li>
                  <li>
                    Recouping from your Linked Financial Account (and if
                    required, by issuing a direct debit mandate or other similar
                    authorization);
                  </li>
                  <li>
                    Recouping from any other payment instrument or payment
                    method you may have authorized or placed on file with us or
                    our Affiliates (for example, to pay for seller fees,
                    shipping labels, or dispute resolution);
                  </li>
                  <li>
                    Recouping from your stored value account, if a stored value
                    account has been issued to you;
                  </li>
                  <li>
                    Recouping from your payment account, if a payment account
                    has been issued to you (see Part III); and
                  </li>
                  <li>
                    Retaining collections agencies or using other collections
                    methods, if the collection by other means has been
                    unsuccessful.
                  </li>
                </ul>
                <p>
                  You authorize us to choose the method of collection among
                  those listed above. We generally deduct Owed Amounts from your
                  current or future disbursements we process on your behalf. If
                  a stored value account or payment account has been issued to
                  you, we will deduct the Owed Amounts from funds held in the
                  relevant stored value account or payment account before
                  disbursing the funds to you. If your disbursements awaiting
                  payout or funds held are not sufficient to cover these
                  amounts, we will charge your Linked Financial Account or
                  another payment method on file. If you have several payment
                  instruments on file, you may indicate a specific payment
                  instrument as your preferred payment method for collecting
                  Owed Amounts in your eBay account.
                </p>
                <p>
                  You also authorize the Affiliate whom you have entered into
                  the{" "}
                  <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                    User Agreement
                  </a>{" "}
                  with for the provision of eBay Services to charge you for any
                  Owed Amounts on our behalf from any payment method you may
                  have on file with such Affiliate.
                </p>
                <p>
                  If you provide us with a SEPA/BACS direct debit mandate for
                  debiting Owed Amounts from your bank account, any required
                  advance notice will be given to you at least three days prior
                  to charging your bank account. At any point prior to you
                  explicitly cancelling a SEPA/BACS direct debit mandate we have
                  obtained from you, we may deduct Owed Amounts based on such
                  mandate. Unless you are a consumer in the EU or UK, you waive,
                  to the extent possible under applicable law, any rights you
                  may have to receive advance notice of any particular
                  preauthorized charge.
                </p>
                <p>
                  If our attempt to recoup an Owed Amount from a payment
                  instrument you have authorized us to use fails as a result of
                  your acts or omissions, we may charge you for the failed
                  attempt as set forth on the Fee Page or as applicable in Parts
                  IV and V below.
                </p>
              </article>
              <article id="article-10">
                <h3>10. Amendment</h3>
                <h3>All sellers (except consumers in Germany)</h3>
                <p>
                  We may amend these Payments Terms of Use by notifying you of
                  the changes in writing (for example, by posting a revised
                  version of these Payments Terms of Use on our website,
                  including the Seller Hub or the eBay Message Center). Before
                  the anticipated effective date of such change, we will notify
                  you at least fourteen (14) days prior or if your Payout entity
                  is eBay Sarl or ECUK, then two (2) months prior.
                </p>
                <p>
                  If you are a consumer (i.e., not a business) outside Germany
                  whose Payout Entity is eBay Sarl or ECUK, you will be deemed
                  to have consented to these changes unless you explicitly
                  reject them before the anticipated effective date. For all
                  other sellers, your continued use of Managed Payments beyond
                  the effective date of the changes will constitute your
                  acceptance of the changes.
                </p>
                <h3>Consumers in Germany</h3>
                <p>
                  If you are a consumer in Germany, we may offer you changes to
                  these Payments Terms of Use at any time. We will be notifying
                  you in text-form, for example via email, and/or the Seller Hub
                  or the eBay Message Center of any proposed changes at least
                  two (2) months before the anticipated effective date of such
                  change.
                </p>
                <p>
                  The changes offered to you shall only become effective if you
                  accept them as follows:
                </p>
                <ul>
                  <li>
                    If a proposed change is a material change (as defined
                    below), we will ask for your active consent to such a
                    change.
                  </li>
                  <li>
                    If a proposed change is not a material change, you will be
                    deemed to have consented to these changes unless you
                    explicitly reject them by notice to us in text form (e.g.
                    via email) before the anticipated effective date. In case of
                    such changes, we will inform you in the notice with which we
                    offer you the changes about the right of rejection, the
                    period of time and your termination right (see subsection
                    below).&nbsp;
                  </li>
                </ul>
                <p>
                  A “material change” is a change of these Payments Terms of Use
                  (especially with respect to provisions defining the type and
                  general scope of the agreed services or the term and
                  termination) in our favor, which would significantly shift the
                  balance between service and remuneration to your disadvantage
                  or would effectively establish an entirely new contract.
                </p>
                <p>
                  A change which is due to a requirement of law, a legally
                  binding court decision or an injunction does not constitute a
                  material change.
                </p>
                <h3>Termination right in case of amendments (all sellers)</h3>
                <p>
                  If you do not agree to proposed changes, you may terminate
                  these Payments Terms of Use, pursuant to Section 11 (“Term,
                  Termination”) below, without any extra cost at any time before
                  their effective date. We always publish the amended Payments
                  Terms of Use on the eBay website.
                </p>
              </article>
              <article id="article-11">
                <h3>11. Term, Termination</h3>
                <p>
                  These Payments Terms of Use are effective indefinitely, unless
                  terminated in accordance with the below.
                </p>
                <p>
                  We may terminate these Payments Terms of Use by giving written
                  notice fourteen (14) days prior or if eBay Sarl or ECUK is
                  your Payout Entity, then two (2) months prior via email to
                  your registered email address. However, we may also terminate
                  these Payments Terms of Use on less notice or with immediate
                  effect in the following scenarios:
                </p>
                <ul>
                  <li>We are required to do so by law or a court order,</li>
                  <li>
                    A governmental authority requires us to do so to comply with
                    anti-money laundering or counter-terrorism financing
                    obligations,
                  </li>
                  <li>
                    We have reasonable grounds to believe you are carrying out a
                    prohibited or illegal activity (including, but not limited
                    to, financial crimes such as fraud, bribery, corruption
                    money laundering, or sanctions violations),
                  </li>
                  <li>
                    We are unable to verify your or your business’s identity, or
                    any other information pertaining to you, or
                  </li>
                  <li>
                    You are otherwise in breach of a material contractual
                    obligation of these Payments Terms of Use, or seriously or
                    persistently violating any provisions of these terms in any
                    other way.
                  </li>
                </ul>
                <p>
                  If eBay Sarl or ECUK is your Payout Entity, you may terminate
                  these Payments Terms of Use and close your payment account,
                  without prejudice to the termination events foreseen above, by
                  giving one (1) month notice by notifying eBay Sarl preferably
                  via email at
                  <a href="mailto:payments@ebay.de">payments@ebay.de</a> or ECUK
                  at{" "}
                  <a href="mailto:Paymentsinfouk@ebay.co.uk">
                    Paymentsinfouk@ebay.co.uk
                  </a>{" "}
                  or by contacting the Customer Service via any of the available
                  communication methods (e.g. Contact Us form, chat).
                </p>
                <p>
                  If eBay Sarl or ECUK is not your Payout Entity, you may
                  terminate these Payments Terms of Use by closing your eBay
                  account; if you use Managed Payments after such termination,
                  you will be deemed to have again accepted these Payments Terms
                  of Use.
                </p>
                <p>
                  If you give notice of termination to one eBay Payment Entity,
                  such notice shall also be deemed as a termination notice to
                  the remaining eBay Payment Entities.
                </p>
                <p>
                  Once you have registered for Managed Payments on eBay and your
                  eBay account has been activated, the use of Managed Payments
                  effectively becomes a condition to using your eBay account.
                  Should you therefore terminate this agreement, you will not be
                  able to reset your eBay account to the state before you
                  registered for Managed Payments. Our Affiliates which provide
                  you the eBay Services according to the User Agreement may
                  terminate the User Agreement pursuant to the termination
                  provisions therein.
                </p>
                <p>
                  Termination of this Agreement shall not affect the rights or
                  liabilities of either party accrued until termination and/or
                  any terms intended (expressly or implicitly) to survive
                  termination, including your obligation to pay amounts owed to
                  us relating to your activities prior to termination and our
                  right to collect from you such amounts in accordance with
                  these Payments Terms of Use. If there are pending payment
                  transactions at the time the termination takes effect, they
                  will be processed pursuant to terms of these Payments Terms of
                  Use unless prohibited by law. As of the effective date of the
                  termination, you will not be able to sell any items on eBay
                  Services anymore.
                </p>
              </article>
              <article id="article-12">
                <h3>12. Assignment</h3>
                <p>
                  In our sole discretion, we may assign our rights and
                  obligations under these Payments Terms of Use and, in such
                  event, we will notify you accordingly.
                </p>
              </article>
            </section>
            <section id="section-ii">
              <h2>II. ADDITIONAL TERMS FOR SERVICES PROVIDED BY eCI</h2>
              <p>
                In addition to the General Payments Terms above, the following
                provisions apply with respect to Payment Services you receive
                from eCI. Within this section, “we” or “us” refers to eCI.
              </p>
              <p>
                As between you and eCI, these Payments Terms of Use incorporate
                by this reference the provisions of the{" "}
                <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                to the extent applicable to this agreement. In the event of any
                conflict between the{" "}
                <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                and these Payments Terms of Use, these Payments Terms of Use
                will govern.
              </p>
              <p>
                We may change, discontinue, enhance, or modify features of
                Managed Payments at any time.
              </p>
              <article>
                <h3>1. Appointment of eCI as Agent</h3>
                <p>
                  <strong>
                    eCI will receive payments on your behalf as your agent. You
                    hereby appoint eCI as your agent for the limited purpose of
                    receiving, holding and settling payments for Managed
                    Payments transactions.
                  </strong>
                </p>
                <p>
                  A payment received by us from a buyer, on your behalf,
                  satisfies the buyer’s obligation to you in the amount of the
                  payment received, regardless of whether we actually settle
                  such payment to you. In the event that we do not make any such
                  payment to you as described in these Payments Terms of Use,
                  you will have recourse against us only and not against the
                  buyer, as such payment is deemed to be made by the buyer to
                  you upon receipt by us. To the extent permissible under the
                  rules of any third-party or governmental body with
                  jurisdiction over us, you agree that we are not liable for
                  your acts and omissions and you understand that we disclaim
                  any such liability.
                </p>
              </article>
              <article>
                <h3>2. Receipt and Settlement of funds</h3>
                <p>
                  After a Managed Payments transaction occurs, you will receive
                  a notification confirming such payment transaction.
                  <strong>
                    In certain instances, your transaction may be declined,
                    frozen, or held for any reason including for suspected
                    fraud, high risk or potential violation of any regulation,
                    compliance with economic or trade sanctions, eBay or eCI
                    policies, or a policy of one of our third-party payments
                    services providers.
                  </strong>
                </p>
                <p>
                  If we are your Payout Entity, we will initiate settlement of
                  proceeds received to your Linked Financial Account. We may, in
                  our sole discretion, offer you the option to receive your
                  proceeds to a stored value account issued to you by us. Your
                  transaction proceeds, other than those being held in
                  accordance with these Payments Terms of Use, and subject to
                  the estimated settlement times set forth in the next sentence,
                  will be aggregated to a daily batch for settlement to you on a
                  regular basis (for example, a single daily settlement for all
                  transactions ready for disbursement to you that day), unless
                  otherwise requested by you and agreed to by us. We anticipate
                  that Managed Payments transaction proceeds will generally be
                  settled to your Linked Financial Account approximately two to
                  seven business days after the buyer's transaction, although
                  actual settlement times may vary for individual transactions
                  based on circumstances such as your bank’s processing times.
                </p>
                <p>
                  We may diverge from this procedure as needed for compliance or
                  operational reasons. If we are unable to settle the Managed
                  Payments proceeds, then, depending on the reason why we are
                  unable to settle the proceeds, we may refund the buyer (e.g.,
                  when we cannot process your information for technical reasons
                  or you violate these Payments Terms of Use, etc.) or otherwise
                  process these funds in accordance with applicable law,
                  including abandoned property laws, such as by escheating funds
                  to a governmental body after the passage of an applicable
                  period of time, or our policies.
                </p>
              </article>
              <article>
                <h3>3. Authorization for Collection of Owed Amounts</h3>
                <p>
                  <strong>
                    You hereby authorize eCI to debit or charge any Owed Amount
                    from your Linked Financial Account or any other payment
                    method you have on file with us, including your stored value
                    account (if a stored value account has been issued to you).
                    Your authorization will remain in full force and effect
                    until the earlier occurrence of: our receipt from you of any
                    written communication that revokes such authorization, or
                    upon the closure or termination of your eBay account.
                  </strong>
                </p>
                <p>
                  To the extent permitted by law, you hereby irrevocably sell,
                  assign, grant, convey and transfer to eBay and its Affiliates,
                  as applicable, all of your rights, title, and interests in any
                  and all accounts receivable, payments of money, and general
                  intangibles owed in your favor to satisfy any and all
                  obligations or liabilities you owe to eBay or its applicable
                  Affiliate in connection with your use of Managed Payments and
                  eBay Services for the sale of goods or services to your
                  Buyers.
                </p>
              </article>

              <article>
                <h3>4. Legal Disputes</h3>
                <p>
                  <strong>
                    PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS
                    AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS YOU AND eCI
                    HAVE AGAINST EACH OTHER ARE RESOLVED.
                  </strong>
                </p>
                <p>
                  <strong>
                    You and eCI agree that any claim or dispute at law or equity
                    that has arisen, or may arise, between you and eCI (or any
                    related third parties) that relates in any way to or arises
                    out of this or previous versions of these Payments Terms of
                    Use, your use of or access to Managed Payments, or the
                    actions of eCI or its agents, will be resolved in accordance
                    with the provisions set forth in this Legal Disputes
                    Section.
                  </strong>
                </p>
                <article>
                  <h4>A. Applicable Law</h4>
                  <p>
                    You agree that, except to the extent inconsistent with or
                    preempted by federal law, the laws of the State of Utah,
                    without regard to principles of conflict of laws, will
                    govern these Payments Terms of Use and any claim or dispute
                    that has arisen or may arise between you and eCI, except as
                    otherwise stated in these Payments Terms of Use.
                  </p>
                </article>
                <article>
                  <h4>B. Agreement to Arbitrate</h4>
                  <p>
                    <strong>
                      You and eCI each agree that any and all disputes or claims
                      that have arisen, or may arise, between you and eCI (or
                      any related third parties) that relate in any way to or
                      arise out of this or previous versions of these Payments
                      Terms of Use, your use of or access to Managed Payments,
                      the actions of eCI or its agents, or any products or
                      services sold, offered, or purchased through the Services
                      shall be resolved exclusively through final and binding
                      arbitration, rather than in court. In this Legal Disputes
                      Section, the term “related third parties” includes your
                      and eCI’s respective affiliates, subsidiaries, parent
                      companies, predecessors, successors, assigns, as well as
                      your, eCI’s, and these entities’ employees and agents.
                      Alternatively, you may assert your claims in small claims
                      court, if your claims qualify and so long as the matter
                      remains in such court and advances only on an individual
                      (non-class, non-representative) basis. The Federal
                      Arbitration Act governs the interpretation and enforcement
                      of this Agreement to Arbitrate.
                    </strong>
                  </p>
                  <ol type="1">
                    <li>
                      <h5>
                        Prohibition of Class and Representative Actions and
                        Non-Individualized Relief
                      </h5>
                      <p>
                        <strong>
                          YOU AND ECI AGREE THAT EACH OF US MAY BRING CLAIMS
                          AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT
                          AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
                          OR REPRESENTATIVE OR PRIVATE ATTORNEY GENERAL ACTION
                          OR PROCEEDING. UNLESS BOTH YOU AND ECI AGREE
                          OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN
                          MORE THAN ONE PERSON'S OR PARTY'S CLAIMS, AND MAY NOT
                          OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED,
                          REPRESENTATIVE, CLASS, OR PRIVATE ATTORNEY GENERAL
                          ACTION OR PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD
                          RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND
                          DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL
                          PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY
                          TO PROVIDE RELIEF NECESSITATED BY THAT PARTY'S
                          INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT AFFECT
                          OTHER USERS.
                        </strong>
                        If a court decides that applicable law precludes
                        enforcement of any of this paragraph's limitations as to
                        a particular claim or a particular request for a remedy
                        (such as a request for injunctive relief), then that
                        claim or that remedy request (and only that claim or
                        that remedy request) must be severed from the
                        arbitration and may be brought in court, subject to your
                        and eCI’s right to appeal the court's decision. All
                        other claims will be arbitrated.
                      </p>
                    </li>
                    <li>
                      <h5>Arbitration Procedures</h5>
                      <p>
                        Arbitration is more informal than a lawsuit in court.
                        Arbitration uses a neutral arbitrator instead of a judge
                        or jury, and court review of an arbitration award is
                        very limited. However, an arbitrator can award the same
                        damages and relief on an individualized basis that a
                        court can award to an individual. An arbitrator should
                        apply the terms of these Payments Terms of Use as a
                        court would. All issues are for the arbitrator to
                        decide, except that issues relating to arbitrability,
                        the scope or enforceability of this Agreement to
                        Arbitrate, or the interpretation of Section 1 of this
                        Agreement to Arbitrate ("Prohibition of Class and
                        Representative Actions and Non-Individualized Relief"),
                        shall be for a court of competent jurisdiction to
                        decide.
                      </p>
                      <p>
                        The arbitration will be conducted by the American
                        Arbitration Association ("AAA") under its rules and
                        procedures, including the AAA's Consumer Arbitration
                        Rules and the AAA’s Commercial Arbitration Rules (as
                        applicable), as modified by this Agreement to Arbitrate.
                        The AAA's rules are available at{" "}
                        <a href="https://www.adr.org/" target="_blank">
                          www.adr.org
                        </a>
                        . In the event that the AAA is unavailable to administer
                        the arbitration, another administrator will be selected
                        by the parties or the court.
                      </p>
                      <p>
                        A party who intends to seek arbitration must first send
                        to the other, by certified mail, a valid Notice of
                        Dispute ("Notice"), which may be downloaded at this
                        link:
                        <a href="https://p.ebaystatic.com/aw/help/legal/Notice_of_Dispute.pdf">
                          https://p.ebaystatic.com/
                          <wbr />
                          aw/help/legal/
                          <wbr />
                          Notice_of_Dispute.pdf
                        </a>
                        . The Notice to eCI must be sent to eBay Inc., Attn:
                        Litigation Department, Re: Notice of Dispute, 583 W.
                        eBay Way, Draper, UT 84020. Any such Notice addressed to
                        and received by eBay will also be deemed to be received
                        by eCI, if such Notice regards services offered by eCI.
                        eCI will send any Notice to you to the physical address
                        we have on file associated with your eBay account; it is
                        your responsibility to keep your physical address up to
                        date. To be valid, you must personally sign the Notice
                        and complete all information on the Notice form,
                        including a description of the nature and basis of the
                        claims the party is asserting, the specific relief
                        sought, and the email address and phone number
                        associated with your account.
                      </p>
                      <p>
                        If you and eCI are unable to resolve the claims
                        described in a valid Notice within 30 days after eCI
                        receives the Notice, you or eCI may initiate arbitration
                        proceedings. A form for initiating arbitration
                        proceedings is available on the AAA's site at
                        www.adr.org. In addition to filing this form with the
                        AAA in accordance with its rules and procedures, the
                        party initiating the arbitration must mail a copy of the
                        completed form to the opposing party. You may send a
                        copy to eCI at the following address: eBay Commerce Inc.
                        c/o CT Corporation System, 1108 E South Union Ave.,
                        Midvale, UT 84047. In the event eCI initiates an
                        arbitration against you, it will send a copy of the
                        completed form to the physical address we have on file
                        associated with your eBay account. Any settlement offer
                        made by you or eCI shall not be disclosed to the
                        arbitrator.
                      </p>
                      <p>
                        Where no disclosed claims or counterclaims exceed
                        $25,000, the dispute shall be resolved by the submission
                        of documents only, subject to the arbitrator's
                        discretion to require an in-person hearing, if the
                        circumstances warrant. In cases where an in-person
                        hearing is held, you and/or eCI may attend by telephone,
                        unless the arbitrator requires otherwise.
                      </p>
                      <p>
                        The arbitrator will decide the substance of all claims
                        in accordance with applicable law, including recognized
                        principles of equity, and will honor all claims of
                        privilege recognized by law. The arbitrator shall not be
                        bound by rulings in prior arbitrations involving
                        different users, but is bound by rulings in prior
                        arbitrations involving the same eCI user to the extent
                        required by applicable law. The arbitrator's award shall
                        be final and binding and judgment on the award rendered
                        by the arbitrator may be entered in any court having
                        jurisdiction thereof.
                      </p>
                    </li>
                    <li>
                      <h5>Costs of Arbitration</h5>
                      <p>
                        Payment of all filing, administration and arbitrator
                        fees will be governed by the AAA's rules, unless
                        otherwise stated in this Agreement to Arbitrate. If you
                        complied with the Notice of Dispute procedures of
                        Section 2 of this Agreement to Arbitrate (“Arbitration
                        Procedures”) and the value of the relief sought is
                        $10,000 or less, at your request, eCI will pay all
                        administration, and arbitrator fees associated with the
                        arbitration. Any request for payment of fees by eCI
                        should be submitted by mail to the AAA along with your
                        Demand for Arbitration and eCI will make arrangements to
                        pay administration and arbitrator fees directly to the
                        AAA. In the event the arbitrator determines the claim(s)
                        you assert in the arbitration to be frivolous, you agree
                        to reimburse eCI for all fees associated with the
                        arbitration paid by eCI on your behalf that you
                        otherwise would be obligated to pay under the AAA's
                        rules. eCI will pay as much of the filing,
                        administration, and arbitrator fees as the arbitrator
                        deems necessary to prevent the cost of accessing the
                        arbitration forum from being prohibitive.
                      </p>
                    </li>
                    <li>
                      <h5>Severability</h5>
                      <p>
                        With the exception of any of the provisions in Section 1
                        of this Agreement to Arbitrate ("Prohibition of Class
                        and Representative Actions and Non-Individualized
                        Relief"), if an arbitrator or court decides that any
                        part of this Agreement to Arbitrate is invalid or
                        unenforceable, the other parts of this Agreement to
                        Arbitrate shall still apply.
                      </p>
                    </li>
                    <li>
                      <h5>Opt-Out Procedure</h5>
                      <p>
                        <strong>
                          IF YOU ARE A NEW USER OF OUR PAYMENT SERVICES, YOU CAN
                          CHOOSE TO REJECT THIS AGREEMENT TO ARBITRATE
                          ("OPT-OUT") BY MAILING US A WRITTEN OPT-OUT NOTICE
                          ("OPT-OUT NOTICE"). THE OPT-OUT NOTICE MUST BE
                          POSTMARKED NO LATER THAN 30 DAYS AFTER THE DATE YOU
                          ACCEPT THESE PAYMENTS TERMS OF USEFOR THE FIRST TIME.
                          YOU MUST MAIL THE OPT-OUT NOTICE TO EBAY INC., ATTN:
                          LITIGATION DEPARTMENT, RE: OPT-OUT NOTICE, 583 WEST
                          EBAY WAY, DRAPER, UT 84020. ANY SUCH OPT-OUT NOTICE
                          ADDRESSED TO AND RECEIVED BY EBAY WILL ALSO BE DEEMED
                          TO BE RECEIVED BY ECI, IF SUCH OPT-OUT NOTICE REGARDS
                          SERVICES OFFERED BY ECI.
                        </strong>
                      </p>
                      <p>
                        For your convenience, we are providing an{" "}
                        <a href="https://pages.ebay.com/policies/arbitrate-optout.html">
                          Opt-Out Notice form
                        </a>
                        . You must complete and mail that to us in order to opt
                        out of the Agreement to Arbitrate. You must complete the
                        Opt-Out Notice form by providing the information called
                        for in the form, including your name, address (including
                        street address, city, state and zip code), and the user
                        ID(s) and email address(es) associated with the eBay
                        Service account(s) to which the opt-out applies. You
                        must sign the Opt-Out Notice for it to be effective.
                        This procedure is the only way you can opt out of the
                        Agreement to Arbitrate. If you opt out of the Agreement
                        to Arbitrate, all other parts of these Payments Terms of
                        Use and its Legal Disputes Section will continue to
                        apply to you. Opting out of this Agreement to Arbitrate
                        has no effect on any previous, other, or future
                        arbitration agreements that you may have with us.
                      </p>
                    </li>
                    <li>
                      <h5>Future Amendments to the Agreement to Arbitrate</h5>
                      <p>
                        Notwithstanding any provision in the User Agreement or
                        these Payments Terms of Use to the contrary, you and we
                        agree that if we make any amendment to this Agreement to
                        Arbitrate (other than an amendment to any notice address
                        or site link provided herein) in the future, that
                        amendment shall not apply to any claim that was filed in
                        a legal proceeding against eCI prior to the effective
                        date of the amendment. The amendment shall apply to all
                        other disputes or claims governed by the Agreement to
                        Arbitrate that have arisen or may arise between you and
                        eCI. We will notify you of amendments to this Agreement
                        to Arbitrate by posting the amended terms on
                        www.eBay.com at least 30 days before the effective date
                        of the amendments and by providing notice through the
                        eBay Message Center and/or by email. If you do not agree
                        to these amended terms, you may close your account
                        within the 30-day period and you will not be bound by
                        the amended terms.
                      </p>
                    </li>
                  </ol>
                </article>
                <article>
                  <h4>C. Judicial Forum for Legal Disputes</h4>
                  <p>
                    Unless you and we agree otherwise, in the event that the
                    Agreement to Arbitrate above is found not to apply to you or
                    to a particular claim or dispute, either as a result of your
                    decision to opt out of the Agreement to Arbitrate or as a
                    result of a decision by the arbitrator or a court order, you
                    agree that any claim or dispute that has arisen or may arise
                    between you and eCI must be resolved exclusively by a state
                    or federal court located in Salt Lake County, Utah. You and
                    eCI agree to submit to the personal jurisdiction of the
                    courts located within Salt Lake County, Utah for the purpose
                    of litigating all such claims or disputes.
                  </p>
                </article>
              </article>
            </section>
            <section id="section-iii">
              <h2>III. ADDITIONAL TERMS FOR SERVICES PROVIDED BY EBAY SARL</h2>
              <p>
                In addition to the General Payments Terms above, the following
                provisions apply with respect to Payment Services you receive
                from eBay Sarl. Within this section, “we” or “us” refers to eBay
                Sarl.
              </p>
              <p>
                As between you and eBay Sarl, these Payments Terms of Use
                incorporate by this reference the provisions of the{" "}
                <a href="https://www.ebay.co.uk/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                to the extent applicable to this agreement. In the event of any
                conflict between the{" "}
                <a href="https://www.ebay.co.uk/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                and these Payments Terms of Use, these Payments Terms of Use
                will govern.
              </p>
              <div className="learn-more learn-more__active">
                <header>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                    <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                    <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                  </svg>
                  <p>Expand Part III</p>
                </header>
                <div className="learn-more__txt" style={{ display: "none" }}>
                  <article>
                    <h3>1. Payment Service; Disabling Payment Methods</h3>
                    <p>
                      You authorize eBay Sarl to acquire and settle payments
                      that it receives on your behalf. When you sell an item on
                      eBay, you are deemed to be a payee, with eBay Sarl acting
                      as your payment service provider. In a refund, chargeback,
                      or similar scenario, you may also be deemed to be a payer,
                      again with eBay Sarl acting as your payment service
                      provider. If eBay Sarl is your Payout Entity, eBay Sarl
                      will also open and hold a payment account for you.
                    </p>
                    <p>
                      If you are registered for Managed Payments on or before
                      June 30, 2022, your payment account will be opened between
                      May 18, 2022 and June 30, 2022, inclusive, and you will be
                      notified separately about the date applicable to you. If
                      you sign up for Managed Payments on or after July 1, 2022,
                      your payment account will be opened once you are
                      registered for Managed Payments.
                    </p>
                    <p>
                      The acceptance of a buyer’s payment instrument (for
                      example, their Visa card), once it has been authorized for
                      payment, satisfies the buyer’s payment obligation to you,
                      regardless of whether we actually settle such payment to
                      you. In the event that we do not make any such payment to
                      you as described in these Payments Terms of Use, you will
                      have recourse against us only and not against the buyer.
                      To the extent permissible under the rules of any
                      third-party or governmental body with jurisdiction over
                      us, you agree that we are not liable for your acts and
                      omissions and you understand that we disclaim any such
                      liability.
                    </p>
                    <p>
                      We may disable specific payment method(s) available to
                      buyers for all or some of your listings if we reasonably
                      believe the use of such payment methods for your
                      transactions will increase regulatory, financial, or other
                      risk to us. For example, if you would like to offer a
                      high-priced item with a new eBay account, we may disable
                      such payment methods where the amount is credited with a
                      time delay after the transaction (e.g. direct debit or
                      payment upon invoice). In assessing the risk, we consider
                      relevant factors such as your sales history, service
                      status, eBay account history, risks associated with
                      certain item categories, transaction value, and number and
                      monetary amounts of eBay Buyer Protection cases. We will
                      re-enable the affected payment method(s) for your listings
                      once the risk no longer exists.
                    </p>
                  </article>
                  <article>
                    <h3>2. Execution of Payment Transactions</h3>
                    <p>
                      When you, as a payee, use Managed Payments, the payment
                      transactions will be executed in accordance with the
                      payment schemes rules and procedures, or as otherwise
                      agreed.
                    </p>
                    <article>
                      <h4>Required Information</h4>
                      <p>
                        Your payer (for example, the buyer of an item you sell
                        on eBay) must ensure we are provided with the data
                        required for us to execute the payment transaction. If
                        we do not have sufficient data to execute such
                        transaction, we reserve the right to ask your payer’s
                        payment service provider for the required information.
                      </p>
                      <p>
                        We require the following information for the execution
                        of a payment transaction:
                      </p>
                      <ul>
                        <li>Your name,</li>
                        <li>Your eBay username,</li>
                        <li>The buyer’s name (where applicable),</li>
                        <li>
                          The buyer’s eBay username, and any other data about
                          the buyer which the buyer’s payment service provider
                          or we may require (where applicable),
                        </li>
                        <li>
                          The currency of the payment transaction (if possible,
                          in abbreviated form),
                        </li>
                        <li>The amount of the payment transaction, and</li>
                        <li>The beneficiary’s payment details.</li>
                      </ul>
                      <p>
                        We may also require specific information, such as a
                        one-time authorization code sent to your verified phone
                        number or email address, to authenticate a payment
                        transaction (or to allow you to access certain
                        information related to Managed Payments on eBay).
                      </p>
                      <p>
                        To the extent reasonably possible, we will automatically
                        utilize the information stored in our systems. Where the
                        required information provided by you or your payer is
                        not fully available or is inaccurate, we will not bear
                        any liability for any damage, delay, or other
                        consequence from the non-execution or defective
                        execution of the relevant payment transaction.
                      </p>
                    </article>
                    <article>
                      <h4>Receipt of Payment Orders</h4>
                      <p>
                        A payment order will be deemed to have been received by
                        us if:
                      </p>
                      <ul>
                        <li>
                          Carried out by means of a payment card, then in
                          accordance with the card schemes rules; or
                        </li>
                        <li>
                          Received by our available electronic communication
                          channels, then on the business day when it is actually
                          received by us.
                        </li>
                      </ul>
                      <p>
                        If the payment order is not received on a business day,
                        it will be deemed to be received on the next business
                        day. “Business days” in this Part III of these Payments
                        Terms of Use shall mean the days on which banks in
                        Luxembourg are open for regular business.
                      </p>
                      <p>
                        You may not revoke a payment order after we have
                        received it. However, if we have agreed that a payment
                        order will be executed on a certain future date, the
                        business day prior to this future date will be the
                        latest you can revoke the payment order.
                      </p>
                    </article>
                    <article>
                      <h4>Refusal of Payment Orders</h4>
                      <p>
                        We reserve the right to refuse the execution of a
                        payment order when:
                      </p>
                      <ul>
                        <li>
                          The payment order information contains factual errors
                          and/or is incomplete;
                        </li>
                        <li>
                          You have not satisfied your obligations under these
                          Payments Terms of Use or any other agreement between
                          you and us;
                        </li>
                        <li>
                          There are doubts about the validity of the
                          instruction, or the identity or authority of the
                          person giving the payment order; or
                        </li>
                        <li>
                          The payment order, if executed, would lead to a breach
                          of the applicable rules, laws, or regulations.
                        </li>
                      </ul>
                      <p>We may charge a reasonable fee for such a refusal.</p>
                      <p>
                        You acknowledge that when executing a payment
                        transaction, we may have to disclose information
                        mentioned above and your legal address to your buyer’s
                        payment service provider and, where relevant, also to
                        intermediaries involved in the execution of the payment
                        transaction. You expressly accept and instruct us to
                        disclose such data.
                      </p>
                    </article>
                    <p>
                      Where you are the payer, the execution of the transaction
                      may depend on us having received the respective amount
                      from you prior to the execution.
                    </p>
                  </article>
                  <article>
                    <h3>3. Settlement of Funds; Shipping Labels</h3>
                    <p>
                      If we are your Payout Entity, we will initiate settlement
                      of proceeds received to your Linked Financial Account.
                      Your payments will generally be initiated either
                      automatically according to the schedule you have
                      pre-selected or “on demand” based on an individual payment
                      instruction we receive from you. However, if your payment
                      account is not configured to include a regularly scheduled
                      settlement, we may periodically sweep available funds out
                      of your payment account and send them to your Linked
                      Financial Account.
                    </p>
                    <p>
                      Your transaction proceeds, other than those being held in
                      accordance with these Payments Terms of Use, and subject
                      to the estimated settlement times set forth below, will be
                      aggregated to a daily batch for settlement to you as
                      agreed with you. ​​For example, if you select weekly
                      payouts, a single settlement will be initiated
                      automatically once a week for all transactions ready for
                      disbursement to you on that day. If you select daily
                      payouts, your available proceeds will be automatically
                      disbursed once every day. If you request a payout on
                      demand, a single settlement will be initiated for all
                      transactions ready for disbursement to you on that day.
                      You may be able to choose to have only a portion of your
                      available transaction proceeds paid out to your Linked
                      Financial Account, leaving the rest in your payment
                      account.
                    </p>
                    <p>
                      We anticipate that the disbursement of Managed Payments
                      transactions proceeds to your Linked Financial Account
                      will be initiated approximately one to two business days
                      after the buyer's order, although actual settlement times
                      may vary for individual transactions depending on the
                      buyer’s payment method, and when the payments transaction
                      is received by us. We may diverge from this procedure as
                      needed for compliance or risk reasons. If we are unable to
                      settle your proceeds, then, depending on the reason why we
                      are unable to settle your proceeds, we may refund the
                      buyer (e.g., in the event that we cannot process your
                      information due to technical reasons etc.) or otherwise
                      process these funds in accordance with applicable law or
                      our policies.
                    </p>
                    <p>
                      We will provide you with monthly statements of your
                      transactions free of charge, which can be accessed in the{" "}
                      <a href="https://www.ebay.co.uk/sh/landing">Seller Hub</a>
                      .
                    </p>
                    <p>
                      If buyers purchase a return shipping label at their own
                      expense on the eBay website, eBay may automatically deduct
                      the label costs from the refund amount a buyer receives
                      from you. If this occurs, you agree (as a debtor to the
                      buyer for the refund) to be delegated as a debtor to the
                      shipping carrier for the label costs, and authorize us to
                      use the relevant part of the refund amount to pay the
                      shipping carrier on your behalf. You will not bear any
                      additional shipping costs in this event.
                    </p>
                  </article>
                  <article>
                    <h3>4. Liability for Unauthorized Payment Transactions</h3>
                    <p>
                      You will be fully liable for all losses relating to an
                      unauthorized payment transaction if you acted fraudulently
                      with respect to such a payment transaction, or if you
                      failed to fulfill one or more of the obligations under
                      this agreement (such as keeping your credentials safe or
                      notifying us without undue delay) with intent or gross
                      negligence.
                    </p>
                  </article>
                  <article>
                    <h3>5. Our Liability</h3>
                    <p>
                      We will refund you in full and are liable for losses
                      directly and reasonably foreseeably incurred by an
                      incorrectly or non-executed payment transaction, provided
                      that you have informed us of such transaction without
                      undue delay after becoming aware of the defect and in no
                      event later than thirteen (13) months after the
                      transaction was executed, unless we failed to make
                      information about the transaction available to you.
                    </p>
                    <p>
                      We are liable for damages suffered as a result of willful
                      misconduct or gross negligence. In case of minor
                      negligence, we are only liable for (a) damages resulting
                      from injury to life, body, or health; or (b) foreseeable
                      typically occurring damages resulting from the breach of
                      an essential contractual obligation. Any further liability
                      is excluded.
                    </p>
                    <p>
                      If you are a business using the Payment Services,
                      unforeseeable damages in accordance with the above include
                      (but are not limited to) loss of goodwill or reputation,
                      direct or indirect loss of profits, loss of data, loss of
                      business and other intangible losses. You also explicitly
                      agree that as a business you may not benefit from the
                      rights and liability regimes deriving from the legal
                      provisions with regard to payment services (Articles
                      79(1), 81(3), 86, 88 to 90, 93 and 101 of the Luxembourg
                      Law of 10 November 2009 on payment services) in the event
                      of non-execution or defective execution of Payment
                      Services under this agreement, meaning we are not liable
                      to you for the losses or damage you may suffer under those
                      provisions.
                    </p>
                  </article>
                  <article>
                    <h3>6. RatePAY</h3>
                    <p>
                      On certain European eBay sites, buyers may choose a
                      RatePAY Payment Method to pay the purchase price for any
                      item you sell them. You hereby agree to and shall comply
                      with the General Terms and Conditions for RatePAY Payment
                      Methods, which shall form an integral part of these
                      Payments Terms of Use. As specified in more detail in the
                      General Terms and Conditions for RatePAY Payment Methods,
                      you agree to sell and assign your purchase price claims
                      against buyers who choose a RatePAY Payment Method to eBay
                      Sarl, which will then sell and assign these claims to
                      Adyen N.V., which will in turn sell and assign these
                      claims to RatePAY GmbH. Therefore, the buyers who use a
                      RatePAY Payment Method will make their payments to RatePAY
                      GmbH, which will forward the payments through Adyen N.V.
                      to eBay S.à.r.l, so that eBay Sarl will process and settle
                      such payments according to these Payments Terms of Use.
                    </p>
                    <div className="learn-more learn-more__active">
                      <header>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                          <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                          <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                        </svg>
                        <p>
                          General Terms and Conditions for RatePAY Payment
                          Methods
                        </p>
                      </header>
                      <div
                        className="learn-more__txt"
                        style={{ display: "none" }}
                      >
                        <article>
                          <h4>6.1. Contractual object and scope</h4>
                          <p>
                            6.1.1 RatePAY GmbH ("RatePAY") is a payment
                            institution that is constantly supervised and
                            officially licensed by the German Federal Financial
                            Supervisory Authority (BaFin). RatePAY offers
                            individual solutions in the field of online payment
                            for a variety of online retailers and online
                            platform providers which provide an online platform
                            for online retailers and consumer sellers to sell
                            their products. As part of these solutions, RatePAY
                            offers payment methods for integration on eBay
                            Services. The payment methods offered by RatePAY
                            ("RP Payment Method(s)") generally include payment
                            by invoice and payment by SEPA direct debit,
                            currently offered in Germany, Austria, Switzerland
                            and the Netherlands and all further Accepted
                            Jurisdictions as defined in section 6.4.2. Your
                            buyers who purchase items on eBay Services may use
                            the currently available RP Payment Method(s) offered
                            by eBay to settle the purchase price claim.
                          </p>
                          <p>
                            6.1.2 eBay Sarl facilitates the payments of the
                            buyers to you on eBay Services and provides licensed
                            payment services to you based on these Payments
                            Terms of Use.
                          </p>
                          <p>
                            6.1.3 Adyen N.V. (“Adyen“) offers, in cooperation
                            with RatePAY, in its own name the RP Payment
                            Method(s) to eBay Sarl for integration into the eBay
                            Services.
                          </p>
                          <p>
                            6.1.4 In order to use the RP Payment Method(s), eBay
                            Sarl acquires your purchase price claims against
                            your buyers, who use the RP Payment Method(s) on
                            eBay Services. eBay Sarl will then sell and assign
                            the purchased claims to Adyen according to the terms
                            of these General Terms and Conditions for RP Payment
                            Methods. Adyen will then sell and assign the
                            purchased claims to RatePAY, who will then assume
                            the payment default risk for the purchased claims in
                            accordance with the following provisions. This
                            arrangement is further referred to as “Chain
                            Factoring”.
                          </p>
                          <p>
                            6.1.5 These General Terms and Conditions for RP
                            Payment Methods shall apply to you with regard to
                            your use of the RP Payment Method(s) on eBay
                            Services.
                          </p>
                          <p>
                            6.1.6 These General Terms and Conditions for RP
                            Payment Methods shall apply in addition to the other
                            terms and conditions agreed between you and eBay
                            Sarl in these Payments Terms of Use. In the event of
                            conflict, these General Terms and Conditions for RP
                            Payment Methods shall prevail over such other terms
                            and conditions agreed between you and eBay Sarl in
                            these Payments Terms of Use.
                          </p>
                          <p>
                            6.1.7 RatePAY and Adyen will not be a party to and
                            not have any obligation under these Payments Terms
                            of Use or any other agreement between you and eBay
                            Sarl, eBay, the buyer or any third party.
                          </p>
                        </article>
                        <article>
                          <h4>
                            6.2. Integration of the RatePAY Terms of Payment and
                            the RatePAY Data Privacy Statement
                          </h4>
                          <p>
                            You shall conclude with each buyer the RatePAY Terms
                            of Payment (“RP-TOP”) and the RatePAY Data Privacy
                            Statement (“RP-DPS”) for the buyer’s use of RP
                            Payment Method(s), as available online at
                            <a
                              href="https://www.ratepay.com/en/ratepay-terms-of-payment/"
                              target="_blank"
                            >
                              https://www.ratepay.com/
                              <wbr />
                              en/legal-marketplace-terms-directdebit/
                            </a>{" "}
                            (RP-TOP) or
                            <a
                              href="https://www.ratepay.com/en/legal-marketplace-dataprivacy/"
                              target="_blank"
                            >
                              https://www.ratepay.com/
                              <wbr />
                              en/legal-marketplace-dataprivacy/
                            </a>{" "}
                            (RP-DPS). You hereby agree and accept that the
                            RP-TOP and the RP-DPS shall become an integral part
                            of each sale contract concluded between you and the
                            buyer on eBay Services for the buyer’s use of RP
                            Payment Methods (“Sale Contract”). You hereby agree
                            that eBay Sarl has the RP-TOP and the RP-DPS
                            implemented into the payment check-out of the RP
                            Payment Method(s) and instruct eBay Sarl to have the
                            RP-TOP and the RP-DPS forwarded to the buyer on your
                            behalf.
                          </p>
                        </article>
                        <article>
                          <h4>6.3. Waiver</h4>
                          <p>
                            If you act as a business seller, you hereby agree
                            that section 675f (5) sentence 2 German Civil Code
                            (“BGB”) (Fees for payment services), section 675g
                            BGB (Amendment of the framework contract on payment
                            services), section 675h BGB (Ordinary termination of
                            a framework contract on payment services), section
                            675y BGB (Liability of the payment service provider
                            in case of non-execution, defective or delayed
                            execution of a payment order; obligation to make
                            enquiries), section 675z BGB (Other claims in case
                            of non-execution, defective or delayed execution of
                            a payment order or an unauthorised payment
                            transaction) and Section 676 BGB (Proof of execution
                            of payment transactions) shall not be applicable to
                            these General Terms and Conditions for RP Payment
                            Methods.
                          </p>
                        </article>
                        <article>
                          <h4>
                            6.4. Purchase of Your Receivables by eBay Sarl
                          </h4>
                          <p>
                            6.4.1 You hereby allow eBay Sarl to submit your
                            receivables (through Adyen) to RatePAY for approval
                            (“Purchase Notice”). RatePAY will, after receipt of
                            the Purchase Notice (through eBay Sarl and Adyen),
                            score the offered receivables to determine the
                            probability for payment of the relevant offered
                            receivable by the buyer and will (through Adyen and
                            eBay Sarl) send a response confirming if the
                            receivable is accepted (“Positive Score Notice”) or
                            is rejected (“Negative Score Notice”).
                          </p>
                          <p>
                            6.4.2. You are obliged to offer all receivables to
                            eBay Sarl in connection with the RP Payment
                            Method(s) in accordance with these General Terms and
                            Conditions for RP Payment Methods which fulfill the
                            following criteria:
                          </p>
                          <ol type="a">
                            <li>
                              Your receivable against your respective buyer in
                              connection with the Sale Contract and for which
                              the buyer has chosen one of the RP Payment
                              Methods;
                            </li>
                            <li>
                              Positive Score Notice regarding the relevant
                              receivable;
                            </li>
                            <li>
                              The receivable is nominated in (i) EUR or CHF or
                              (ii) any other currency supported by RatePAY; and
                            </li>
                            <li>
                              The receivable is governed by (i) the laws of
                              Germany, Austria, Switzerland or the Netherlands
                              or (ii) any other jurisdiction supported by
                              RatePAY (the “Accepted Jurisdictions”).
                            </li>
                          </ol>
                          <p>
                            (jointly the “Seller Receivables” and each a “Seller
                            Receivable”).
                          </p>
                          <p>
                            6.4.3 By accepting these Payments Terms of Use,
                            which leads to the implementation of the RP Payment
                            Method(s) into your listings on eBay Services, you
                            agree that each Seller Receivable will automatically
                            be offered to eBay Sarl for purchase after
                            conclusion of each Sale Contract for which the buyer
                            has chosen one of the RP Payment Methods (the
                            “Purchase Offer”). eBay Sarl will submit a
                            respective message to Adyen (and Adyen to RatePAY)
                            indicating the conclusion of the Sale Contract and
                            eBay Sarl’s offer to Adyen to purchase the relevant
                            Seller Receivable. Based on Adyen’s response to eBay
                            Sarl’s purchase offer, eBay Sarl will either accept
                            your Purchase Offer by proceeding with the payment
                            process (the “Acceptance of Purchase Offer”) or
                            reject your Purchase Offer. Such offer and
                            acceptance through an Acceptance of Purchase Offer
                            will conclude a purchase agreement between you and
                            eBay Sarl (“Single Purchase Agreement”) regarding
                            the relevant Seller Receivable including the
                            Ancillary Rights (as defined below) which is
                            purchased (the “Purchased Receivable”) in accordance
                            with these General Terms and Conditions for RP
                            Payment Methods. In case eBay Sarl receives a
                            rejection of its purchase offer from Adyen, eBay
                            Sarl will reject the provided Purchase Offer, and
                            the Single Purchase Agreement relating to the
                            relevant Seller Receivable is not concluded. A
                            rejected Purchase Offer may be re-submitted by
                            re-iterating the process described in this section
                            6.4.3.
                          </p>
                        </article>
                        <article>
                          <h4>6.5. Assignment of receivables</h4>
                          <p>
                            6.5.1 You hereby assign, subject to the condition
                            precedent in section 6.5.3 below, all your current
                            and future Seller Receivables including all
                            Ancillary Rights (as defined below) to eBay Sarl and
                            eBay Sarl hereby accepts the assignment.
                          </p>
                          <p>
                            6.5.2 “Ancillary Rights” means, in each case with
                            respect to the relevant Seller Receivable:
                          </p>
                          <ol type="a">
                            <li>
                              rights for any securities and collateral securing
                              the relevant Seller Receivable; and
                            </li>
                            <li>transport and deficiency insurance claims;</li>
                            <li>
                              your contingent claims to demand possession or
                              repossession from a direct possessor;
                            </li>
                            <li>
                              preferential rights, constitutive rights
                              (Gestaltungsrechte), withdrawal or rescission
                              rights (Rücktrittsrechte) or challenge rights
                              (Anfechtungsrechte) and all other legal positions,
                              interest claims, claims for compensation, warranty
                              claims, claims for contractual penalty against the
                              buyer or third parties who are the direct owners
                              of the goods; or
                            </li>
                            <li>
                              other claims against third parties with respect to
                              the relevant Seller Receivable (such as trade
                              credit, transport, burglary, theft, fire
                              insurance, claims against central settlers and
                              purchasing associations, claims against carriers),
                              as well as all further ancillary rights or any
                              other ancillary rights pertaining to or associated
                              with the relevant Seller Receivable and/or the
                              underlying transactions and contracts, in each
                              case irrespective of whether or not being
                              transferred with the relevant Seller Receivable by
                              operation of law pursuant to section 401 BGB.
                            </li>
                          </ol>
                          <p>
                            No ancillary rights are additional or new claims
                            against the buyer arising from the reversal of the
                            Sale Contract (such as return shipping costs). These
                            claims will not be transferred by you to eBay Sarl
                            as part of the Seller Receivables.
                          </p>
                          <p>
                            6.5.3 The assignment described in section 6.5.1 of
                            the relevant Seller Receivable including all
                            Ancillary Rights above is subject to the conclusion
                            of a Single Purchase Agreement regarding the
                            relevant Seller Receivable in accordance with
                            section 6.4.3.
                          </p>
                          <p>
                            6.5.4 The assignment of Seller Receivables including
                            all Ancillary Rights, for which the assignment is
                            not valid due to an extended retention of title
                            (verlängerter Eigentumsvorbehalt), becomes valid
                            upon the payment of the relevant supplier or its
                            waiver of its retention of title.
                          </p>
                          <p>
                            6.5.5 Upon conclusion of a Single Purchase
                            Agreement, you and eBay Sarl reiterate the
                            assignment of the relevant receivable identified
                            through the transaction-ID in the Purchase Offer
                            including all Ancillary Rights whereby the Purchase
                            Offer constitutes an offer to assign the relevant
                            receivable from you to eBay Sarl and the Acceptance
                            of Purchase Offer constitutes an acceptance of this
                            offer by eBay Sarl.
                          </p>
                          <p>
                            6.5.6 In case there is any doubt about the validity
                            of the assignment of the Seller Receivables
                            including all Ancillary Rights and this requires any
                            further declaration or action by you, you will
                            execute such declaration or action upon request of
                            eBay Sarl.
                          </p>
                          <p>
                            6.5.7 You irrevocably authorise eBay Sarl with the
                            power of sub-delegation to notify the relevant buyer
                            regarding the assignment of the Seller Receivable
                            and to exercise non-assignable rights, such as
                            contractual rights, in connection with the Seller
                            Receivables including all Ancillary Rights in its
                            own name.
                          </p>
                        </article>
                        <article>
                          <h4>6.6. Collection Risk / Collection</h4>
                          <p>
                            6.6.1 Subject to the legal validity (“Bestehen der
                            Forderung”) of the Purchased Receivables, eBay Sarl
                            bears the risk that the Purchased Receivables are
                            not collectable from the respective buyer in part or
                            in full, in particular caused by the insolvency of
                            the buyer. eBay Sarl will pay the purchase price
                            (minus the agreed fees and expenses of eBay Sarl)
                            for the relevant Purchased Receivable regardless of
                            whether it chooses to enforce the relevant Purchased
                            Receivable.
                          </p>
                          <p>
                            6.6.2 The collection and enforcement of the
                            Purchased Receivables is the responsibility of eBay
                            Sarl. eBay Sarl shall bear any and all costs in this
                            regard.
                          </p>
                          <p>
                            6.6.3 eBay Sarl will transfer the economical risks
                            of the obligations described in section 6.6.1 and
                            6.6.2 to Adyen and consequently to RatePAY in
                            accordance with the Chain Factoring as described in
                            section 6.1.4.
                          </p>
                        </article>
                        <article>
                          <h4>6.7 Guarantees</h4>
                          <p>
                            Every time upon entering into a Single Purchase
                            Agreement concerning a Purchased Receivable, you
                            represent and warrant to eBay Sarl by way of an
                            independent guarantee (selbstständiges
                            Garantieversprechen) that:
                          </p>
                          <p>
                            6.7.1 The Purchased Receivable fulfils the criteria
                            as described in section 6.4.2 of these General Terms
                            and Conditions for RP Payment Methods;
                          </p>
                          <p>
                            6.7.2 The Purchased Receivable is valid (“besteht”);
                          </p>
                          <p>
                            6.7.3 You hold free and clear title to, and may
                            freely assign and transfer, the Purchased
                            Receivable;
                          </p>
                          <p>
                            6.7.4 The Purchased Receivable has not yet been
                            assigned or transferred to third parties, unless
                            such assignment occurred pursuant to a customary
                            extended retention of title agreed between you and
                            the relevant supplier of goods (in which case
                            sub-sections (3) and (5) will not apply to this
                            extent);
                          </p>
                          <p>
                            6.7.5 The Purchased Receivable is free from any
                            third parties' rights to the Purchased Receivable
                            and there do not exist any rights or claims of any
                            third party to the respective Purchased Receivable;
                          </p>
                          <p>
                            6.7.6 The Purchased Receivable is not charged with
                            any liability claims of third parties, especially
                            any claims in accordance with section 13c German
                            Value Added Tax Act (“Umsatzsteuergesetz”);
                          </p>
                          <p>
                            6.7.7 You will ship, deliver or provide the
                            respective item(s) to the relevant buyer completely,
                            on time and in accordance with the Sale Contract
                            with the respective buyer in order that the
                            respective buyer is not able to exercise any right
                            or claim of retention, set-off, supplementary
                            performance (Nacherfüllung), reduction (Minderung),
                            rescission right (Rücktritt) or damage claims
                            (Schadensersatz), provided, however, that the case
                            is not resolved by the procedure laid down in
                            section 6.8.1 (c) (i.e. if the case is resolved by
                            the procedure laid down in section 6.8.1 (c) and if
                            you have provided valid proof according to section
                            6.10.2, the guarantee in this sub-section (6.7.7)
                            shall not apply for the specific reason and item the
                            valid proof was provided for); and
                          </p>
                          <p>
                            6.7.8 Upon conclusion of the respective Single
                            Purchase Agreement, the respective Purchased
                            Receivable will be validly assigned to eBay Sarl and
                            enforceable against the buyer by eBay Sarl (or Adyen
                            or RatePAY after assignment of the claim to Adyen
                            and subsequently to RatePAY) in accordance with the
                            applicable law of the respective Purchased
                            Receivable and the applicable enforcement procedure.
                          </p>
                          <p>
                            Each of these guarantees to eBay Sarl with respect
                            to a Single Purchase Agreement will be provided by
                            eBay Sarl to Adyen (and by Adyen to RatePAY)
                            back-to-back in accordance with the Chain Factoring
                            arrangement.
                          </p>
                        </article>
                        <article>
                          <h4>
                            6.8. Assignment of Purchased Receivables back to You
                          </h4>
                          <p>
                            6.8.1 If the relevant Purchased Receivable fulfils
                            one of the following criteria (the “Defect
                            Receivable”):
                          </p>
                          <ol type="a">
                            <li>
                              the buyer exercises its right of withdrawal
                              (Widerruf) regarding the Purchased Receivable with
                              valid effect;
                            </li>
                            <li>
                              the buyer reverses the Sale Contract on the basis
                              of a voluntary withdrawal of the purchased item
                              (such as a "100-day right of return") offered by
                              you;
                            </li>
                            <li>
                              in case of an objection of the buyer against a
                              Purchased Receivable (dispute), if you do not
                              provide valid proof upon request of eBay Sarl in
                              accordance with section 6.10.2;
                            </li>
                            <li>
                              you are in breach of a guarantee pursuant to
                              section 6.7 in respect of the Purchased Receivable
                              (in which case the right to assign back the Defect
                              Receivable shall be the sole remedy);
                            </li>
                          </ol>
                          <p>
                            and Adyen consequently decides to use its right to
                            assign back the relevant Defect Receivable to eBay
                            Sarl, eBay Sarl is entitled to assign back any
                            Defect Receivable to you.
                          </p>
                          <p>
                            6.8.2 eBay Sarl hereby assigns all current and
                            future Defect Receivables to you subject to the
                            condition precedent in section 6.8.3 below and you
                            hereby accept the assignment of all current and
                            future Defect Receivables.
                          </p>
                          <p>
                            6.8.3 The assignment of the relevant Defect
                            Receivable above is subject to the condition
                            precedent that eBay Sarl notifies you of the
                            re-assignment (the “Re-Assignment Notice”).
                          </p>
                          <p>
                            6.8.4 You are obliged to pay back any purchase price
                            which you have received for the Defect Receivables
                            from eBay Sarl without undue delay after eBay Sarl
                            has provided the relevant Re-Assignment Notice. eBay
                            Sarl is entitled to set-off this claim which you are
                            obliged to pay to eBay Sarl with any further payment
                            which eBay Sarl is obliged to pay to you.
                          </p>
                        </article>
                        <article>
                          <h4>6.9. Refunds</h4>
                          <p>
                            6.9.1 In case you initiate a refund for any
                            Purchased Receivable (“Refunded Receivable”), the
                            refunding process will be initiated by eBay Sarl
                            through Adyen, and RatePAY will pay the refund to
                            the buyer.
                          </p>
                          <p>
                            6.9.2 You shall reimburse eBay Sarl in connection
                            with any costs, expenses or liabilities incurred by
                            eBay Sarl in connection with any Refunded Receivable
                            (“Reimbursement Claim”) limited to the purchase
                            price of each Refunded Receivable. eBay Sarl is
                            entitled to set-off any Reimbursement Claim with any
                            payment which eBay Sarl is obliged to pay to you.
                          </p>
                          <p>
                            6.9.3 Upon Adyen’s assignment of any Refunded
                            Receivable in part or in whole (if any) to eBay
                            Sarl, eBay Sarl will consequently assign such
                            Refunded Receivable to you.
                          </p>
                        </article>
                        <article>
                          <h4>
                            6.10. Information Undertakings / Further Assistance
                          </h4>
                          <p>
                            6.10.1 You shall undertake to inform eBay Sarl
                            promptly upon becoming aware of (i) any breach of a
                            guarantee according to section 6.7 regarding any
                            Purchased Receivable or (ii) any other event that
                            may materially impair or jeopardise the realisation
                            of the Purchased Receivables or might materially
                            change your solvency or, subject to you becoming
                            aware of it, the probability of payment of the
                            Purchased Receivables by the buyer.
                          </p>
                          <p>
                            6.10.2 In case a buyer files an objection against a
                            Purchased Receivable with RatePAY, RatePAY will
                            notify eBay Sarl using the dispute platform provided
                            by Adyen and eBay Sarl will notify you regarding the
                            objection and instruct you to provide valid proof of
                            shipment or delivery or other proper performance to
                            eBay Sarl in accordance with the{" "}
                            <a href="https://www.ebay.co.uk/help/policies/selling-policies/seller-protections?id=4345">
                              Seller Protection Policy
                            </a>
                            . In case such valid proof is not provided in
                            accordance with the
                            <a href="https://www.ebay.co.uk/help/policies/selling-policies/seller-protections?id=4345">
                              Seller Protection
                            </a>
                            , you agree that this will lead to the re-assignment
                            of the Purchased Receivable by RatePAY to Adyen,
                            Adyen to eBay Sarl and subsequently by eBay Sarl to
                            you and the requirement to repay the purchase price
                            by you to eBay Sarl.
                          </p>
                          <p>
                            6.10.3 In case you receive any payments on the
                            Purchased Receivable, you shall reject these
                            received payments and notify the payer that payment
                            shall be made to RatePAY. You shall notify RatePAY
                            of any rejected payments on the Purchased
                            Receivables.
                          </p>
                          <p>
                            6.10.4 Upon eBay Sarl’s request, you shall promptly
                            hand over to eBay Sarl, Adyen and/or RatePAY any
                            information, records and documents which are
                            necessary or expedient for the examination and the
                            enforcement of the Purchased Receivables. In the
                            event that information, records and documentation
                            necessary for the examination or enforcement of the
                            Purchased Receivables have been transferred by you
                            to third parties (in particular, book-keeping
                            agencies or tax advisors) or the electronic data
                            processing operations are undertaken by third
                            parties, you shall promptly, at eBay Sarl’s request,
                            instruct such third parties to provide and furnish
                            to eBay Sarl, Adyen and/or RatePAY all such
                            necessary information, records and documentation and
                            to supply their services for eBay Sarl, Adyen and/or
                            RatePAY to the extent necessary for the examination
                            or enforcement of the Purchased Receivables.
                          </p>
                        </article>
                        <article>
                          <h4>6.11. Payment</h4>
                          <p>
                            The remuneration of eBay Sarl, the terms of payment
                            and the terms of settlement are stipulated in these
                            Payments Terms of Use and the Fee Page.
                          </p>
                        </article>
                        <article>
                          <h4>6.12. Right of modification</h4>
                          <p>
                            These General Terms and Conditions for RP Payment
                            Methods and/or the RP-TOP may be modified from time
                            to time in accordance with the modification
                            provisions of Part I, Section 10 of these Payments
                            Terms of Use.
                          </p>
                        </article>
                        <article>
                          <h4>6.13. Data Protection</h4>
                          <p>
                            The Parties undertake to process personal data in
                            compliance with applicable data protection law, in
                            particular, the Regulation (EU) 2016/679 of the
                            European Parliament and of the Council of 27 April
                            2016 on the protection of natural persons with
                            regard to the processing of personal data and on the
                            free movement of such data, and repealing Directive
                            95/46/EC (General Data Protection Regulation,
                            "GDPR") and supplementing applicable data protection
                            law.
                          </p>
                        </article>
                        <article>
                          <h4>6.14. General provisions</h4>
                          <p>
                            6.14.1 Measures to minimise the risk of fraud and
                            payment default may be adjusted by RatePAY, by Adyen
                            or eBay Sarl, based on instructions or requirements
                            of RatePAY, at any time and without your consent.
                            eBay Sarl may terminate the processing and
                            settlement of transactions concerning the RP Payment
                            Method(s) without undue delay or if you no longer
                            fulfil the merchant acceptance criteria or these
                            General Terms and Conditions for RP Payment Methods.
                            Other rights of eBay Sarl to terminate the payment
                            services agreement (i.e. the Payments Terms of Use)
                            or to stop its services in accordance with the
                            provisions of these Payments Terms of Use shall
                            remain unaffected.
                          </p>
                          <p>
                            6.14.2 eBay Sarl is entitled to transfer Purchased
                            Receivables in whole or in part to Adyen for the
                            purpose of transferring the collection risk pursuant
                            to section 6.6 or refinancing and to store, process
                            and transfer all relevant transaction data to
                            RatePAY insofar as this is necessary for the
                            performance of the contractual relationship, the
                            transfer of the Purchased Receivable or the Chain
                            Factoring. In this respect, you release Adyen from
                            the obligation of non-disclosure. Adyen is entitled
                            to re-assign any Purchased Receivable to RatePAY.
                            RatePAY is entitled to re-assign any Purchased
                            Receivable to any third party.
                          </p>
                          <p>
                            6.14.3 These General Terms and Conditions for RP
                            Payment Methods for eBay Sellers shall be governed
                            by the law of the Federal Republic of Germany except
                            any assignment of the relevant Seller Receivable
                            which shall be governed under the applicable law by
                            which the relevant Seller Receivable is governed.
                            The provisions of international private law and the
                            UN Sales Convention shall not be applicable. If you
                            are acting as a consumer and if mandatory statutory
                            consumer protection regulations in your relevant
                            country of your residence contain provisions that
                            are more beneficial for you, such provisions shall
                            apply irrespective of the choice of German law.
                          </p>
                        </article>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3>7. Klarna</h3>
                    <p>
                      On certain European eBay sites, buyers may choose a Klarna
                      Payment Method to pay the purchase price for any item you
                      sell them. You hereby agree to and shall comply with the
                      terms and conditions for Klarna Payment Methods (“Klarna
                      Payment Methods Terms”), which shall form an integral part
                      of these Payments Terms of Use. Subject to the following,
                      you agree to sell and assign your purchase price claims
                      against buyers who choose a Klarna Payment Method to eBay
                      Sarl, which will then sell and assign these claims to
                      Adyen N.V. (“Adyen”), which will in turn sell and assign
                      these claims to Klarna Bank AB (publ), Sveavägen 46, 111
                      34 Stockholm, Sweden (“Klarna”). The buyers who use a
                      Klarna Payment Method will make their payments to Klarna,
                      which will forward the payments through Adyen to eBay
                      Sarl, so that eBay Sarl will process and settle such
                      payments according to these Payments Terms of Use.
                    </p>
                    <div className="learn-more learn-more__active">
                      <header>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                          <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                          <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                        </svg>
                        <p>Klarna Payment Methods Terms</p>
                      </header>
                      <div
                        className="learn-more__txt"
                        style={{ display: "none" }}
                      >
                        <article>
                          <h4>7.1. Contractual object and scope</h4>
                          <p>
                            7.1.1 These Klarna Payment Methods Terms shall apply
                            in addition to the other terms and conditions agreed
                            between you and eBay Sarl in these Payments Terms of
                            Use and, in the event of a conflict, shall prevail
                            over such other terms and conditions in these
                            Payments Terms of Use.
                          </p>
                          <p>
                            7.1.2 Klarna is a payment institution that is
                            constantly supervised and officially licensed by
                            Finansinspektionen, the Swedish Financial
                            Supervisory Authority. Klarna offers payment methods
                            for integration on eBay Services. The payment
                            methods offered by Klarna ("Klarna Payment Methods")
                            include payment by invoice and payment by
                            instalments. Your buyers who purchase items on eBay
                            Services may use the currently available Klarna
                            Payment Methods offered by eBay to settle the
                            purchase price claim.
                          </p>
                          <p>
                            7.1.3 If your respective buyer chooses one of the
                            Klarna Payment Methods in connection with a sales
                            contract on the eBay Services (“Sales Contract”),
                            eBay Sarl acquires your purchase price claims
                            against your buyers including all ancillary rights
                            and will sell and assign these to Adyen. Adyen will
                            then sell and assign the purchased claims to Klarna,
                            who will assume the payment default risk in
                            accordance with the following provisions. This
                            arrangement is further referred to as “Chain
                            Factoring”.
                          </p>
                          <p>
                            7.1.4 Klarna and Adyen will not be a party to and
                            not have any obligation under these Payments Terms
                            of Use or any other agreement between you and eBay
                            Sarl, eBay, the buyer or any third party.
                          </p>
                        </article>
                        <article>
                          <h4>
                            7.2. Integration of the Klarna Terms of Payment and
                            the Klarna Privacy Notice
                          </h4>
                          <p>
                            In case of payment by invoice, you shall conclude
                            with each buyer the{" "}
                            <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/27220/de_de/invoice?fee=0">
                              Klarna terms for payment by invoice
                            </a>{" "}
                            (“Klarna Pay Later Terms”) for the buyer’s use of
                            Klarna Payment Methods, as available online at{" "}
                            <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/27220/de_de/invoice?fee=0">
                              https://cdn.klarna.com/1.0/shared/content/legal/terms/27220/de_de/invoice?fee=0
                            </a>
                            . You hereby agree and accept that the Klarna Pay
                            Later Terms shall become an integral part of each
                            Sales Contract where the buyer uses the Klarna
                            Payment Method payment by invoice. Also, the Klarna
                            Data Privacy Notice (“Klarna-PN”) shall be made
                            available to any buyer using a Klarna Payment
                            Method. You hereby agree that Klarna has the Klarna
                            Pay Later Terms and the Klarna-PN implemented into
                            the payment check-out of the Klarna Payment Methods
                            and instruct Klarna to have the Klarna Pay Later
                            Terms and the Klarna-PN made available to the buyer
                            on your behalf.
                          </p>
                        </article>
                        <article>
                          <h4>
                            7.3. Purchase and Assignment of Seller Receivables
                          </h4>
                          <p>
                            7.3.1 You agree that each receivable against your
                            respective buyer in connection with a Sales Contract
                            where your buyer has chosen a Klarna Payment Method
                            and which is nominated in EUR (jointly the “Seller
                            Receivables” and each a “Seller Receivable”) will
                            automatically be offered to eBay Sarl for purchase
                            after conclusion of each Sales Contract. eBay Sarl
                            will either accept your offer by proceeding with the
                            payment process, or reject your offer. Such offer
                            and acceptance will conclude a purchase agreement
                            between you and eBay Sarl (“Single Purchase
                            Agreement”) regarding the relevant Seller Receivable
                            which is purchased (the “Purchased Receivable”) in
                            accordance with these Klarna Payment Methods Terms.
                          </p>
                          <p>
                            7.3.2 You hereby assign, subject to the conclusion
                            of a Single Purchase Agreement, all your current and
                            future Seller Receivables including ancillary rights
                            (such as rights for any securities, transport and
                            deficiency insurance claims, withdrawal or
                            rescission rights, or other claims against third
                            parties with respect to the relevant Seller
                            Receivable) to eBay Sarl, and eBay Sarl hereby
                            accepts the assignment.&nbsp;
                          </p>
                          <p>
                            7.3.3 Upon conclusion of a Single Purchase
                            Agreement, you and eBay Sarl reiterate the
                            assignment of the relevant receivable identified
                            through the transaction-ID in the purchase offer
                            whereby the purchase offer constitutes an offer to
                            assign the relevant receivable from you to eBay Sarl
                            and the acceptance of purchase offer constitutes an
                            acceptance of this offer by eBay Sarl.
                          </p>
                          <p>
                            7.3.4 In case there is any doubt about the validity
                            of the assignment of the Seller Receivables and this
                            requires any further declaration or action by you,
                            you will execute such declaration or action upon
                            request of eBay Sarl.
                          </p>
                          <p>
                            7.3.5 You irrevocably authorize eBay Sarl with the
                            power of sub-delegation to notify the relevant buyer
                            regarding the assignment of the Seller Receivable
                            and to exercise non-assignable rights, such as
                            contractual rights, in connection with the Seller
                            Receivables in its own name.
                          </p>
                        </article>
                        <article>
                          <h4>7.4. Collection Risk/Collection</h4>
                          <p>
                            7.4.1 Except in a case of a Defect Receivable
                            pursuant to section 7.6.1, eBay Sarl bears the risk
                            that the Purchased Receivables are not collectable
                            from the respective buyer in part or in full, in
                            particular caused by the insolvency of the buyer.
                            eBay Sarl will pay the purchase price (minus the
                            agreed fees and expenses of eBay Sarl) for the
                            relevant Purchased Receivable regardless of whether
                            it chooses to enforce the relevant Purchased
                            Receivable.
                          </p>
                          <p>
                            7.4.2 The collection and enforcement of the
                            Purchased Receivables is the responsibility of eBay
                            Sarl. eBay Sarl shall bear any and all costs in this
                            regard.
                          </p>
                          <p>
                            7.4.3 eBay Sarl will transfer the economic risks of
                            the obligations described in section 7.4.1 and 7.4.2
                            to Adyen and consequently to Klarna in accordance
                            with the Chain Factoring as described in section
                            7.1.3.
                          </p>
                        </article>
                        <article>
                          <h4>7.5 Representations and Warranties</h4>
                          <p>
                            7.5.1 Every time upon entering into a Single
                            Purchase Agreement concerning a Purchased
                            Receivable, you represent and warrant to eBay Sarl
                            that
                          </p>
                          <p>
                            (i) the Purchased Receivable is valid, validly
                            assigned to eBay Sarl and enforceable against the
                            buyer;
                          </p>
                          <p>
                            (ii) you hold free and clear title to, and may
                            freely assign and transfer, the Purchased
                            Receivable, and the Purchased Receivable has not yet
                            been assigned or transferred to third parties; and
                          </p>
                          <p>
                            (iii) you will ship, deliver or provide the
                            respective item(s) to the relevant buyer completely,
                            on time and in accordance with the Sales Contract
                            with the respective buyer in order that the
                            respective buyer is not able to exercise any right
                            or claim of retention, set-off, supplementary
                            performance, reduction, recession right or damage
                            claims.
                          </p>
                          <p>
                            7.5.2 Each of these representations and warranties
                            to eBay Sarl with respect to a Single Purchase
                            Agreement will be provided by eBay Sarl to Adyen
                            (and by Adyen to Klarna) back-to-back in accordance
                            with the Chain Factoring arrangement.
                          </p>
                        </article>
                        <article>
                          <h4>
                            7.6. Assignment of Purchased Receivables back to
                            You/Disputes
                          </h4>
                          <p>
                            7.6.1 If the relevant Purchased Receivable fulfils
                            one of the following criteria (the “Defect
                            Receivable”):
                          </p>
                          <ol>
                            <li>
                              the buyer reverses the Sales Contract on the basis
                              of a mandatory withdrawal right or a voluntary
                              right of return offered by you;
                            </li>
                            <li>
                              in case of an eMBG claim or a payment dispute; for
                              example, if the buyer objects to a Purchased
                              Receivable, if - upon request of eBay Sarl - you
                              do not provide valid proof of shipment or delivery
                              or other proper performance to eBay Sarl in
                              accordance with the
                              <a href="https://www.ebay.co.uk/help/policies/selling-policies/seller-protections?id=4345">
                                Seller Protection Policy
                              </a>
                              ;
                            </li>
                            <li>
                              you are in breach of a representation and warranty
                              pursuant to section 7.5.1 in respect of the
                              Purchased Receivable;
                            </li>
                          </ol>
                          <p>
                            or in any other case where you give a refund to a
                            buyer for any Purchased Receivable (“Refunded
                            Receivable”), and Adyen consequently decides to use
                            its right to assign back the relevant
                            Defect/Refunded Receivable to eBay Sarl, eBay Sarl
                            is entitled to assign back any Defect/Refunded
                            Receivable to you.
                          </p>
                          <p>
                            7.6.2 eBay Sarl hereby assigns all current and
                            future Defect/Refunded Receivables to you subject to
                            the condition precedent in section 7.6.3 below and
                            you hereby accept the assignment of all current and
                            future Defect/Refunded Receivables.
                          </p>
                          <p>
                            7.6.3 The assignment of the relevant Defect/Refunded
                            Receivable above is subject to the condition
                            precedent that eBay Sarl notifies you of the
                            re-assignment (the “Re-Assignment Notice”).
                          </p>
                          <p>
                            7.6.4 You are obliged to pay back any purchase price
                            which you have received for the Defect/Refunded
                            Receivable from eBay Sarl without undue delay after
                            eBay Sarl has provided the relevant Re-Assignment
                            Notice. eBay Sarl is entitled to set-off this claim
                            which you are obliged to pay to eBay Sarl with any
                            further payment which eBay Sarl is obliged to pay to
                            you.
                          </p>
                        </article>
                        <article>
                          <h4>
                            7.7. Information and Assistance Obligations/General
                            Provisions
                          </h4>
                          <p>
                            7.7.1 You shall undertake to inform eBay Sarl
                            promptly upon becoming aware of (i) any breach of a
                            representation and warranty according to section
                            7.5.1 regarding any Purchased Receivable or (ii) any
                            other event that may materially impair or jeopardise
                            the realisation of the Purchased Receivables or
                            might materially change your solvency or, subject to
                            you becoming aware of it, the probability of payment
                            of the Purchased Receivables by the buyer.
                          </p>
                          <p>
                            7.7.2 In case you receive any direct payments from a
                            buyer on the Purchased Receivable, you shall reject
                            these received payments and refund the buyer, and
                            notify the payer that payment shall be made to
                            Klarna. You shall notify eBay Sarl of any rejected
                            payments on the Purchased Receivables.
                          </p>
                          <p>
                            7.7.3 Upon eBay Sarl’s request, you shall promptly
                            hand over to eBay Sarl, Adyen and/or Klarna any
                            information, records and documents which are
                            necessary or expedient for the examination and the
                            enforcement of the Purchased Receivables.
                          </p>
                        </article>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3>8. Corrective Measures</h3>
                    <p>
                      If we become aware of suspected or actual fraud or other
                      security threats affecting your eBay account, we will
                      notify you by email and provide you with instructions on
                      how to protect such account.
                    </p>
                  </article>
                  <article>
                    <h3>9. General Provisions</h3>
                    <article>
                      <h4>Exclusion of Certain Provisions for Non-Consumers</h4>
                      <p>
                        If you are a business which uses the Payment Services,
                        you agree that Articles 79 (1), 81 (3), 86, 88, 89, 90,
                        93, and 101 and Title III of the Law of 10 November 2009
                        on payment services shall not apply to your use of the
                        Payment Services.
                      </p>
                    </article>
                    <article>
                      <h4>Individuals</h4>
                      <p>
                        If you are an individual acting in your own capacity and
                        not on behalf of a business, you may not use the Payment
                        Services to receive or transfer funds on behalf of
                        another natural person or a legal entity.
                      </p>
                      <p></p>
                    </article>
                    <article>
                      <h4>Complaints</h4>
                      <p>
                        Any complaints about eBay Sarl or the services it
                        provides should first be addressed to eBay Sarl. You
                        agree that all responses from eBay Sarl relating to such
                        complaints may be sent to you by email.
                      </p>
                      <p>
                        Should you not be satisfied with eBay Sarl’s responses,
                        you may also escalate your complaint to the CSSF (
                        <a href="https://www.cssf.lu/" target="_blank">
                          www.cssf.lu
                        </a>
                        ), which is the competent authority to receive
                        out-of-court complaints by customers of payment service
                        providers authorized in Luxembourg. For further
                        information please refer to our{" "}
                        <a href="https://www.ebay.co.uk/help/policies/member-behavior-policies/impressum?id=4714&amp;st=2&amp;pos=1&amp;query=Impressum&amp;intent=Impress#section4">
                          Complaints Procedure
                        </a>
                        .
                      </p>
                      <p>
                        If you reside in the United Kingdom, you may escalate
                        your complaint to the Financial Ombudsman Services. For
                        further information, please refer to the{" "}
                        <a
                          href="https://www.financial-ombudsman.org.uk/"
                          target="_blank"
                        >
                          Financial Ombudsman
                        </a>{" "}
                        website and the
                        <a
                          href="https://www.financial-ombudsman.org.uk/businesses/resolving-complaint/ordering-leaflet/leaflet"
                          target="_blank"
                        >
                          Financial Ombudsman Services Standard Explanatory
                          Leaflet
                        </a>
                        .
                      </p>
                    </article>
                    <article>
                      <h4>Communication</h4>
                      <p>
                        We will communicate with you in the language(s) in which
                        we provided these Payments Terms of Use to you. You
                        agree that we may give you notice or other information
                        by posting it in your eBay Account, emailing it to your
                        registered email address, mailing it to your registered
                        physical address, calling your phone number, or sending
                        you mobile messages.
                      </p>
                      <p>
                        Legal notices to eBay Sarl (except for termination
                        notices pursuant to Part I, Section 11) shall be served
                        by mail to the following address: eBay S.à.r.l., 22-24
                        Boulevard Royal, L-2449 Luxembourg.
                      </p>
                      <p>
                        You may request a copy of any legally required
                        disclosures (including these Payments Terms of Use) from
                        us; we will then provide it to you in a format which
                        allows you to store and reproduce the information (for
                        example, by email) or, upon your request, on paper.
                      </p>
                    </article>
                    <article>
                      <h4>Governing Law and Jurisdiction</h4>
                      <p>
                        These Payments Terms of Use shall be governed by and
                        construed in accordance with the laws of the Grand Duchy
                        of Luxembourg. If you are acting as a consumer (rather
                        than as a business) and if mandatory statutory consumer
                        protection regulations in your country of residence
                        contain provisions that are more beneficial for you,
                        such provisions shall apply irrespective of the choice
                        of Luxembourg law.
                      </p>
                      <p>
                        As a consumer, you may bring any judicial proceedings
                        relating to the General Payments Terms and these
                        Additional Payments Terms for Payment Services provided
                        by eBay Sarl before the competent court of either your
                        place of residence or eBay Sarl's place of business in
                        Luxembourg. If eBay Sarl wishes to enforce any of its
                        rights against you as a consumer, we may do so only in
                        the courts of the jurisdiction in which you are a
                        resident. If you are acting as a business seller, you
                        agree to submit to the exclusive jurisdiction of the
                        courts of the Grand Duchy of Luxembourg.
                      </p>
                    </article>
                  </article>
                </div>
              </div>
            </section>
            <section id="section-iv">
              <h2>IV. ADDITIONAL TERMS FOR SERVICES PROVIDED BY ECCA</h2>
              <p>
                In addition to the General Payments Terms above, the following
                provisions apply with respect to Payment Services you receive
                from ECCA. Within this section, “we” or “us” refers to ECCA.
              </p>
              <p>
                As between you and ECCA, these Payments Terms of Use incorporate
                by this reference the{" "}
                <a href="https://www.ebay.ca/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>
                . In the event of any conflict between the
                <a href="https://www.ebay.ca/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                and these Payments Terms of Use, these Payments Terms of Use
                will govern.
              </p>
              <p>
                We may change, discontinue, enhance, or modify features of
                Managed Payments at any time.
              </p>
              <div className="learn-more learn-more__active">
                <header>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                    <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                    <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                  </svg>
                  <p>Expand Part IV</p>
                </header>
                <div className="learn-more__txt" style={{ display: "none" }}>
                  <article>
                    <h3>1. Receipt and Settlement of Funds</h3>
                    <p>
                      After a Managed Payments transaction occurs, you will
                      receive a notification confirming such payment
                      transaction.
                      <strong>
                        In certain instances, your transaction may be declined,
                        frozen, or held for any reason including for suspected
                        fraud, high risk or potential violation of any eBay or
                        ECCA policies, or a policy of one of our third-party
                        payments services providers.
                      </strong>
                    </p>
                    <p>
                      If we are your Payout Entity, we will initiate settlement
                      of proceeds received to your Linked Financial Account.
                      Your transaction proceeds, other than those being held in
                      accordance with these Payments Terms of Use, and subject
                      to the estimated settlement times set forth in the next
                      sentence, will be aggregated to a daily batch for
                      settlement to you on a regular basis (for example, a
                      single daily settlement for all transactions ready for
                      disbursement to you that day), unless otherwise requested
                      by you and agreed to by us. We anticipate that Managed
                      Payments transactions proceeds will generally be settled
                      in your Linked Financial Account approximately two to
                      seven business days after the buyer's transaction,
                      although actual settlement times may vary for individual
                      transactions based on circumstances such as your bank’s
                      processing times. However, we may diverge from this
                      procedure as needed for compliance or operational reasons.
                      If we are unable to settle your proceeds, then, depending
                      on the reason why we are unable to settle your proceeds,
                      we may refund the buyer (e.g., in the event that we cannot
                      process your information for technical reasons or you
                      violate these Payments Terms of Use, etc.) or otherwise
                      process these funds in accordance with applicable law or
                      our policies.
                    </p>
                  </article>
                  <article>
                    <h3>2. Authorization to Pay</h3>
                    <p>
                      The authorization to pay for Owed Amounts in accordance
                      with Part I, Section 9 is an electronic pre-authorized
                      debit agreement (<strong>“PAD Agreement”</strong>) that
                      you are entering into for business purposes to allow eBay
                      to debit your designated bank account, and is subject to
                      the rules of Payments Canada.
                    </p>
                    <p>
                      By completing registration for Managed Payments, you
                      hereby authorize ECCA (or eBay on our behalf) and the
                      ﬁnancial institution that has issued your designated bank
                      account (or any other ﬁnancial institution you may
                      authorize at any time) to debit your designated bank
                      account monthly for recurring, variable payments (as
                      invoiced) on your scheduled payment date and from time to
                      time for any other Owed Amounts. You acknowledge that
                      ECCA, or eBay on our behalf, may contact you for a
                      separate authorization for any withdrawal that is not on a
                      scheduled payment date.
                    </p>
                    <p>
                      ECCA, or our Affiliates on our behalf, will charge your
                      account a CDN$ 7.00 fee by way of a separate debit for
                      each and every debit transaction authorized above that is
                      unsuccessful or returned unpaid by your ﬁnancial
                      institution. We shall have no liability to you whatsoever
                      caused by a dishonoured debit.
                    </p>
                    <p>
                      If you would like to cancel this PAD Agreement, you may do
                      so at any time by contacting us. You may obtain further
                      information on your right to cancel this PAD Agreement
                      from your financial institution or by visiting
                      www.cdnpay.ca. If you cancel this PAD Agreement without
                      providing a new authorization, we may suspend or cancel
                      your Payment Services and eBay may suspend or cancel your
                      eBay Services.
                    </p>
                    <p>
                      You have certain recourse rights if any debit does not
                      comply with this PAD Agreement. For example, you have the
                      right to receive reimbursement for any debit that is not
                      authorized or is not consistent with this PAD Agreement.
                      You can revoke your payment authorization at any time,
                      subject to thirty (30) days’ prior notice. To obtain more
                      information on your recourse rights, or for further
                      information on your right to cancel this PAD Agreement and
                      applicable forms, you may contact your ﬁnancial
                      institution or visit www.payments.ca.
                    </p>
                  </article>
                  <article>
                    <h3>3. Legal Disputes</h3>
                    <p>
                      <strong>
                        PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR
                        RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS
                        YOU AND EBAY HAVE AGAINST EACH OTHER ARE RESOLVED.
                      </strong>
                    </p>
                    <p>
                      You and ECCA agree that any claim or dispute at law or
                      equity that has arisen, or may arise, between you and ECCA
                      (including any claim or dispute between you and a
                      third-party agent of ECCA) that relates in any way to or
                      arises out of this or previous versions of these Payments
                      Terms of Use, your use of or access to the Payment
                      Services, the actions of ECCA or its agents, will be
                      resolved in accordance with the provisions set forth in
                      this Legal Disputes Section.
                    </p>
                    <ul>
                      <li>
                        <strong>
                          Law and Forum for Disputes if you do not reside in
                          Quebec –
                        </strong>{" "}
                        These Payments Terms of Use and any dispute or claim you
                        have against eBay shall be governed in all respects by
                        the laws of the Province of Ontario and the federal laws
                        of Canada applicable therein. Except as otherwise agreed
                        by the parties or as described in the Arbitration Option
                        paragraph below you agree to submit to the jurisdiction
                        of the courts located in Toronto, Ontario for the
                        resolution of and all claims or disputes you may have
                        against ECCA.
                      </li>
                      <li>
                        <strong>
                          Law and Forum for Disputes if you reside in Quebec -
                        </strong>{" "}
                        These Payments Terms of Use and any dispute or claim you
                        have against ECCA shall be governed in all respects by
                        the laws of the Province of Quebec and the federal laws
                        of Canada applicable therein.
                      </li>
                      <li>
                        <strong>Arbitration Option -</strong> For any dispute or
                        claim (excluding claims for injunctive or other
                        equitable relief) where the total amount of monetary
                        relief sought is less than CDN$15,000, the parties may
                        elect to resolve the dispute in a cost-effective manner
                        through binding arbitration. In the event that the
                        parties agree to arbitration, such arbitration shall be
                        conducted pursuant to the simplified arbitration
                        procedure set out in the arbitration rules of the ADR
                        Institute of Canada, in force at the time of the
                        dispute. Unless the parties agree or the arbitrator
                        determines otherwise, the arbitration shall not involve
                        any personal appearance by the parties or witnesses and
                        shall be conducted by telephone, online and/or be solely
                        based on written submissions. Any judgement on the award
                        rendered by the arbitrator may be entered in any court
                        of competent jurisdiction.
                      </li>
                      <li>
                        <strong>Improperly Filed Claims -</strong> All claims
                        you bring against ECCA must be resolved in accordance
                        with this Resolution of Disputes section. All claims
                        filed or brought contrary to the Resolution of Disputes
                        section shall be considered improperly filed. Should you
                        file a claim contrary to the Resolution of Disputes
                        Section, ECCA may recover attorneys' fees and costs up
                        to CDN$1500, provided that eBay has notified you in
                        writing of the improperly filed claim, and you have
                        failed to promptly withdraw the claim. Except as stated
                        otherwise, legal notices to ECCA shall be served on
                        ECCA’s national registered agent.
                      </li>
                    </ul>
                    <p>
                      <strong>[Does not apply if you reside in Quebec]</strong>{" "}
                      Any translation of these Payments Terms of Use and all
                      related documents is done for our users’ convenience and
                      in the event of a dispute between the English and French
                      version, the English version of these Payments Terms of
                      Use and all related documents shall govern.
                    </p>
                    <p>
                      If you are a resident of the Province of Quebec, the
                      following clause applies: The parties hereby confirm that
                      they have requested that these Payments Terms of Use and
                      all related documents be drafted in English.
                      <em>
                        Les parties ont exigé que la présente convention et tous
                        les documents afférents soient rédigés en langue
                        anglaise.
                      </em>
                    </p>
                  </article>
                </div>
              </div>
            </section>
            <section id="section-v">
              <h2>V. ADDITIONAL TERMS FOR SERVICES PROVIDED BY ECA</h2>
              <p>
                In addition to the General Payments Terms above, the following
                provisions apply with respect to Payment Services you receive
                from ECA. Within this section, “we” or “us” refers to ECA.
              </p>
              <p>
                As between you and ECA, these Payments Terms of Use incorporate
                by this reference the{" "}
                <a href="https://www.ebay.com.au/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>
                . In the event of any conflict between the
                <a href="https://www.ebay.com.au/help/policies/member-behaviour-policies/user-agreement?id=4259">
                  User Agreement
                </a>{" "}
                and these Payments Terms of Use, these Payments Terms of Use
                will govern.
              </p>
              <p>
                We may change, discontinue, enhance, or modify features of
                Managed Payments at any time. If ECA is your Payout Entity, we
                will notify you of any material changes or modifications to the
                features of Managed Payments through eBay messages (in My eBay)
                or directly to the email address linked to your account.
              </p>
              <div className="learn-more learn-more__active">
                <header>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                    <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                    <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                  </svg>
                  <p>Expand Part V</p>
                </header>
                <div className="learn-more__txt" style={{ display: "none" }}>
                  <article>
                    <h3>
                      1. Receipt and Settlement of Funds; Disabling Payment
                      Methods
                    </h3>
                    <p>
                      After a Managed Payments transaction occurs, you will
                      receive a notification confirming such payment
                      transaction. In certain instances, your transaction may be
                      declined, frozen, or held for any reason including for
                      suspected fraud or potential violation of any eBay or ECA
                      policies, or a policy of one of our third-party payments
                      service providers.
                    </p>
                    <p>
                      If we are your Payout Entity, we will initiate settlement
                      of proceeds received to your Linked Financial Account.
                      Your transaction proceeds, other than those being held in
                      accordance with these Payments Terms of Use, and subject
                      to the estimated settlement times set forth in the next
                      sentence, will be aggregated to a daily batch for
                      settlement to you to be paid out as agreed with you (for
                      example, a single daily settlement for all transactions
                      ready for disbursement to you that day). We anticipate
                      that Managed Payments transaction proceeds will generally
                      be settled to your Linked Financial Account approximately
                      two to seven business days after the buyer's transaction,
                      although actual settlement times may vary for individual
                      transactions based on circumstances such as your bank’s
                      processing times. However, we may diverge from this
                      procedure as needed for compliance or risk reasons. If we
                      are unable to settle your proceeds, then, depending on the
                      reason why we are unable to settle your proceeds, we may
                      refund the buyer (e.g., in the event that we cannot
                      process your information for technical reasons etc.) or
                      otherwise process these funds in accordance with
                      applicable law or our policies.
                    </p>
                    <p>
                      We may disable specific payment method(s) available to
                      buyers for all or some of your listings if we reasonably
                      believe the use of such payment methods for your
                      transactions will increase regulatory, financial, or other
                      risk to us. For example, if you would like to offer a
                      high-priced item with a new eBay account, we may disable
                      such payment methods where the amount is credited with a
                      time delay after the transaction (e.g. Buy Now Pay Later).
                      In assessing the risk, we consider relevant factors such
                      as your sales history, service status, eBay account
                      history, risks associated with certain item categories,
                      transaction value, and number and monetary amounts of eBay
                      Buyer Protection cases. We will re-enable the affected
                      payment method(s) for your listings once the risk no
                      longer exists.
                    </p>
                  </article>
                  <article>
                    <h3>2. Unsuccessful Direct Debits</h3>
                    <p>
                      We will charge your account an AUD 8.00 fee by way of a
                      separate debit for every debit transaction for an Owed
                      Amount that is unsuccessful or returned unpaid by your
                      financial institution. We shall have no liability to you
                      whatsoever caused by a dishonoured debit.
                    </p>
                  </article>
                  <article>
                    <h3>3. Data Protection</h3>
                    <p>
                      The performance of services by us under these Payments
                      Terms of Use entails the processing of your personal
                      information and the personal information of third-party
                      natural persons (such as your representatives or contact
                      persons). We are required to collect some of this personal
                      information to comply with applicable anti-money
                      laundering and sanctions screening obligations. If we
                      cannot collect all or some of this information, we may not
                      be able to provide our Payment Services to you. We
                      disclose personal information to third-party payment
                      service providers. These providers may be located outside
                      Australia. Please refer to the{" "}
                      <a href="https://www.ebay.com.au/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">
                        User Privacy Notice
                      </a>{" "}
                      for further information on the processing of personal
                      information and how individuals may seek to access or
                      correct their personal information or make a privacy
                      complaint.
                    </p>
                  </article>
                  <article>
                    <h3>4. Legal Disputes</h3>
                    <p>
                      If a dispute arises between you and ECA, our goal is to
                      provide you with a neutral and cost-effective means of
                      resolving the dispute quickly. We strongly encourage you
                      to first
                      <a href="https://www.ebay.com.au/help/policies/member-behaviour-policies/user-agreement?id=4259#24">
                        contact us
                      </a>{" "}
                      to seek a resolution. If your dispute is not resolved by
                      contacting Customer Service, all legal notices and formal
                      disputes should be sent to ECA's registered agent in
                      accordance with the “Notices” section below. We will
                      consider reasonable requests to resolve the dispute
                      through alternative dispute resolution procedures, such as
                      mediation or arbitration, as alternatives to litigation.
                    </p>
                    <article>
                      <h4>Law and Forum for Legal Disputes</h4>
                      <p>
                        These Payments Terms of Use will be governed in all
                        respects by the laws of New South Wales. We encourage
                        you to try and resolve disputes using certified
                        mediation (such as online dispute resolution processes).
                        If a dispute cannot be resolved then you and ECA
                        irrevocably submit to the non-exclusive jurisdiction of
                        the courts of New South Wales, Australia.
                      </p>
                    </article>
                    <article>
                      <h4>Notices</h4>
                      <p>
                        Legal notices must be served on ECA’s registered agent
                        (in ECA’s case) or to the email address you provide to
                        eBay during the registration process (in your case).
                        Notice will be deemed given 24 hours after email is
                        sent, unless the sending party is notified that the
                        email address is invalid or that the email has not been
                        delivered. Alternatively, we may give you legal notice
                        by mail to the address provided by you during the
                        registration process. In such case, notice will be
                        deemed given three days after the date of mailing.
                      </p>
                      <p>
                        Any notices to ECA’s registered agent must be given by
                        registered ordinary post (or if posted to or from a
                        place outside Australia, by registered airmail) or by
                        facsimile transmission to eBay Commerce Australia Pty
                        Ltd c/o Corrs Chambers Westgarth, 8-12 Chifley Square,
                        Sydney NSW 2000, Fax: (01) 9210 6611.
                      </p>
                    </article>
                  </article>
                </div>
              </div>
            </section>
            <section id="section-vi">
              <h2>VI. ADDITIONAL TERMS FOR SERVICES PROVIDED BY ECUK</h2>
              <p>
                In addition to the General Payments Terms above, the following
                provisions apply with respect to Payment Services you receive
                from ECUK.
              </p>
              <p>
                Within this section, “we” or “us” refers to ECUK. As between you
                and ECUK, these Payments Terms of Use incorporate by this
                reference the provisions of the
                <a
                  href="https://www.ebay.co.uk/help/policies/member-behaviour-policies/user-agreement?id=4259"
                  target="_blank"
                >
                  User Agreement
                </a>{" "}
                to the extent applicable to this agreement. In the event of any
                conflict between the
                <a
                  href="https://www.ebay.co.uk/help/policies/member-behaviour-policies/user-agreement?id=4259"
                  target="_blank"
                >
                  User Agreement
                </a>{" "}
                and these Payments Terms of Use, these Payments Terms of Use
                will govern.
              </p>
              <div className="learn-more learn-more__active">
                <header>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z"></path>
                    <polygon points="25 15.1 7 15.1 7 16.9 25 16.9 25 15.1 25 15.1"></polygon>
                    <polygon points="16.9 7 15.1 7 15.1 25 16.9 25 16.9 7 16.9 7"></polygon>
                  </svg>
                  <p>Expand Part VI</p>
                </header>
                <div className="learn-more__txt" style={{ display: "none" }}>
                  <article>
                    <h3>1. Payment Service; Disabling Payment Methods</h3>
                    <p>
                      You authorize ECUK to acquire and settle payments that it
                      receives on your behalf. When you sell an item on eBay,
                      you are deemed to be a payee, with ECUK acting as your
                      payment service provider. In a refund, chargeback, or
                      similar scenario, you may also be deemed to be a payer,
                      again with ECUK acting as your payment service provider.
                    </p>
                    <p>
                      The acceptance of a buyer’s payment instrument (for
                      example, their Visa card), once it has been authorized for
                      payment, satisfies the buyer’s payment obligation to you,
                      regardless of whether we actually settle such payment to
                      you. In the event that we do not make any such payment to
                      you as described in these Payments Terms of Use, you will
                      have recourse against us only and not against the buyer.
                      To the extent permissible under the rules of any
                      third-party or governmental body with jurisdiction over
                      us, you agree that we are not liable for your acts and
                      omissions and you understand that we disclaim any such
                      liability.
                    </p>
                    <p>
                      We may disable specific payment method(s) available to
                      buyers for all or some of your listings if we reasonably
                      believe the use of such payment methods for your
                      transactions will increase regulatory, financial, or other
                      risk to us. For example, if you would like to offer a
                      high-priced item with a new eBay account, we may disable
                      such payment methods where the amount is credited with a
                      time delay after the transaction (e.g. direct debit or
                      payment upon invoice). In assessing the risk, we consider
                      relevant factors such as your sales history, service
                      status, eBay account history, risks associated with
                      certain item categories, transaction value, and number and
                      monetary amounts of eBay Buyer Protection cases. We will
                      re-enable the affected payment method(s) for your listings
                      once the risk no longer exists.
                    </p>
                  </article>
                  <article>
                    <h3>2. Execution of Payment Transactions</h3>
                    <p>
                      When you, as a payee, use Managed Payments, the payment
                      transactions will be executed in accordance with the
                      payment schemes rules and procedures, or as otherwise
                      agreed.
                    </p>
                  </article>
                  <article>
                    <h3>Required Information</h3>
                    <p>
                      Your payer (for example, the buyer of an item you sell on
                      eBay) must ensure we are provided with the data required
                      for us to execute the payment transaction. If we do not
                      have sufficient data to execute such transaction, we
                      reserve the right to ask your payer’s payment service
                      provider for the required information.
                    </p>
                    <p>
                      We require the following information for the execution of
                      a payment transaction:
                    </p>
                    <ul>
                      <li>Your name,</li>
                      <li>Your eBay username,</li>
                      <li>The buyer’s name (where applicable),</li>
                      <li>
                        The buyer’s eBay username, and any other data about the
                        buyer which the buyer’s payment service provider or we
                        may require (where applicable),
                      </li>
                      <li>
                        The currency of the payment transaction (if possible, in
                        abbreviated form),
                      </li>
                      <li>The amount of the payment transaction, and</li>
                      <li>The beneficiary’s payment details.</li>
                    </ul>

                    <p>
                      To the extent reasonably possible, we will automatically
                      utilize the information stored in our systems. Where the
                      required information provided by you or your payer is not
                      fully available or is inaccurate, we will not bear any
                      liability for any damage, delay, or other consequence from
                      the non-execution or defective execution of the relevant
                      payment transaction.
                    </p>
                  </article>
                  <article>
                    <h3>Receipt of Payment Orders</h3>
                    <p>
                      A payment order will be deemed to have been received by us
                      if:
                    </p>
                    <ul>
                      <li>
                        Carried out by means of a payment card, then in
                        accordance with the card schemes rules; or
                      </li>
                      <li>
                        Received by our available electronic communication
                        channels, then on the business day when it is actually
                        received by us.
                      </li>
                    </ul>
                    <p>
                      If the payment order is not received on a business day, it
                      will be deemed to be received on the next business day.
                      “Business days” in this Part III of these Payments Terms
                      of Use shall mean the days on which banks in London are
                      open for regular business.
                    </p>
                    <p>
                      You may not revoke a payment order after we have received
                      it. However, if we have agreed that a payment order will
                      be executed on a certain future date, the business day
                      prior to this future date will be the latest you can
                      revoke the payment order.
                    </p>
                  </article>
                  <article>
                    <h3>Refusal of Payment Orders</h3>
                    <p>
                      We reserve the right to refuse the execution of a payment
                      order when:
                    </p>
                    <ul>
                      <li>
                        The payment order information contains factual errors
                        and/or is incomplete;
                      </li>
                      <li>
                        You have not satisfied your obligations under these
                        Payments Terms of Use or any other agreement between you
                        and us;
                      </li>
                      <li>
                        There are doubts about the validity of the instruction,
                        or the identity or authority of the person giving the
                        payment order; or
                      </li>
                      <li>
                        The payment order, if executed, would lead to a breach
                        of the applicable rules, laws, or regulations.
                      </li>
                    </ul>
                    <p>We may charge a reasonable fee for such a refusal.</p>

                    <p>
                      You acknowledge that when executing a payment transaction,
                      we may have to disclose information mentioned above and
                      your legal address to your buyer’s payment service
                      provider and, where relevant, also to intermediaries
                      involved in the execution of the payment transaction. You
                      expressly accept and instruct us to disclose such data.
                    </p>
                    <p>
                      Where you are the payer, the execution of the transaction
                      may depend on us having received the respective amount
                      from you prior to the execution.
                    </p>
                  </article>
                  <article>
                    <h3>3. Settlement of Funds; Shipping Labels</h3>
                    <p>
                      If we are your Payout Entity, we will initiate settlement
                      of proceeds received to your Linked Financial Account.
                      Your transaction proceeds, other than those being held in
                      accordance with these Payments Terms of Use, and subject
                      to the estimated settlement times set forth in the next
                      sentence, will be aggregated to a daily batch for
                      settlement to you to be paid out as agreed with you (for
                      example, a single daily settlement for all transactions
                      ready for disbursement to you that day). We anticipate
                      that the disbursement of Managed Payments transactions
                      proceeds to your Linked Financial Account will be
                      initiated approximately one to two business days after the
                      buyer's order, although actual settlement times may vary
                      for individual transactions depending on the buyer’s
                      payment method, and when the payments transaction is
                      received by us. We may diverge from this procedure as
                      needed for compliance or risk reasons. If we are unable to
                      settle your proceeds, then, depending on the reason why we
                      are unable to settle your proceeds, we may refund the
                      buyer (e.g., in the event that we cannot process your
                      information due to technical reasons etc.) or otherwise
                      process these funds in accordance with applicable law or
                      our policies.
                    </p>
                    <p>
                      We will provide you with monthly statements of your
                      transactions free of charge, which can be accessed in the{" "}
                      <a
                        href="https://www.ebay.co.uk/help/selling/selling-tools/seller-hub?id=4095&amp;st=3&amp;pos=1&amp;query=Seller%20Hub"
                        target="_blank"
                      >
                        Seller Hub
                      </a>
                      .
                    </p>
                    <p>
                      If buyers purchase a return shipping label at their own
                      expense on the eBay website, eBay may automatically deduct
                      the label costs from the refund amount a buyer receives
                      from you. If this occurs, you agree (as a debtor to the
                      buyer for the refund) to be delegated as a debtor to the
                      shipping carrier for the label costs, and authorize us to
                      use the relevant part of the refund amount to pay the
                      shipping carrier on your behalf. You will not bear any
                      additional shipping costs in this event.
                    </p>
                  </article>
                  <article>
                    <h3>4. Liability for Unauthorized Payment Transactions</h3>
                    <p>
                      You will be fully liable for all losses relating to an
                      unauthorized payment transaction if you acted fraudulently
                      with respect to such a payment transaction, or if you
                      failed to fulfill one or more of the obligations under
                      this agreement (such as keeping your credentials safe or
                      notifying us without undue delay) with intent or gross
                      negligence.
                    </p>
                  </article>
                  <article>
                    <h3>5. Our Liability</h3>
                    <p>
                      We will refund you in full and are liable for losses
                      directly and reasonably foreseeably incurred by an
                      incorrectly or non-executed payment transaction, provided
                      that you have informed us of such transaction without
                      undue delay after becoming aware of the defect and in no
                      event later than thirteen (13) months after the
                      transaction was executed, unless we failed to make
                      information about the transaction available to you.
                    </p>
                    <p>
                      To the fullest extent permitted by applicable law, we and
                      our Affiliates (and our and their respective employees,
                      directors, agents and representatives) will not be liable
                      for any direct lost profits, any indirect lost profits, or
                      any special, incidental or consequential damages
                      (including without limitation damages for loss of data or
                      loss of business) arising out of or in connection with
                      these Payments Terms of Use or Managed Payments (including
                      the inability to use Managed Payments). In addition, to
                      the fullest extent permitted by applicable law, in no
                      event will aggregate liability of us or our Affiliates
                      (and our and their respective employees, directors, agents
                      and representatives) arising out of or in connection with
                      these Payments Terms of Use, the transactions contemplated
                      hereby, or Managed Payments exceed the actual amount of
                      direct damages (excluding direct loss of profits), whether
                      in contract, tort (including negligence, product liability
                      or other theory), warranty, or otherwise.
                    </p>
                    <p>
                      Without limiting the foregoing, in no event will we or any
                      of our Affiliates be liable to you for any failure or
                      delay by us (or our employees, agents, or representatives)
                      in performing our obligations under these Payments Terms
                      of Use, where such failure or delay is caused by abnormal
                      and unforeseeable circumstances beyond our control, the
                      consequences of which would have been unavoidable despite
                      all reasonable efforts to the contrary, or where we are
                      bound by other legal obligations covered by applicable
                      law.
                    </p>
                  </article>
                  <article>
                    <h3>6. Corrective Measures</h3>
                    <p>
                      If we become aware of suspected or actual fraud or other
                      security threats affecting your eBay account, we will
                      notify you by email and provide you with instructions on
                      how to protect such account.
                    </p>
                  </article>
                  <h3>7. General Provisions</h3>
                  <article>
                    <h3>Exclusion of Certain Provisions for Non-Consumers</h3>
                    <p>
                      If you are using these payment services of managed
                      payments as a business, you agree that Articles 54 (1), 55
                      (3), 60, 62, 63, 64, 67, 75, 76 and Part 5 of the Payment
                      Services Regulations 2009 shall not apply to your use of
                      the Payment Services.
                    </p>
                  </article>
                  <article>
                    <h3>Individuals</h3>
                    <p>
                      If you are an individual acting in your own capacity and
                      not on behalf of a business, you may not use the Payment
                      Services to receive or transfer funds on behalf of another
                      natural person or a legal entity.
                    </p>
                  </article>
                  <article>
                    <h3>Complaints</h3>
                    <p>
                      Any complaints about ECUK or the services it provides
                      should first be addressed to ECUK. You agree that all
                      responses from ECUK relating to such complaints may be
                      sent to you by email.
                    </p>
                    <p>
                      Should you not be satisfied with ECUK’s answer, you may
                      also escalate your complaint to the FCA (
                      <a href="www.fca.org.uk" target="_blank">
                        www.fca.org.uk
                      </a>
                      ), which is the competent authority to receive
                      out-of-court complaints by customers of payment service
                      providers authorized in the UK. For further information
                      please refer to our{" "}
                      <a
                        href="https://www.ebay.co.uk/help/policies/member-behavior-policies/impressum?id=4714&amp;st=2&amp;pos=1&amp;query=Impressum&amp;intent=Impress#section4"
                        target="_blank"
                      >
                        Complaints Procedure
                      </a>
                      .
                    </p>
                    <p>
                      If you reside in the United Kingdom, you may escalate your
                      complaint to the Financial Ombudsman Services. For further
                      information, please refer to the{" "}
                      <a
                        href="https://www.financial-ombudsman.org.uk/"
                        target="_blank"
                      >
                        Financial Ombudsman website
                      </a>{" "}
                      and the
                      <a
                        href="https://www.financial-ombudsman.org.uk/businesses/resolving-complaint/ordering-leaflet/leaflet"
                        target="_blank"
                      >
                        Financial Ombudsman Services Standard Explanatory
                        Leaflet
                      </a>
                      .
                    </p>
                  </article>
                  <article>
                    <h3>Communication</h3>
                    <p>
                      We will communicate with you in the language(s) in which
                      we provided these Payments Terms of Use to you. You agree
                      that we may give you notice or other information by
                      posting it in your eBay Account, emailing it to your
                      registered email address, mailing it to your registered
                      physical address, calling your phone number, or sending
                      you mobile messages.
                    </p>
                    <p>
                      Legal notices to ECUK (with the exception of a termination
                      notice pursuant to Section 9) shall be served by mail to
                      the following address: eBay Commerce UK Ltd, Hotham House,
                      1 Heron Square, Richmond upon Thames, Surrey TW9 1EJ,
                      United Kingdom.
                    </p>
                    <p>
                      You may request a copy of any legally required disclosures
                      (including these Payments Terms of Use) from us; we will
                      then provide it to you in a format which allows you to
                      store and reproduce the information (for example, by
                      email) or, upon your request, on paper.
                    </p>
                  </article>
                  <article>
                    <h3>Governing Law and Jurisdiction</h3>
                    <p>
                      These Payments Terms of Use shall be governed by and
                      construed in accordance with the laws of England and
                      Wales. If you are acting as a consumer (rather than as a
                      business) and if mandatory statutory consumer protection
                      regulations in your country of residence contain
                      provisions that are more beneficial for you, such
                      provisions shall apply irrespective of the choice of
                      English law.
                    </p>
                    <p>
                      As a consumer, you may bring any judicial proceedings
                      relating to the General Payments Terms and these
                      Additional Payments Terms for Payment Services provided by
                      ECUK before the competent court of either your place of
                      residence or ECUK's place of business in the United
                      Kingdom. If ECUK wishes to enforce any of its rights
                      against you as a consumer, we may do so only in the courts
                      of the jurisdiction in which you are a resident. If you
                      are acting as a business seller, you agree to submit to
                      the exclusive jurisdiction of the English courts.
                    </p>
                  </article>
                </div>
              </div>
            </section>
            <section id="2021-04-30" className="only-screen">
              <h2>Previous version</h2>

              <div className="learn-more__txt">
                <p>
                  <a href="https://pages.ebay.com/payment/2.0/previous-terms/">
                    Previous Payments Terms of Use
                  </a>
                </p>
                <p>
                  <a href="https://ir.ebaystatic.com/cr/v/c1/us_ptou_update_090821.pdf">
                    Previous Payments Terms of Use - Download PDF
                  </a>
                </p>
              </div>
            </section>
            <footer>
              <p>Posting Date: March 14, 2022</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

PToUPageTemplate.propTypes = {
  title: PropTypes.string,
};

const PToUPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <PToULayout>
      <PToUPageTemplate image={frontmatter.image} title={frontmatter.title} />
    </PToULayout>
  );
};

PToUPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PToUPage;

export const ptouPageQuery = graphql`
  query PtouPage {
    markdownRemark(frontmatter: { templateKey: { eq: "ptou-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
