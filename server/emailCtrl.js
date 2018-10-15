const { SENDGRID_API_KEY } = process.env;
const sg = require("@sendgrid/mail");
sg.setApiKey(SENDGRID_API_KEY);

module.exports = {
  sendEmail: ({ body: { contentBody, contactName, contactEmail } }, res) => {
    const msg = {
      to: "sniper66band@gmail.com",
      from: contactEmail,
      subject: `New message from Sniper66.com`,
      text: `From: ${contactName}.
  ${contentBody}`
    };
    sg.send(msg);
    res.status(200).json("Success");
  }
};
