<%

userName=request("userName")
userEmail=request("userEmail")
userPhone=request("userPhone")
comment=request("comment")

Set Mailer = Server.CreateObject("Persits.MailSender")
Mailer.Host = "localhost"
Mailer.From="no-reply@claviscp.com"
Mailer.FromName="Ripple Inquiry"
Mailer.Port = 20035
Mailer.Subject = "New form submission from ripple.claviscp.com"
Mailer.isHTML = true
msg="<p style='margin-bottom: 2em;'>At " & Now() & " a form was submitted on ripple.claviscp.com with the following information:</p>" & vbcrlf & vbcrlf &_
	"<p><strong>Name:</strong> " & userName & "</p>" & vbcrlf &_
	"<p><strong>Email:</strong> " & userEmail & "</p>" & vbcrlf &_
	"<p><strong>Phone:</strong> " & userPhone & "</p>" & vbcrlf &_
	"<p><strong>Comment</strong><br/>" & comment & "</p>"

'Mailer.AddAddress "tdauphinais@claviscp.com"
'Mailer.AddAddress "natalie.ricklefs@dcgone.com"
Mailer.AddAddress "kevin.bolduan@dcgone.com"

Mailer.Body   = msg
Mailer.Send


%>