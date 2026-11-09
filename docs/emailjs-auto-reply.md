# EmailJS Contact Replies and Visitor Auto-Reply

The contact form sends the visitor's message to your inbox. Configure the main template so you can reply directly to the visitor, and enable an auto-reply so they know their message arrived. This provides email-based conversation; it is not a live-chat service.

The app sends these EmailJS parameters from `src/App.jsx`:

- `user_name` — visitor's name
- `user_email` — visitor's email address
- `reply_to` — visitor's email address, for replies from your inbox
- `message` — visitor's message
- `from_name` — visitor's name (also available for the main template)

## 1. Configure the main contact template

In the EmailJS template used by `VITE_EMAILJS_TEMPLATE_ID`, set:

- **To Email:** your monitored inbox
- **From Name:** `{{user_name}}` (or `{{from_name}}`)
- **Reply-To:** `{{reply_to}}`
- **Subject:** `Portfolio contact from {{user_name}}`
- **Content type:** HTML or plain text

Use the following content in the main template so the message details are included:

```html
<h2>New portfolio message</h2>
<p><strong>Name:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

When you receive a contact email, use **Reply** in your email client. With `Reply-To` set to `{{reply_to}}`, your response will go to the visitor rather than your own inbox.

## 2. Create the visitor confirmation template

Create a separate template in EmailJS for the visitor confirmation:

- **To Email:** `{{user_email}}`
- **To Name:** `{{user_name}}`
- **Subject:** `Thank you for reaching out, {{user_name}}`
- **Reply-To:** your own monitored email address
- **Content type:** HTML

Paste this into the confirmation template's content editor:

```html
<div style="margin:0;padding:32px 16px;background:#f3f6f7;font-family:Arial,Helvetica,sans-serif;color:#1d2933;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #dce4e8;border-radius:8px;overflow:hidden;">
    <div style="padding:28px 32px;background:#12343b;color:#ffffff;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#b9d8d6;">Derrick Dickens Omoding</p>
      <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:600;">Thanks for reaching out</h1>
    </div>
    <div style="padding:28px 32px;font-size:16px;line-height:1.7;">
      <p style="margin:0 0 16px;">Hello {{user_name}},</p>
      <p style="margin:0 0 16px;">Thank you for getting in touch. I have received your message and appreciate you taking the time to connect.</p>
      <p style="margin:0 0 16px;">Whether you are reaching out about a project collaboration, a technical question, or professional networking, I look forward to learning more. I am reviewing my inbox and will get back to you as soon as I can.</p>
      <p style="margin:0 0 24px;">In the meantime, you are welcome to explore my portfolio or connect with me on <a href="https://www.linkedin.com/in/derrick-dickens-omoding-19278840b/" style="color:#087e83;text-decoration:underline;">LinkedIn</a>.</p>
      <p style="margin:0;">Best regards,<br><strong>Derrick Dickens Omoding</strong><br><span style="color:#52636b;">Full-Stack Developer | ICT Student Exploring Modern Technology</span></p>
    </div>
    <div style="padding:16px 32px;border-top:1px solid #e6ecef;font-size:13px;color:#667780;">
      This is an automatic confirmation that your message was received.
    </div>
  </div>
</div>
```

## 3. Link the auto-reply

Open the **main contact template** in EmailJS, go to its **Auto-Reply** tab, and select/link the confirmation template you just created. The app sends one message using the main template; EmailJS sends the linked confirmation using the same `user_name` and `user_email` parameters.

## 4. Set the app's EmailJS environment variables

Add these values to your local `.env` file and to your hosting provider's environment settings:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_main_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not put a private key or email account password in the frontend. After configuring the templates, submit a test message with an email address you can access. Confirm that the visitor receives the automatic confirmation and that replying to the message in your inbox addresses the response to the visitor.
