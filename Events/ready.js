module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "Division => [...]"
        }
    });
};