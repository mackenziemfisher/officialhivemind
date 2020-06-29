import App from "./App"


<form


  id="contact"
  onsubmit={(e) => {
    e.preventDefault()
    const form = e.currentTarget.id
    return sendMail(form)
  }}
>
  <Input
    type="text"
    name="sender"
    label="Name"
  />
  <Input
    type="email"
    name="email"
    label="Email"
  />
  <Input
    type="text"
    name="subject"
    label="Subject"
  />
  <Textarea 
    label="Message"
    name="message"
  />
  <input 
    type="hidden"
    name="*honeypot"
  />
  <Button label="Submit" />
</form>