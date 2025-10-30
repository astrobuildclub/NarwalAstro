export const cookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },

    analytics: {
      services: {
        youtube: {
          label: 'Youtube Embed',
          onAccept: () => {
            (window as any).iframemanager().acceptService('youtube');
            try { (window as any).iframemanager().scan(); } catch(e) {}
            document.dispatchEvent(new CustomEvent('consent:changed', { detail: { service: 'youtube', accepted: true }}));
          },
          onReject: () => {
            (window as any).iframemanager().rejectService('youtube');
            try { (window as any).iframemanager().scan(); } catch(e) {}
            document.dispatchEvent(new CustomEvent('consent:changed', { detail: { service: 'youtube', accepted: false }}));
          },
        },
        vimeo: {
          label: 'Vimeo Embed',
          onAccept: () => {
            (window as any).iframemanager().acceptService('vimeo');
            try { (window as any).iframemanager().scan(); } catch(e) {}
            document.dispatchEvent(new CustomEvent('consent:changed', { detail: { service: 'vimeo', accepted: true }}));
          },
          onReject: () => {
            (window as any).iframemanager().rejectService('vimeo');
            try { (window as any).iframemanager().scan(); } catch(e) {}
            document.dispatchEvent(new CustomEvent('consent:changed', { detail: { service: 'vimeo', accepted: false }}));
          },
        },
      },
    },

    ads: {},
  },

  language: {
    default: 'nl',
    translations: {
      nl: {
        consentModal: {
          label: "Cookie Toestemming",
          title: "Hallo bezoeker, het is cookie tijd!",
          description: "Onze website gebruikt essentiële cookies om de juiste werking te garanderen en tracking cookies om te begrijpen hoe je ermee omgaat. De laatste worden alleen ingesteld na toestemming.",
          acceptAllBtn: "Alles accepteren",
          closeIconLabel: "Alles weigeren en sluiten",
          acceptNecessaryBtn: "Alles weigeren",
          showPreferencesBtn: "Voorkeuren beheren",
          footer: "<a href=\"#privacy\">Privacybeleid</a><a href=\"#terms\">Algemene voorwaarden</a>"
        },
        preferencesModal: {
          title: "Toestemming voorkeuren centrum",
          acceptAllBtn: "Alles accepteren",
          acceptNecessaryBtn: "Alles weigeren",
          savePreferencesBtn: "Voorkeuren opslaan",
          closeIconLabel: "Modal sluiten",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Iemand zei ... cookies?",
              description: "We gebruiken cookies om je ervaring op onze website te verbeteren en om te begrijpen hoe je onze website gebruikt."
            },
            {
              title: "Strikt noodzakelijke cookies <span class=\"pm__badge\">Altijd ingeschakeld</span>",
              description: "Deze cookies zijn noodzakelijk voor de werking van de website en kunnen niet worden uitgeschakeld in onze systemen.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytische cookies",
              description: "Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken door informatie anoniem te verzamelen en te rapporteren.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Cookie",
                  Service: "Service",
                  description: "Beschrijving"
                },
                body: [
                  {
                    name: "im_youtube",
                    description: "Gebruikt om te onthouden of de gebruiker de youtube service heeft geaccepteerd.",
                    Service: "Youtube Embed"
                  },
                  {
                    name: "im_vimeo",
                    description: "Gebruikt om te onthouden of de gebruiker de vimeo service heeft geaccepteerd.",
                    Service: "Vimeo Embed"
                  }
                ]
              }
            },
            {
              title: "Advertentie cookies",
              description: "Deze cookies worden gebruikt om advertenties te tonen die relevant zijn voor jou en je interesses.",
              linkedCategory: "ads"
            },
            {
              title: "Meer informatie",
              description: "Voor vragen over ons cookiebeleid en jouw keuzes, <a class=\"cc__link\" href=\"#contact\">neem contact met ons op</a>."
            }
          ]
        }
      },
      en: {
        consentModal: {
          label: "Cookie Consent",
          title: "Hello traveller, it's cookie time!",
          description: "Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
          acceptAllBtn: "Accept all",
          closeIconLabel: "Reject all and close",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: "<a href=\"#privacy\">Privacy Policy</a><a href=\"#terms\">Terms and conditions</a>"
        },
        preferencesModal: {
          title: "Consent preferences center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Somebody said ... cookies?",
              description: "We use cookies to enhance your experience on our website and to understand how you use our website."
            },
            {
              title: "Strictly necessary cookies <span class=\"pm__badge\">Always enabled</span>",
              description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytics cookies",
              description: "These cookies help us understand how visitors use the website by collecting and reporting information anonymously.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Cookie",
                  Service: "Service",
                  description: "Description"
                },
                body: [
                  {
                    name: "im_youtube",
                    description: "Used to remember if the user accepted the youtube service.",
                    Service: "Youtube Embed"
                  },
                  {
                    name: "im_vimeo",
                    description: "Used to remember if the user accepted the vimeo service.",
                    Service: "Vimeo Embed"
                  }
                ]
              }
            },
            {
              title: "Advertisement cookies",
              description: "These cookies are used to show advertisements that are relevant to you and your interests.",
              linkedCategory: "ads"
            },
            {
              title: "More information",
              description: "For any queries in relation to our policy on cookies and your choices, please <a class=\"cc__link\" href=\"#contact\">contact us</a>."
            }
          ]
        }
      }
    }
  }
};

