# EmailJS Auto-Reply Template

Create a separate template in EmailJS for the visitor confirmation, then link it from the main contact template's **Auto-Reply** tab.

## Template Settings

- **To Email:** `{{user_email}}`
- **To Name:** `{{user_name}}`
- **Subject:** `Thank you for reaching out, {{user_name}}`
- **Reply-To:** your own monitored email address
- **Content type:** HTML

## HTML Content

Paste this into the auto-reply template's content editor:

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
      <p style="margin:0 0 16px;">Whether you are reaching out about a project collaboration, a technical question, or professional networking, I look forward to learning more. I am reviewing my inbox and will reply as soon as I can.</p>
      <p style="margin:0 0 24px;">In the meantime, you are welcome to explore my portfolio or <a href="https://www.linkedin.com/in/derrick-dickens-omoding-19278840b/" style="color:#087e83;text-decoration:underline;">connect with me on LinkedIn</a>.</p>
      <p style="margin:0;">Best regards,<br><strong>Derrick Dickens Omoding</strong><br><span style="color:#52636b;">Full-Stack Developer | ICT Student Exploring Modern Technology</span></p>
    </div>
    <div style="padding:16px 32px;border-top:1px solid #e6ecef;font-size:13px;color:#667780;">
      This is an automatic confirmation that your message was received.
    </div>
  </div>
</div>
```

Add your live portfolio URL as a link when it is available. The linked auto-reply receives the same `user_name` and `user_email` parameters as the main contact template.