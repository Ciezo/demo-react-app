import React from "react";
import TermsCard from "../components/TermsCard";
import PrivacyCard from "../components/PrivacyCard";

function TermsAndPrivacy() {
    return(
        <>
            <div className="container-sm mx-auto pt-5">
                <TermsCard />
                <div className="mb-3"></div>
                <PrivacyCard />
            </div>
        </>
    );
}

export default TermsAndPrivacy;