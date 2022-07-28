const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SEND_Key)

export default (req,res) =>{

    const body = JSON.parse(req.body);

    const message =`
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}

    `
    const msg = {
        to: 'aminemino12030@gmail.com', // Change to your recipient
        from: 'aminemino12020@gmail.com', // Change to your verified sender
        subject: 'message mn portfolio amine menhane',
        text: message,
        html: message.replace(/\r\n/g,'<br/>'),
      }

      mail.send(msg).then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

}