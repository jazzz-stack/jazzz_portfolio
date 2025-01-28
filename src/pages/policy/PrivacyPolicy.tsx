import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrivacyPolicy() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to E-Tracker (com.moneytracker). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our mobile application. Please read this
            policy carefully to understand our practices regarding your personal
            data.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            E-Tracker does not collect, store, or share any user data. Our app
            functions entirely offline and does not require any personal
            information to operate.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            Since we do not collect any user data, there is no usage of personal
            information. All your activities within the app remain local to your
            device and are not transmitted or stored on any external server.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Third-Party SDKs</h2>
          <p className="text-gray-600 mb-4">
            E-Tracker does not integrate any third-party SDKs or libraries that
            collect or share user data. The app is free from external tracking
            or analytics tools.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Data Safety</h2>
          <p className="text-gray-600 mb-4">
            Our app does not collect, process, or transmit any data, ensuring
            complete user privacy. Your data stays secure within your device,
            with no risk of unauthorized access from external parties.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Security</h2>
          <p className="text-gray-600 mb-4">
            While we do not collect user data, we prioritize the integrity and
            reliability of the app. Regular updates ensure that the app remains
            free of vulnerabilities and is safe to use.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be reflected here. We recommend reviewing this page periodically to
            stay informed about how we are helping protect your privacy.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. User Rights</h2>
          <p className="text-gray-600 mb-4">
            As a user, you have full control over your data since no information
            is collected or stored by us. If you choose to uninstall the app,
            all data associated with it will be deleted from your device.
          </p>

          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, you can contact
            us at:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Email: support@etrackerapp.com</li>
            <li>Phone: +1 234 567 890</li>
          </ul>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePrint()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Download Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
