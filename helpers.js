function successfullMessage(msg) {
    return "✅ *SANUWABOT*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *SANUWABOT*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *SANUWABOT*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
