const nodemailer = require("nodemailer");
const sendEmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: "ha6817331@gmail.com",
      subject: "Reset Password",
      text: "This is the text content.",
      html: `<!doctype html>
      <html xmlns=http://www.w3.org/1999/xhtml xmlns:v=urn:schemas-microsoft-com:vml xmlns:o=urn:schemas-microsoft-com:office:office>
      <head>
      <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
      <meta http-equiv=Content-Type content="text/html; charset=UTF-8">
      <meta name=viewport content="width=device-width,initial-scale=1">
      <meta name=x-apple-disable-message-reformatting>
      <!--[if !mso]><!-->
      <meta http-equiv=X-UA-Compatible content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <style>@media only screen and (min-width:620px){.u-row{width:600px!important}.u-row .u-col{vertical-align:top}.u-row .u-col-50{width:300px!important}.u-row .u-col-100{width:600px!important}}@media (max-width:620px){.u-row-container{max-width:100%!important;padding-left:0!important;padding-right:0!important}.u-row .u-col{min-width:320px!important;max-width:100%!important;display:block!important}.u-row{width:100%!important}.u-col{width:100%!important}.u-col>div{margin:0 auto}}body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}table,td{color:#000}#u_body a{color:#161a39;text-decoration:underline}</style>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel=stylesheet>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel=stylesheet>
      <!--<![endif]-->
      </head>
      <body class="clean-body u_body" style=margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#f9f9f9;color:#000>
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id=u_body style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;min-width:320px;margin:0 auto;background-color:#f9f9f9;width:100%" cellpadding=0 cellspacing=0>
      <tbody>
      <tr style=vertical-align:top>
      <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
      <div class=u-row-container style=padding:0;background-color:#f9f9f9>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#f9f9f9">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style=overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:Lato,sans-serif align=left>
      <table height=0px align=center border=0 cellpadding=0 cellspacing=0 width=100% style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;border-top:1px solid #f9f9f9;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <tbody>
      <tr style=vertical-align:top>
      <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top;font-size:0px;line-height:0;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%>
      <span>&#160;</span>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:transparent>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#fff">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px;font-family:Lato,sans-serif" align=left>
      <table width=100% cellpadding=0 cellspacing=0 border=0>
      <tr>
      <td style=padding-right:0;padding-left:0 align=center>
      <a href=""><img align=center border=0 src=https://res.cloudinary.com/diml3oeaw/image/upload/f_auto,q_auto/v1/Ecommerce/Assets/w6pvrm8inpqllfzylqsf alt=Image title=Image style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:29%;max-width:168.2px width=168.2></a>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:transparent>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#161a39">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 10px;font-family:Lato,sans-serif" align=left>
      <table width=100% cellpadding=0 cellspacing=0 border=0>
      <tr>
      <td style=padding-right:0;padding-left:0 align=center>
      <img align=center border=0 src="https://res.cloudinary.com/diml3oeaw/image/upload/v1695473070/Ecommerce/Assets/image-1_chrze7.png" alt=Image title=Image style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:10%;max-width:58px width=58>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0 10px 30px;font-family:Lato,sans-serif" align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word>
      <p style=font-size:14px;line-height:140%;text-align:center>
      <span style=font-size:28px;line-height:39.2px;color:#fff;font-family:Lato,sans-serif>Please reset your password
      </span>
      </p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:transparent>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#fff">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:Lato,sans-serif" align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:18px;line-height:25.2px;color:#666>Hello,</span>
      </p>
      <p style=font-size:14px;line-height:140%>
       
      </p>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:18px;line-height:25.2px;color:#666>We have sent you this email in response to your request to reset your password on Our Website.</span>
      </p>
      <p style=font-size:14px;line-height:140%>
       
      </p>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:18px;line-height:25.2px;color:#666>To reset your password, please follow the link below:
      </span>
      </p>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:18px;line-height:25.2px;color:#666><span style=font-weight:bolder>Note:</span>To Prevent Spam on our Website Password Cannot be change again before 10 days.</span>
      </p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0 40px;font-family:Lato,sans-serif" align=left>
      <!--[if mso
                                        ]><style>
                                          .v-button {
                                            background: transparent !important;
                                          }
                                        </style><!
                                      [endif]-->
      <div align=left>
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:205px;" arcsize="2%"  stroke="f" fillcolor="#18163a"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
      <a href="" target=_blank class=v-button style=box-sizing:border-box;display:inline-block;text-decoration:none;-webkit-text-size-adjust:none;text-align:center;color:#fff;background-color:#18163a;border-radius:1px;-webkit-border-radius:1px;-moz-border-radius:1px;width:auto;max-width:100%;overflow-wrap:break-word;word-break:break-word;word-wrap:break-word;mso-border-alt:none;font-size:14px>
      <span style="display:block;padding:15px 40px;line-height:120%"><span style=font-size:18px;line-height:21.6px>Reset Password</span></span>
      </a>
      <p>Or, Copy And Paste Link Manually</p>
      <a href=https://res.cloudinary.com/diml3oeaw/image/upload/f_auto,q_auto/v1/Ecommerce/Assets/w6pvrm8inpqllfzylqsf target=__blank>https://res.cloudinary.com/diml3oeaw/image/upload/f_auto,q_auto/v1/Ecommerce/Assets/w6pvrm8inpqllfzylqsf</a>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:Lato,sans-serif" align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word>
      <p style=font-size:14px;line-height:140%>
      <span style=color:#888;font-size:14px;line-height:19.6px><em><span style=font-size:16px;line-height:22.4px>Please ignore this email if you did not request a password change.</span></em></span><br><span style=color:#888;font-size:14px;line-height:19.6px><em><span style=font-size:16px;line-height:22.4px>&nbsp;</span></em></span>
      </p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:transparent>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#18163a">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #18163a;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-50" style=max-width:320px;min-width:300px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:20px 20px 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Lato,sans-serif align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:16px;line-height:22.4px;color:#ecf0f1>Contact</span>
      </p>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:14px;line-height:19.6px;color:#ecf0f1>69 &nbsp;A ficional Palace</span>
      </p>
      <p style=font-size:14px;line-height:140%>
      <span style=font-size:14px;line-height:19.6px;color:#ecf0f1>+92 408 666 7812| Info@DESIGN.com</span>
      </p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-50" style=max-width:320px;min-width:300px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0 0 0 20px;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 10px;font-family:Lato,sans-serif" align=left>
      <div align=left>
      <div style=display:table;max-width:187px>
      <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
      <table align=left border=0 cellspacing=0 cellpadding=0 width=32 height=32 style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;margin-right:15px>
      <tbody>
      <tr style=vertical-align:top>
      <td align=left valign=middle style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
      <a href="" title=Facebook target=_blank>
      <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1695473326/Ecommerce/Assets/image-4_bsrocf.png" alt=Facebook title=Facebook width=32 style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important>
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
      <table align=left border=0 cellspacing=0 cellpadding=0 width=32 height=32 style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;margin-right:15px>
      <tbody>
      <tr style=vertical-align:top>
      <td align=left valign=middle style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
      <a href="" title=Twitter target=_blank>
      <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1695473083/Ecommerce/Assets/image-2_qaeyui.png" alt=Twitter title=Twitter width=32 style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important>
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
      <table align=left border=0 cellspacing=0 cellpadding=0 width=32 height=32 style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;margin-right:15px>
      <tbody>
      <tr style=vertical-align:top>
      <td align=left valign=middle style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
      <a href="" title=Instagram target=_blank>
      <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1695473325/Ecommerce/Assets/image-3_oa1ro5.png" alt=Instagram title=Instagram width=32 style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important>
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
      <table align=left border=0 cellspacing=0 cellpadding=0 width=32 height=32 style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;margin-right:0>
      <tbody>
      <tr style=vertical-align:top>
      <td align=left valign=middle style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
      <a href="" title=LinkedIn target=_blank>
      <img src="https://res.cloudinary.com/diml3oeaw/image/upload/v1695473326/Ecommerce/Assets/image-5_jzdnpo.png" alt=LinkedIn title=LinkedIn width=32 style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important>
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:Lato,sans-serif" align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word>
      <p style=line-height:140%;font-size:14px>
      <span style=font-size:14px;line-height:19.6px><span style=color:#ecf0f1;font-size:14px;line-height:19.6px><span style=line-height:19.6px;font-size:14px>DESIGN.CO &copy;&nbsp; All Rights Reserved</span></span></span>
      </p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:#f9f9f9>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#1c103b">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #1c103b;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style=overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:Lato,sans-serif align=left>
      <table height=0px align=center border=0 cellpadding=0 cellspacing=0 width=100% style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;vertical-align:top;border-top:1px solid #1c103b;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
      <tbody>
      <tr style=vertical-align:top>
      <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top;font-size:0px;line-height:0;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%>
      <span>&#160;</span>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div class=u-row-container style=padding:0;background-color:transparent>
      <div class=u-row style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:#f9f9f9">
      <div style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top>
      <div style=height:100%;width:100%!important>
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0px solid transparent;border-bottom:0 solid transparent"><!--<![endif]-->
      <table style=font-family:Lato,sans-serif role=presentation cellpadding=0 cellspacing=0 width=100% border=0>
      <tbody>
      <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0 40px 30px 20px;font-family:Lato,sans-serif" align=left>
      <div style=font-size:14px;line-height:140%;text-align:left;word-wrap:break-word></div>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
      </body>
      </html>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { sendEmail };
