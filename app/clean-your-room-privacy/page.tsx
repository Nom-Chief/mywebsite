const linkClass = "text-[#E79600] hover:underline";
const listClass = "list-disc pl-6 text-foreground leading-relaxed mb-4 space-y-2";

export default function CleanYourRoomPrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <a href="/" className={`${linkClass} transition-colors duration-200`}>
              ← Back to Portfolio
            </a>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy for Clean Your Room
          </h1>
          <p className="text-muted-foreground mt-2">Last Updated: August 23, 2026</p>
        </header>

        <main className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed mb-8">
            Clean Your Room (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is a mobile
            application for iOS and Android. This Privacy Policy explains what information is
            processed when you use the app, why it is processed, where it goes, and the choices
            available to you.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Process</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Room Photos and AI Analysis</h3>
            <p className="text-foreground leading-relaxed mb-4">
              When you choose to scan a room, the app prepares a reduced-size copy of the photo and
              sends it, together with your selected scan options, to our analysis service. The service
              forwards the request to the Google Gemini API, which analyzes the image and returns a
              cleaning task list.
            </p>
            <ul className={listClass}>
              <li>You decide which photo to capture or select and when to submit it.</li>
              <li>A photo is transmitted only when you start a scan.</li>
              <li>We do not use room photos for advertising or sell them.</li>
              <li>
                Our analysis service processes the photo to relay the request and does not
                intentionally save the photo, prompt, or Gemini response to a database or object store.
              </li>
              <li>
                The service uses a random, pseudonymous per-install identifier to authenticate
                requests. Its operational logs may contain that identifier, the AI model used,
                request size, response status, and processing time, but not the photo itself.
              </li>
              <li>
                Google processes the submitted photo, prompt, and generated response under the Gemini
                API terms. Google may retain prompts and responses for a limited period for abuse
                monitoring. Whether Google may use submitted content to improve its products depends
                on the Gemini service tier and account settings used for the request. See
                “Third-Party Services” below.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              A room photo can reveal people, belongings, documents, or other sensitive details.
              Avoid including anything you do not want processed for analysis.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Data Stored on Your Device</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The app stores the following in platform-provided app storage on your iPhone, iPad, or
              Android device:
            </p>
            <ul className={listClass}>
              <li>App settings and preferences</li>
              <li>Cleaning tasks, completed sessions, progress, streaks, and statistics</li>
              <li>Before/after photos, only if you enable the option to save them</li>
              <li>A random per-install identifier and authentication token used to access the analysis service</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              Android cloud backup and device-transfer extraction are disabled for the app&apos;s local
              data. On iOS, locally stored app data may be included in device backups according to your
              Apple and device-backup settings. Deleting local app data does not automatically delete
              records held by third-party services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Purchases and Subscriptions</h3>
            <p className="text-foreground leading-relaxed mb-4">
              The app uses RevenueCat to offer, validate, restore, and manage subscriptions purchased
              through Apple&apos;s App Store or Google Play. RevenueCat processes:
            </p>
            <ul className={listClass}>
              <li>
                A randomly generated, pseudonymous App User ID; the app does not provide RevenueCat
                with your name or email address
              </li>
              <li>
                Purchase and subscription history, product identifiers, transaction and receipt or
                purchase-token information, subscription status, and entitlements
              </li>
              <li>App, device, platform, locale, and technical information needed to operate the purchase service</li>
              <li>On iOS, an onboarding-variant attribute used to select and measure paywall experiences</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              We use this information for app functionality, fraud prevention and receipt validation,
              customer support, purchase analytics, and paywall or offering experiments. Apple or
              Google also processes purchase information under the privacy policy for the store you use.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">No App Account Required</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Clean Your Room does not require an app account, and we do not ask you to provide a name,
              email address, or phone number to use the app. The pseudonymous identifiers described
              above are still transmitted to our service providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Information</h2>
            <p className="text-foreground leading-relaxed mb-4">We process information to:</p>
            <ul className={listClass}>
              <li>Analyze a room photo and generate a cleaning task list you requested</li>
              <li>Authenticate and protect the analysis service, enforce limits, and diagnose failures</li>
              <li>Save your settings, sessions, photos, and progress on your device</li>
              <li>Display available subscriptions, process purchases and restores, and unlock premium features</li>
              <li>Understand subscription performance and improve paywall presentation</li>
              <li>Comply with legal obligations and protect the app, our users, and our service providers</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              We do not use third-party advertising SDKs and do not sell your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Google Gemini API</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Google receives the room photo, analysis prompt, selected scan options included in that
              prompt, and generated response. Google&apos;s treatment of this data depends on the service
              tier and settings used by the Gemini project:
            </p>
            <ul className={listClass}>
              <li>
                For Gemini API Paid Services, Google states that it does not use prompts or responses
                to improve its products, but may log them for a limited period for abuse monitoring and
                required legal or regulatory disclosures.
              </li>
              <li>
                Under Gemini API Unpaid Services or if data-sharing features are enabled, Google may use
                submitted content and responses to provide, improve, and develop its products, and human
                reviewers may process that content.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              Learn more in the{" "}
              <a href="https://ai.google.dev/gemini-api/terms" className={linkClass} target="_blank" rel="noopener noreferrer">
                Gemini API Additional Terms
              </a>
              ,{" "}
              <a href="https://ai.google.dev/gemini-api/docs/logs-policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                Gemini API data-use documentation
              </a>
              , and{" "}
              <a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">RevenueCat</h3>
            <p className="text-foreground leading-relaxed mb-6">
              RevenueCat receives and maintains the pseudonymous customer, purchase, and subscription
              information described above. RevenueCat acts as a service provider that helps us validate
              purchases, maintain entitlement status, provide subscription analytics, and operate
              offerings and experiments. RevenueCat may retain this information as needed to provide its
              services and meet legal obligations. See{" "}
              <a href="https://www.revenuecat.com/privacy-policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                RevenueCat&apos;s Privacy Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Cloudflare</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Our analysis relay is hosted using Cloudflare Workers. Cloudflare processes network
              requests and related technical data, such as IP address and request metadata, to transmit
              and secure the service. See{" "}
              <a href="https://www.cloudflare.com/privacypolicy/" className={linkClass} target="_blank" rel="noopener noreferrer">
                Cloudflare&apos;s Privacy Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Apple and Google Play</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Apple processes App Store purchases and Google processes Google Play purchases. Their
              handling of payment and store-account information is governed by the{" "}
              <a href="https://www.apple.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">
                Apple Privacy Policy
              </a>
              {" "}or{" "}
              <a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
              , as applicable. We do not receive your full payment-card details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <ul className={listClass}>
              <li>App data is kept in platform-provided app storage on iOS and Android.</li>
              <li>Analysis and purchase-service traffic is transmitted over encrypted HTTPS connections.</li>
              <li>
                The iOS analysis identifier and token are stored in the Keychain; Android stores them
                in the app&apos;s private storage and disables app-data backup.
              </li>
              <li>No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Deletion</h2>
            <ul className={listClass}>
              <li>
                Local settings, progress, sessions, and saved photos remain on your device until you
                clear them in the app or delete the app, subject to any device backups described above.
              </li>
              <li>
                Our analysis relay does not intentionally retain room photos, prompts, or Gemini
                responses after completing the request. Operational logs may be retained according to
                our hosting configuration and Cloudflare&apos;s policies.
              </li>
              <li>Google retains Gemini API data according to the applicable service tier, account settings, and Google&apos;s policies.</li>
              <li>
                RevenueCat retains purchase, subscription, entitlement, and pseudonymous customer
                records as needed to provide its services and comply with legal obligations.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              You can clear locally stored progress and photos from the app&apos;s Settings or remove local
              app data by deleting the app. To request access to or deletion of data associated with our
              service-provider records, email{" "}
              <a href="mailto:chaim.y.gross@gmail.com" className={linkClass}>chaim.y.gross@gmail.com</a>.
              We may need a pseudonymous app identifier or transaction details to locate the record.
              Some purchase records may need to be retained for fraud prevention, accounting, dispute
              resolution, or other legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children&apos;s Privacy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The app does not require children to create an account or submit contact details. However,
              room photos and the pseudonymous and technical data described in this policy are transmitted
              when the relevant features are used. If you are a parent or guardian and believe a child has
              provided personal information through the app, contact us so we can review and, where
              appropriate, delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Depending on where you live, you may have rights to request access, correction, deletion,
              restriction, portability, or objection regarding personal information we control. You may
              also have the right to complain to your local data-protection authority. To make a request,
              contact us at the address below. We may need information sufficient to verify and locate the
              relevant record.
            </p>
            <p className="text-foreground leading-relaxed mb-4">You may also:</p>
            <ul className={listClass}>
              <li>Choose which photos to analyze and avoid including people or sensitive material</li>
              <li>Turn off saving before/after photos</li>
              <li>Clear local data in Settings or uninstall the app</li>
              <li>Manage or cancel subscriptions through your Apple App Store or Google Play account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">International Processing</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Our service providers may process information in countries other than the country where
              you live, including the United States, subject to their contractual and legal safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will post the revised policy at
              this URL and update the “Last Updated” date above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For privacy questions or requests, email{" "}
              <a href="mailto:chaim.y.gross@gmail.com" className={linkClass}>chaim.y.gross@gmail.com</a>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
