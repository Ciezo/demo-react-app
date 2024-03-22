import React from "react";
import { getUserIdPrimaryKey } from "../utils/GetUserIdPrimaryKey";
import { extract_auth_state } from "../utils/ExtractAuthState";

function TestExtractUserIdPrimaryKey() {
    const username = extract_auth_state("_auth_state");
    let userId = getUserIdPrimaryKey(username.user)
    
    console.log(userId);

    return (
        <>
            <div className="lead">Check browser console...</div>
            <div className="lead">Check browser network tab... then response..</div>
        </>
    );

}

export default TestExtractUserIdPrimaryKey;