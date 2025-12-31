export default function CleanYourRoomPrivacy() {
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy for Clean Your Room</h1>
          <p className="text-muted-foreground mt-2">Last Updated: December 2025</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Clean Your Room ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Photos and Images</h3>
            <p className="text-foreground leading-relaxed mb-4">
              When you use Clean Your Room to analyze a room photo:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>Photos are sent to Google Gemini AI</strong> for analysis to generate cleaning task lists</li>
              <li><strong>We do not save, store, or retain your photos</strong> on our servers or systems</li>
              <li>Photos are processed by Google Gemini AI service and are subject to <strong>Google's Gemini Terms of Service</strong> and <strong>Google's Privacy Policy</strong></li>
              <li>Photos are transmitted securely to Google's servers for processing and are not stored by us</li>
              <li>Any photos saved locally on your device (such as before/after comparisons) are stored only on your device and can be deleted at any time through the app settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Data Storage</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The following data is stored locally on your device only:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>User profile information (user type, preferences)</li>
              <li>App settings and preferences</li>
              <li>Progress data (cleaning streaks, completed tasks, statistics)</li>
              <li>Cleaning session history</li>
              <li>Before/after photos (if you choose to save them) - stored only on your device</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">No Account Required</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Clean Your Room does not require you to create an account or provide personal information such as your name, email address, or phone number.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Photo Analysis</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Photos you take or select are sent to Google Gemini AI for the sole purpose of analyzing your room and generating personalized cleaning task lists</li>
              <li>Photos are processed in real-time and are not stored by us</li>
              <li>The analysis results (task lists) are stored locally on your device</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Data Usage</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>User preferences and settings are used to customize your app experience</li>
              <li>Progress data is used to track your cleaning achievements and streaks</li>
              <li>All data remains on your device and is never transmitted to our servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Google Gemini AI</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Clean Your Room uses Google Gemini AI to analyze room photos. When you use this feature:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Your photos are sent to Google's Gemini API for processing</li>
              <li>Photos are subject to <strong>Google's Gemini Terms of Service</strong>: <a href="https://ai.google.dev/terms" className="text-[#E79600] hover:underline" target="_blank" rel="noopener noreferrer">https://ai.google.dev/terms</a></li>
              <li>Photos are subject to <strong>Google's Privacy Policy</strong>: <a href="https://policies.google.com/privacy" className="text-[#E79600] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              <li>We do not control how Google processes or stores your photos - please review Google's policies for details</li>
              <li>We do not receive or store copies of your photos after they are sent to Gemini</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>All data is stored locally on your device using iOS's secure storage mechanisms</li>
              <li>Photos sent to Google Gemini are transmitted over encrypted HTTPS connections</li>
              <li>We do not maintain any servers or databases that store your personal information</li>
              <li>You can delete all app data at any time through the app's settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Delete Your Data</h3>
            <p className="text-foreground leading-relaxed mb-4">You can delete all app data at any time by:</p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Using the "Clear All Data" option in the app's Settings</li>
              <li>Deleting the app from your device (which removes all locally stored data)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Photo Control</h3>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>You choose which photos to analyze</li>
              <li>You can choose whether to save before/after photos locally on your device</li>
              <li>Photos sent to Gemini cannot be retrieved or deleted by us, as they are processed by Google's service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Clean Your Room is designed to be safe for users of all ages, including children. We do not knowingly collect personal information from children. All data is stored locally on the device, and no personal information is transmitted to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Data stored locally on your device remains until you delete it or uninstall the app</li>
              <li>We do not retain any data after you delete it or uninstall the app</li>
              <li>Photos sent to Google Gemini are subject to Google's data retention policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us through the app's support channels or via the App Store.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li><strong>We do not save your photos</strong> - Photos are only sent to Google Gemini for analysis and are not stored by us</li>
              <li><strong>Photos are subject to Google's Terms of Service</strong> - When you use the photo analysis feature, your photos are processed by Google Gemini and are subject to Google's Terms of Service and Privacy Policy</li>
              <li><strong>All other data is stored locally</strong> - Your progress, settings, and preferences are stored only on your device</li>
              <li><strong>No account required</strong> - We do not collect email addresses, names, or other personal identifiers</li>
            </ul>
          </section>

          <footer className="border-t border-border/50 pt-8 mt-12">
            <p className="text-muted-foreground italic text-center">
              By using Clean Your Room, you acknowledge that you have read and understood this Privacy Policy, including the fact that photos sent to Google Gemini are subject to Google's Terms of Service and Privacy Policy.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

