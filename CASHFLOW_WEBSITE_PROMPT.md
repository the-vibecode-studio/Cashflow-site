# CashFlow Website Prompt

Use this prompt to generate a complete marketing website for **CashFlow** using only **HTML, CSS, and JavaScript**.

## Prompt

```md
Create a complete, production-style marketing website for a mobile personal finance app called **CashFlow**.

Important constraints:
- Use only plain HTML, CSS, and JavaScript.
- Do not use React, Vue, Tailwind, Bootstrap, jQuery, or any framework.
- Output a complete project with:
  - `index.html`
  - `privacy.html`
  - `terms.html`
  - `styles.css`
  - `script.js`
- The result must feel polished, modern, premium, and launch-ready.
- The design must be visually stunning but still clean, structured, and highly usable.
- The site must be fully responsive for mobile, tablet, laptop, and large desktop.
- The code must be semantic, accessible, and easy to maintain.

Product context:
- CashFlow is a personal finance mobile app.
- It helps users manage wallets/accounts, transactions, category budgets, liabilities/bills, analytics, and records.
- Core app sections include:
  - Home dashboard with total balance, bill reminders, recent transactions, and overspending reminders
  - Wallets for account balances and transfers
  - Records/transactions with filters and activity history
  - Analytics with spending insights and category breakdowns
  - Finances for budgets and liabilities
  - Settings for categories, backups, and app preferences
- The app is practical, organized, and designed for people who want full control over their money.

Design direction:
- Make it feel like a premium fintech landing page.
- Visual style: modern, clean, refined, high-contrast, confident.
- Avoid generic AI-looking layouts.
- Avoid purple-heavy gradients.
- Avoid dark mode by default.
- Use a light theme with a strong navy foundation and premium gold accents.
- Use a clear spacing system and intentional visual hierarchy.
- Use subtle shapes, layered surfaces, clean cards, and elegant section transitions.
- Use minimal but meaningful animations.

Color system:
- Primary: `#0F172A`
- Secondary: `#1E3A8A`
- Accent / CTA: `#CA8A04`
- Background: `#F8FAFC`
- Text: `#020617`
- Supporting neutrals should feel soft and premium.

Typography direction:
- Headings should feel bold, premium, and modern.
- Body text should be clean and highly readable.
- Use a refined font pairing similar in mood to Satoshi / General Sans or DM Sans.
- Strong typography hierarchy is required.

Website goal:
- Present CashFlow as a premium mobile finance app.
- Build trust.
- Show the product clearly.
- Convince visitors to download or try the app.

The site should include these sections:

1. Sticky header
- Brand name/logo: CashFlow
- Navigation links
- Primary CTA button

2. Hero section
- Strong headline
- Clear supporting text
- Primary CTA and secondary CTA
- A premium mockup-style app preview area
- Show the product as organized, elegant, and useful

3. Social proof / trust strip
- Ratings, user count, finance-focused trust statements, or featured-style credibility items

4. Features section
- Highlight major product capabilities:
  - total balance dashboard
  - wallet/account management
  - budget tracking
  - bill and liability reminders
  - transaction records
  - analytics and spending insights
  - category management
  - backup/sync support
- Use premium icon cards or split layouts

5. App showcase section
- Show multiple app screen previews/cards
- Include dashboard, wallets, analytics, finances, and records
- Make this section visually rich and modern

6. Overspending / budget intelligence section
- Emphasize that users can quickly spot where they are overspending
- Position this as a standout feature

7. Why CashFlow section
- Explain why the product is better for staying organized and financially aware
- Use concise points with strong visual layout

8. Testimonials / reviews section
- Use realistic placeholder reviews
- Make the layout premium, not generic

9. Final CTA section
- Strong call to action
- Encourage downloading, trying, or exploring the app

10. Footer
- Clean multi-column footer
- Brand summary
- Navigation
- Legal/support links including Privacy and Terms

11. Separate Privacy page
- Create `privacy.html`
- Keep the same visual identity as the main site
- Include:
  - what data the app stores
  - how local data, export/import, and cloud sync work
  - user control over data
  - simple contact/support placeholder
- Make it trustworthy, readable, and clean

12. Separate Terms / Agreement page
- Create `terms.html`
- Keep the same visual identity as the main site
- Include:
  - acceptable use
  - user responsibility
  - backup and sync limitations
  - service disclaimer / no financial advice note
  - contact/support placeholder
- Keep it concise, readable, and visually polished

Interaction and motion requirements:
- Add subtle reveal-on-scroll animations
- Add hover states for buttons, cards, and nav items
- Add smooth anchor scrolling
- Add a mobile navigation menu in JavaScript
- Add a lightweight active nav behavior while scrolling
- Respect `prefers-reduced-motion`

Technical requirements:
- Use semantic HTML5 structure
- Use CSS custom properties for colors, spacing, radii, and shadows
- Organize CSS clearly by section
- Use modern layout techniques: grid and flexbox
- Keep JavaScript minimal, clean, and focused on interaction
- No inline CSS except when absolutely necessary
- No placeholder lorem ipsum
- Use realistic finance-app copy

Content tone:
- Clear
- Trustworthy
- Premium
- Practical
- Human

Accessibility requirements:
- Good contrast
- Visible focus states
- Proper heading hierarchy
- Buttons and links with clear states
- Mobile tap targets should be comfortable

Output requirements:
- Return the full contents of `index.html`, `privacy.html`, `terms.html`, `styles.css`, and `script.js`
- Ensure all files work together immediately
- Make the final design feel like a premium fintech product, not a template
```

## Notes

- This prompt is optimized for a **single-page product/marketing site**.
- If you want, I can also create:
  - a second prompt for a **multi-page website**
  - a version tailored for **landing page only**
  - a version tailored for **dark mode premium fintech**

## Real Privacy Content For CashFlow

Use the following content when generating `privacy.html`. Keep the wording clear, trustworthy, and modern. You may improve layout and readability, but keep the meaning accurate to the app.

### Privacy Page Title

`CashFlow Privacy Policy`

### Privacy Intro

CashFlow is designed to help users manage personal finances with strong control over their own data. By default, the app works offline and stores finance records locally on the user’s device. Optional backup and sync features are available for users who choose to use them.

### Section: Information CashFlow Stores

CashFlow may store the following data inside the app:

- wallet or account names
- category names and selected category icons
- transactions, amounts, notes, dates, and account links
- budgets and budget-related settings
- liabilities, bill schedules, due dates, payment records, and reminders
- app preferences such as theme or other supported local settings

### Section: Local-First Storage

CashFlow is an offline-first app.

- The main app data is stored locally on the device using SQLite.
- A backend is not required for the app to function.
- Users can add, edit, review, and manage finance records without being connected to the internet.

### Section: Backups and Export / Import

CashFlow includes backup tools that allow users to control their own data movement.

- Users can export app data to a JSON backup file.
- Users can import a compatible JSON backup file back into the app.
- Importing backup data restores accounts, categories, transactions, and supported app settings.
- Imported data replaces current in-app finance records, so users should review backup files carefully before restoring.

### Section: Optional Cloud Sync

CashFlow includes an optional cloud sync feature for users who choose to enable it.

- Cloud sync is not required to use the app.
- If a user signs in or registers for cloud sync, finance backup data may be uploaded to a Supabase-backed cloud storage setup configured by the app owner.
- Cloud sync is designed to upload and download exported finance data so users can keep devices in sync.
- Cloud sync may store account, category, transaction, liability, and supported settings data inside the synced backup payload.
- If cloud sync is not used, data stays local unless the user manually exports it.

### Section: Account Information For Cloud Sync

If cloud sync is enabled, the app may process limited account-related information for authentication and account display, including:

- full name
- username
- authentication credentials used for sign-in

This account information is used to access the optional sync service and identify the signed-in user inside the app.

### Section: Notifications and Reminders

CashFlow may request notification permission in order to send reminders such as:

- daily expense reminders
- liability or bill reminders

These notifications are used to help users stay aware of budgets, liabilities, and pending payments.

### Section: User Control

Users remain in control of their data inside CashFlow.

- Users can edit or delete finance records directly in the app.
- Users can export their data.
- Users can import backups when needed.
- Users can choose whether to use optional cloud sync.
- Users can sign out of cloud sync if they no longer want to use that feature.

### Section: Data Sharing

CashFlow is not designed as an advertising or social-sharing platform.

- The app does not need to publicly share user finance records for core functionality.
- Data is primarily used to power the user’s own finance tracking, backups, reminders, and optional sync experience.

### Section: Security Approach

CashFlow is built to reduce unnecessary exposure of user finance data.

- The app uses local-first storage by default.
- Cloud sync is optional instead of mandatory.
- Backup restore runs through structured import logic rather than uncontrolled free-form merging.
- Notification features are limited to reminder use cases.

Even so, no digital system can promise absolute security. Users should use strong credentials, protect their device, and manage backup files carefully.

### Section: Children’s Privacy

CashFlow is intended as a personal finance tool and is not specifically directed to children.

### Section: Policy Updates

This privacy policy may be updated over time to reflect app changes, new features, or operational updates.

### Section: Contact

For privacy or support questions, users should contact the app owner or support contact listed on the website or product page.

## Real Terms And Agreement Content For CashFlow

Use the following content when generating `terms.html`. Keep it readable and product-friendly, but preserve the actual meaning.

### Terms Page Title

`CashFlow Terms of Use`

### Terms Intro

By using CashFlow, the user agrees to use the app responsibly and understands that the app is a personal finance tool designed to help organize information, not a substitute for professional financial, legal, or tax advice.

### Section: Use of the App

CashFlow may be used to:

- create and manage wallets or accounts
- record income, expenses, transfers, and balance history
- manage budgets and category spending
- track liabilities, due dates, and bill reminders
- export, import, and optionally sync app data

Users agree to use the app only for lawful and legitimate personal or business finance tracking purposes.

### Section: User Responsibility

Users are responsible for:

- reviewing the accuracy of the data they enter
- maintaining the security of their device
- protecting backup files they export
- using strong credentials if they enable cloud sync
- verifying data before importing backups or restoring records

CashFlow depends on user-entered information. Reports, balances, reminders, and analytics are only as accurate as the information provided by the user.

### Section: Offline Data and Backups

CashFlow stores data locally by default. Users understand that:

- deleting the app, clearing device data, or damaging the device may affect local records
- exported backup files should be stored carefully
- importing backup data may overwrite or replace existing in-app data

Users should keep backups if the information is important to them.

### Section: Optional Cloud Sync

If a user chooses to enable cloud sync:

- the user is responsible for maintaining access to their sign-in credentials
- synced data may be uploaded and downloaded through the configured sync provider
- sync behavior may depend on network availability, provider availability, and data timestamps
- the app owner cannot guarantee uninterrupted sync availability at all times

### Section: Notifications and Reminder Limits

CashFlow may provide reminder notifications for expenses, liabilities, or bills. These reminders are helpful tools, but users remain responsible for:

- checking actual due dates
- confirming balances
- making payments on time
- verifying that reminders match their real obligations

### Section: No Financial Advice

CashFlow provides finance tracking tools, summaries, and reminders only.

- CashFlow does not provide financial advice.
- CashFlow does not provide tax advice.
- CashFlow does not provide legal advice.
- Users should consult qualified professionals for decisions involving loans, taxes, investments, legal obligations, or other regulated financial matters.

### Section: Service Availability

The app owner may update, improve, limit, or remove features over time. Some features, especially optional sync-related functionality, may depend on third-party services and may not always be available without interruption.

### Section: Limitation of Liability

To the extent allowed by law, the app owner is not responsible for losses or damages resulting from:

- incorrect user-entered data
- missed reminders
- failed backups not reviewed by the user
- device loss
- third-party service outages
- sync conflicts or unavailable network access
- user failure to keep exported backups or credentials secure

### Section: Termination or Stopping Use

Users may stop using CashFlow at any time. They should export their data first if they want to keep a personal copy before uninstalling the app or leaving the sync service.

### Section: Changes to the Terms

These terms may be updated as CashFlow evolves.

### Section: Contact

For questions about these terms, users should contact the app owner or support contact listed on the website or product page.

## Security Notes To Keep Accurate In The Website

When generating website copy, keep these app-specific security points accurate:

- CashFlow is offline-first by default.
- Local finance data is stored on-device using SQLite.
- Cloud sync is optional, not required.
- JSON export/import is user-initiated.
- Notification permissions are used for reminders.
- The app is a recordkeeping and awareness tool, not a bank and not a financial advisor.

## Legal Caution

- This content is app-specific and based on the current codebase and feature behavior.
- It is useful for product and website copy.
- It is **not a substitute for formal legal review**.
- Before publishing to production, final privacy and terms text should still be reviewed by a qualified legal professional for your jurisdiction and business setup.
