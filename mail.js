const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    // Create a transporter with the desired email service configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'samplea8246@gmail.com',
        pass: 'fxsrviqjvzazumyh',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'samplea8246@gmail.com',
      to: 'sharuqsharuq786@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email.',
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// Example usage
sendEmail()
  .then((success) => {
    if (success) {
      console.log('Email sent successfully.');
    } else {
      console.log('Failed to send email.');
    }
  })
  .catch((error) => {
    console.log('An error occurred while sending the email:', error);
  });