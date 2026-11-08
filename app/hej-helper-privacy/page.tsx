const linkClass = "text-[#E79600] hover:underline";
const listClass = "list-disc pl-6 text-foreground leading-relaxed mb-4 space-y-2";
const tableClass = "w-full text-left text-foreground border-collapse mb-6 text-base";
const thClass = "border-b border-gray-300 py-2 pr-4 font-semibold align-top";
const tdClass = "border-b border-gray-200 py-2 pr-4 align-top";

export const metadata = {
  title: "Privacy Policy for Hej Helper",
};

export default function HejHelperPrivacy() {
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
            Privacy Policy for Hej Helper
          </h1>
          <p className="text-muted-foreground mt-2">Last Updated: November 8, 2026</p>
        </header>

        <main className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed mb-4">
            Hej Helper collects as little as possible: there is no account, no ads and no analytics,
            and your builds stay on your device. The only data that leaves your phone is what&apos;s
            needed to process a Pro purchase and to answer a Pro question you choose to send.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            This policy covers the Hej Helper iOS app (&quot;the app,&quot; &quot;we,&quot;
            &quot;us&quot;). Hej Helper is an independent app and is not affiliated with, endorsed by
            or sponsored by IKEA.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We don&apos;t ask for your name, email or any account details, and we don&apos;t track
              you across apps or websites.
            </p>
            <div className="overflow-x-auto">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Data</th>
                    <th className={thClass}>When</th>
                    <th className={thClass}>Where it goes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Build progress, saved builds, free steps used</td>
                    <td className={tdClass}>Always, as you use the app</td>
                    <td className={tdClass}>Stays on your device only</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Voice (&quot;next&quot;, &quot;back&quot;)</td>
                    <td className={tdClass}>Only when you turn on hands-free</td>
                    <td className={tdClass}>
                      Recognized on your device by Apple&apos;s speech framework; never sent to us
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Photos (camera or photo library)</td>
                    <td className={tdClass}>Only when you send one with a Pro feature</td>
                    <td className={tdClass}>Sent to answer that request, then not kept by us</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Questions and product text you type in Pro help</td>
                    <td className={tdClass}>Only when you send them</td>
                    <td className={tdClass}>Sent to answer that request, then not kept by us</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Anonymous purchase ID</td>
                    <td className={tdClass}>When the app starts</td>
                    <td className={tdClass}>RevenueCat, to check your Pro subscription</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Purchase and subscription status</td>
                    <td className={tdClass}>When you buy or restore</td>
                    <td className={tdClass}>Apple and RevenueCat</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Technical request data (IP address, time, error codes)</td>
                    <td className={tdClass}>When a Pro request is sent</td>
                    <td className={tdClass}>Our server host&apos;s logs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Permissions.</strong> The app asks for the camera, photo library, microphone and
              speech recognition. Each is optional and used only for the feature named in its prompt.
              You can turn any of them off in iOS Settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Information</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use the data above only to run the app&apos;s features:
            </p>
            <ul className={listClass}>
              <li>
                Answer your Pro questions, identify a product from a box-label photo, and draft guides
                for products not in the catalog
              </li>
              <li>Check whether you have an active Pro subscription</li>
              <li>Limit Pro requests per user (60 an hour, 400 a day) to prevent abuse</li>
              <li>Find and fix errors in the service</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              We don&apos;t sell your data, share it for advertising, or use it to build a profile of you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Four service providers handle data on our behalf, each only for the purpose listed.
            </p>
            <div className="overflow-x-auto">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Provider</th>
                    <th className={thClass}>What it receives</th>
                    <th className={thClass}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>
                      <a href="https://www.apple.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">Apple</a>
                    </td>
                    <td className={tdClass}>Purchase and subscription details</td>
                    <td className={tdClass}>Processes payments through your Apple ID</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <a href="https://www.revenuecat.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">RevenueCat</a>
                    </td>
                    <td className={tdClass}>Anonymous app user ID, purchase receipts</td>
                    <td className={tdClass}>Manages and verifies subscriptions</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <a href="https://www.cloudflare.com/privacypolicy/" className={linkClass} target="_blank" rel="noopener noreferrer">Cloudflare</a>
                    </td>
                    <td className={tdClass}>Pro requests in transit, anonymous user ID, IP address</td>
                    <td className={tdClass}>
                      Hosts our server; stores short-lived subscription checks and request counters
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <a href="https://openai.com/policies/privacy-policy/" className={linkClass} target="_blank" rel="noopener noreferrer">OpenAI</a>
                    </td>
                    <td className={tdClass}>Your Pro question text and any photo you attach</td>
                    <td className={tdClass}>Generates the answer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Our server tells OpenAI not to store requests for later use. OpenAI may keep API data for
              a limited time for abuse monitoring under its own terms, and doesn&apos;t use it to train
              its models by default. Each provider name above links to its privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Deletion</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We don&apos;t keep your photos or questions after answering them.
            </p>
            <ul className={listClass}>
              <li>
                <strong>On your device:</strong> builds and progress stay until you delete a build or
                delete the app.
              </li>
              <li>
                <strong>Subscription checks:</strong> cached on our server for 1 to 5 minutes.
              </li>
              <li>
                <strong>Request counters:</strong> reset every hour and every day.
              </li>
              <li>
                <strong>Server logs:</strong> technical request data is kept according to our hosting
                configuration and Cloudflare&apos;s policies, then deleted automatically.
              </li>
              <li>
                <strong>Subscriptions:</strong> Apple and RevenueCat keep purchase records under their
                own policies.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              To delete everything on your device, delete the app. To ask us to delete data linked to
              your purchases, email{" "}
              <a href="mailto:chaim.y.gross@gmail.com" className={linkClass}>chaim.y.gross@gmail.com</a>.
              We may need transaction details from your App Store receipt to locate the record.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
            <p className="text-foreground leading-relaxed mb-4">
              You can use the app&apos;s free steps without sending us anything, and every Pro feature
              that sends data runs only when you tap it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Depending on where you live (for example under the GDPR in the EU and UK, or the CCPA in
              California), you may have the right to access, correct, delete or object to the
              processing of your personal data, and to complain to your local data-protection
              authority. Where the GDPR applies, we process Pro requests to provide the service you
              asked for, and keep logs based on our legitimate interest in running a secure service.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We don&apos;t sell or share personal information as defined by the CCPA. You can manage
              or cancel your subscription at any time in your Apple ID settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children&apos;s Privacy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The app isn&apos;t directed at children under 13 (or the minimum age in your country),
              and we don&apos;t knowingly collect their personal data. If you believe a child has sent
              us data, contact us and we&apos;ll delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
            <p className="text-foreground leading-relaxed mb-4">
              All data sent from the app travels over encrypted HTTPS connections. Our AI provider key
              is held only on our server, never in the app, and the server accepts only the request
              fields it needs. No system is perfectly secure, but we limit risk mainly by not
              collecting data in the first place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If we change this policy, we&apos;ll post the revised policy at this URL and update the
              &quot;Last Updated&quot; date above. For significant changes, we&apos;ll also tell you in
              the app before they take effect.
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
