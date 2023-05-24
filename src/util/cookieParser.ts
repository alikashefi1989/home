const cookieParser = (cookie?: string): Record<string, string> => {
    const parsedCookie: Record<string, string> = {};
    if (typeof cookie !== "string" || cookie === "") return parsedCookie;
    const sepratedBySemiColon: Array<string> = cookie.split("; ");
    for (let i = 0; i < sepratedBySemiColon.length; i++) {
        const keyValue: Array<string> = sepratedBySemiColon[i].split("=");
        parsedCookie[keyValue[0]] = keyValue[1];
    }
    return parsedCookie;
}

export default cookieParser;
