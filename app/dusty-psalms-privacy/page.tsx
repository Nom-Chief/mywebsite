export default function DustyPsalmsPrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <a 
              href="/" 
              className="text-[#E79600] hover:underline transition-colors duration-200"
            >
              ← Back to Portfolio
            </a>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy for Dusty Psalms</h1>
          <p className="text-muted-foreground mt-2">Last Updated: January 2025</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dusty Psalms ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="text-foreground leading-relaxed mb-4">
              We collect minimal personal information to provide you with the best possible experience:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>App Settings</strong>: Your preferred language (English, Hebrew, or Latin), dark/light mode preference, and notification preferences</li>
              <li><strong>Reading Progress</strong>: Your daily reading streaks, completed psalms, and reading statistics</li>
              <li><strong>Subscription Information</strong>: If you choose to subscribe, we collect subscription status and expiration dates through RevenueCat</li>
              <li><strong>Notification Preferences</strong>: Your daily reminder time and notification permission status</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Usage Data</strong>: Reading patterns, app interactions, and feature usage to improve the app experience</li>
              <li><strong>Device Information</strong>: Basic device information necessary for app functionality</li>
              <li><strong>Local Storage</strong>: All your data is stored locally on your device using SwiftData</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Personal Identifiers</strong>: We do not collect your name, email address, phone number, or other personal identifiers</li>
              <li><strong>Location Data</strong>: We do not collect or track your location</li>
              <li><strong>Contact Information</strong>: We do not access your contacts or address book</li>
              <li><strong>Photos or Media</strong>: We do not access your photos, camera, or media files</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Provide Core Functionality</strong>: Deliver daily psalms, track reading progress, and maintain your reading streaks</li>
              <li><strong>Personalize Experience</strong>: Remember your language preferences and app settings</li>
              <li><strong>Send Notifications</strong>: Provide daily reminders and milestone celebrations (only with your permission)</li>
              <li><strong>Improve the App</strong>: Analyze usage patterns to enhance features and user experience</li>
              <li><strong>Process Subscriptions</strong>: Handle premium subscription purchases and renewals through RevenueCat</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Local Storage</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>All data is stored locally</strong> on your device using Apple's SwiftData framework</li>
              <li><strong>No cloud storage</strong>: Your reading progress, preferences, and psalms are never uploaded to external servers</li>
              <li><strong>Device-specific</strong>: Your data remains on your device and is not synced across devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Security Measures</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Encrypted Storage</strong>: All local data is encrypted using iOS security features</li>
              <li><strong>No Network Transmission</strong>: Personal data is never transmitted over the internet</li>
              <li><strong>Secure Subscriptions</strong>: Subscription data is handled securely through RevenueCat and Apple's App Store</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">RevenueCat</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Purpose</strong>: Handles subscription management and payment processing</li>
              <li><strong>Data Shared</strong>: Only subscription status and purchase information</li>
              <li><strong>Privacy</strong>: RevenueCat's privacy policy applies to subscription data</li>
              <li><strong>No Personal Data</strong>: We do not share personal information with RevenueCat</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Apple App Store</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Purpose</strong>: Processes subscription payments and app distribution</li>
              <li><strong>Data Shared</strong>: Only purchase receipts and subscription status</li>
              <li><strong>Privacy</strong>: Apple's privacy policy applies to App Store transactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Bible API (Initial Setup Only)</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Purpose</strong>: Downloads psalm content during app setup</li>
              <li><strong>Data Shared</strong>: Only requests for psalm text in your selected languages</li>
              <li><strong>No Personal Data</strong>: No personal information is shared with the Bible API</li>
              <li><strong>One-time Use</strong>: Only used during initial content download, not for ongoing data collection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Data Control</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Delete Data</strong>: You can delete the app to remove all local data</li>
              <li><strong>Reset Progress</strong>: You can reset your reading progress through app settings</li>
              <li><strong>Change Preferences</strong>: You can modify language, notification, and other preferences at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Notifications</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Opt-out</strong>: You can disable notifications at any time through iOS Settings or app settings</li>
              <li><strong>Customize</strong>: You can change your daily reminder time or disable specific notification types</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Subscriptions</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Cancel</strong>: You can cancel subscriptions through your Apple ID settings</li>
              <li><strong>Restore</strong>: You can restore previous purchases through the app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dusty Psalms is suitable for all ages and does not collect personal information from children under 13. The app is designed to be family-friendly and safe for users of all ages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Local Data</strong>: Your data remains on your device until you delete the app</li>
              <li><strong>No Remote Storage</strong>: We do not retain copies of your data on external servers</li>
              <li><strong>Subscription Data</strong>: RevenueCat and Apple retain subscription data according to their respective policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">International Users</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dusty Psalms is designed to work globally. All data processing occurs locally on your device, ensuring compliance with international privacy laws including GDPR, CCPA, and other regional privacy regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground leading-relaxed mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Posting the new Privacy Policy in the app</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Providing notice through the app if significant changes are made</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-foreground leading-relaxed mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Email</strong>: [Your contact email]</li>
              <li><strong>App Support</strong>: Through the app's settings menu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance</h2>
            <p className="text-foreground leading-relaxed mb-4">This Privacy Policy complies with:</p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Apple App Store Guidelines</strong></li>
              <li><strong>General Data Protection Regulation (GDPR)</strong></li>
              <li><strong>California Consumer Privacy Act (CCPA)</strong></li>
              <li><strong>Children's Online Privacy Protection Act (COPPA)</strong></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Summary</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Dusty Psalms is designed with privacy in mind. We collect minimal information necessary to provide you with a personalized spiritual reading experience. All your data remains on your device, and we never share personal information with third parties except as necessary for subscription processing. Your spiritual journey is private and secure.
            </p>
          </section>

          <footer className="border-t border-border/50 pt-8 mt-12">
            <p className="text-muted-foreground italic text-center">
              "Your word is a lamp for my feet, a light on my path." - Psalm 119:105
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
