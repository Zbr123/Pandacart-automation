const axios = require('axios');

const webhook = process.env.SLACK_WEBHOOK;

async function sendSlack(message) {
    try {
        await axios.post(webhook, { text: message });
        console.log("✅ Slack message sent");
    } catch (error) {
        console.log("❌ Slack failed:", error.message);
    }
}

module.exports = { sendSlack };
