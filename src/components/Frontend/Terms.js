// TermsPopup.js
import React from "react";
import Modal from "react-modal";

const TermsPopup = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Terms Popup Modal"
    className="modal-content"
    overlayClassName="modal-overlay"
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-96 overflow-y-auto max-h-screen">
    <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        onClick={closeModal}
      >
        Close
      </button>
      <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
      <p>
        Terms and Conditions Welcome to AI Dekho! These terms and conditions
        outline the rules and regulations for the use of AIdekho's Website,
        located at aidekho.io. By accessing this website we assume you accept
        these terms and conditions. Do not continue to use AI Dekho if you do
        not agree to take all of the terms and conditions stated on this page.
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company's terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client's needs in respect of
        provision of the Company's stated services, in accordance with and
        subject to, prevailing law of in. Any use of the above terminology or
        other words in the singular, plural, capitalization and/or he/she or
        they, are taken as interchangeable and therefore as referring to same.
        Cookies We employ the use of cookies. By accessing AI Dekho, you agreed
        to use cookies in agreement with the AIdekho's Privacy Policy. Most
        interactive websites use cookies to let us retrieve the user's details
        for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies. License Unless otherwise stated, AIdekho and/or its licensors
        own the intellectual property rights for all material on Ai Dekho. All
        intellectual property rights are reserved. You may access this from AI
        Dekho for your own personal use subjected to restrictions set in these
        terms and conditions. You must not: Republish material from AI Dekho
        Sell, rent or sub-license material from AI Dekho Reproduce, duplicate or
        copy material from AI Dekho Redistribute content from AI Dekho This
        Agreement shall begin on the date hereof. Our Terms and Conditions were
        created with the help of the Free Terms and Conditions Generator. Parts
        of this website offer an opportunity for users to post and exchange
        opinions and information in certain areas of the website. AIdekho does
        not filter, edit, publish or review Comments prior to their presence on
        the website. Comments do not reflect the views and opinions of
        AIdekho,its agents and/or affiliates. Comments reflect the views and
        opinions of the person who post their views and opinions. To the extent
        permitted by applicable laws, AIdekho shall not be liable for the
        Comments or for any liability, damages or expenses caused and/or
        suffered as a result of any use of and/or posting of and/or appearance
        of the Comments on this website. AIdekho reserves the right to monitor
        all Comments and to remove any Comments which can be considered
        inappropriate, offensive or causes breach of these Terms and Conditions.
        You warrant and represent that: You are entitled to post the Comments on
        our website and have all necessary licences and consents to do so; The
        Comments do not invade any intellectual property right, including
        without limitation copyright, patent or trademark of any third party;
        The Comments do not contain any defamatory, libellous, offensive,
        indecent or otherwise unlawful material which is an invasion of privacy
        The Comments will not be used to solicit or promote business or custom
        or present commercial activities or unlawful activity. You hereby grant
        AIdekho a non-exclusive licence to use, reproduce, edit and authorise
        others to use, reproduce and edit any of your Comments in any and all
        forms, formats or media. Hyperlinking to our Content The following
        organisations may link to our Website without prior written approval:
        Government agencies; Search engines; News organisations; Online
        directory distributors may link to our Website in the same manner as
        they hyperlink to the Websites of other listed businesses; and System
        wide Accredited Businesses except soliciting non-profit organisations,
        charity shopping malls, and charity fundraising groups which may not
        hyperlink to our Web site. These organisations may link to our home
        page, to publications or to other Website information so long as the
        link: (a) is not in any way deceptive; (b) does not falsely imply
        sponsorship, endorsement or approval of the linking party and its
        products and/or services; and (c) fits within the context of the linking
        party's site. We may consider and approve other link requests from the
        following types of organisations: commonly-known consumer and/or
        business information sources; dot.com community sites; associations or
        other groups representing charities; online directory distributors;
        internet portals; accounting, law and consulting firms; and educational
        institutions and trade associations. We will approve link requests from
        these organisations if we decide that: (a) the link would not make us
        look unfavourably to ourselves or to our accredited businesses; (b) the
        organisation does not have any negative records with us; (c) the benefit
        to us from the visibility of the hyperlink compensates the absence of
        AIdekho; and (d) the link is in the context of general resource
        information. These organisations may link to our home page so long as
        the link: (a) is not in any way deceptive; (b) does not falsely imply
        sponsorship, endorsement or approval of the linking party and its
        products or services; and (c) fits within the context of the linking
        party's site. If you are one of the organisations listed in paragraph 2
        above and are interested in linking to our website, you must inform us
        by sending an email to AIdekho. Please include your name, your
        organisation name, contact information as well as the URL of your site,
        a list of any URLs from which you intend to link to our Website, and a
        list of the URLs on our site to which you would like to link. Wait 2-3
        weeks for a response. Approved organisations may hyperlink to our
        Website as follows: By use of our corporate name; or By use of the
        uniform resource locator being linked to; or By use of any other
        description of our Website being linked to that makes sense within the
        context and format of content on the linking party's site. No use of
        AIdekho's logo or other artwork will be allowed for linking absent a
        trademark licence agreement. iFrames Without prior approval and written
        permission, you may not create frames around our Web Pages that alter in
        any way the visual presentation or appearance of our Website. Content
        Liability We shall not be held responsible for any content that appears
        on your Website. You agree to protect and defend us against all claims
        that are rising on your Website. No link(s) should appear on any Website
        that may be interpreted as libellous, obscene or criminal, or which
        infringes, otherwise violates, or advocates the infringement or other
        violation of, any third party rights. Reservation of Rights We reserve
        the right to request that you remove all links or any particular link to
        our Website. You approve to immediately remove all links to our Website
        upon request. We also reserve the right to amend these terms and
        conditions and its linking policy at any time. By continuously linking
        to our Website, you agree to be bound to and follow these linking terms
        and conditions. Removal of links from our website If you find any link
        on our Website that is offensive for any reason, you are free to contact
        and inform us any moment. We will consider requests to remove links but
        we are not obligated to or so or to respond to you directly. We do not
        ensure that the information on this website is correct, we do not
        warrant its completeness or accuracy; nor do we promise to ensure that
        the website remains available or that the material on the website is
        kept up to date. Disclaimer To the maximum extent permitted by
        applicable law, we exclude all representations, warranties and
        conditions relating to our website and the use of this website. Nothing
        in this disclaimer will: limit or exclude our or your liability for
        death or personal injury; limit or exclude our or your liability for
        fraud or fraudulent misrepresentation; limit any of our or your
        liabilities in any way that is not permitted under applicable law; or
        exclude any of our or your liabilities that may not be excluded under
        applicable law. The limitations and prohibitions of liability set in
        this Section and elsewhere in this disclaimer: (a) are subject to the
        preceding paragraph; and (b) govern all liabilities arising under the
        disclaimer, including liabilities arising in contract, in tort and for
        breach of statutory duty. As long as the website and the information and
        services on the website are provided free of charge, we will not be
        liable for any loss or damage of any nature.
      </p>
      <div className="flex items-center justify-center pt-5 ">
      <button
        className=" bg-[#23CD15] top-2 right-2 text-white p-1 rounded-lg px-5"
        onClick={closeModal}
      >
        Close
      </button>
      </div>
    </div>
    
  </Modal>
);

export default TermsPopup;
