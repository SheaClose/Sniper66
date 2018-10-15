const { NODE_ENV, SENDGRID_API_KEY } = process.env;
const sg = require("sendgrid")(SENDGRID_API_KEY);

module.exports = {
  sendEmail: ({ body: { contentBody, contactName, contactEmail } }, res) => {
    const request = sg.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: {
        personalizations: [
          {
            to: [
              {
                email:
                  NODE_ENV !== "production"
                    ? "sheaclose@gmail.com"
                    : "sniper66band@gmail.com"
              }
            ],
            subject: `New Contact message from Sniper66.com`
          }
        ],
        from: {
          email: contactEmail
        },
        content: [
          {
            type: "text/plain",
            value: `From: ${contactName}.
            
            ${contentBody}`
          }
        ]
      }
    });
    sg.API(request, function(error, response) {
      res.status(200).json(response);
    });
  }
};
