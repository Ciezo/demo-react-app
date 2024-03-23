import React, { useState } from "react";
import { extract_auth_state } from "../utils/ExtractAuthState";
import getUserIdPrimaryKey from "../utils/GetUserIdPrimaryKey";

function TestExtractUserIdPrimaryKey() {
    const username = extract_auth_state("_auth_state");
    const [userId, setUserId] = useState("");
    
    const getUserId = async () => {
        const user_user_id = await getUserIdPrimaryKey(username.user);
        setUserId(user_user_id);
    }; getUserId();
    
    return (
        <>
            <div className="lead">Check browser console...</div>
            <div className="lead">Check browser network tab... then response..</div>
            <div className="lead"> UserId Primary key: {userId} </div>
        </>
    );

}

export default TestExtractUserIdPrimaryKey;