// Used for types, eventually we should have only the /vitest import from jest-dom
import "@testing-library/jest-dom/vitest";
import "../i18n.ts";

// The warning is something that was always happening but not warned until now (the warning starts to be visible from vitest 2.1.5)
// The Http backend fails during the test because there is no web server running
// So the problem was real, but now visible.
// Two approaches for me to solve this:
// 1) Leave the chained backend warning (HttpBackend will fail, then FsBackend will succeed) but reuse the main i18n config
// 2) Initialize here i18n with the FsBackend only (duplicate i18n config)
// About Vitest and maybe the happy-dom fetch change, this warning should be visible or not?

// await i18n.use(Backend).init({
//     backend: {
//
//         loadPath: path.join(__dirname, "../public/locales/{{lng}}/{{ns}}.json")
//
//     },
//     load: "languageOnly", // Search only for the language en instead of en-US
//     debug: true,
//     fallbackLng: "en",
//     ns: [
//         "public",
//     ],
//     defaultNS: "public",
//     returnNull: false,
//     interpolation: {
//         escapeValue: false,
//     }
// }).then(
//     () => {
//         console.log("i18n initialized");
//     },
//     (error) => {
//         console.error("i18n failed to initialize", error);
//     }
// );

