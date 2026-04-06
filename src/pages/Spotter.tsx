import { useEffect, useRef } from 'react';
import { SpotterEmbed } from '@thoughtspot/visual-embed-sdk';
import '../lib/thoughtspot';

export default function Spotter() {
  const embedRef = useRef<HTMLDivElement>(null);
  const embedInstanceRef = useRef<SpotterEmbed | null>(null);

  useEffect(() => {
    if (embedRef.current && !embedInstanceRef.current) {
      const embed = new SpotterEmbed(embedRef.current, {
        frameParams: {
          width: '100%',
          height: '100%',
        },
        worksheetId: '038ee009-a824-427b-807d-a9bbfba70a45',
        updatedSpotterChatPrompt: true,
        customizations: {
          style: {
            customCSS: {
              rules_UNSTABLE: {
                ".footer-module__footerLogo": {
                  display: "none !important"
                },
                ".footer-module__footer": {
                  display: "none !important"
                },
                "[class*='footer-module']": {
                  display: "none !important"
                },
              },
            },
          },
        },
      });

      embedInstanceRef.current = embed;
      embed.render();
    }

    return () => {
      embedInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <main className="main-content">
        <div className="page-container">
          <div className="page-header">
            <h2 className="page-title">AI-Powered Brand Insights</h2>
            <p className="page-subtitle">
              Ask questions in natural language about brands, trends, demographics, and consumer behavior
            </p>
          </div>
          <div className="embed-container" ref={embedRef}>
            <div className="embed-loading">
              <div className="embed-loading-spinner"></div>
              <span>Loading AI Analytics...</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
