import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend, { ChainedBackendOptions } from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import FsBackend from 'i18next-fs-backend';
import path from "path";


await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<ChainedBackendOptions>({
        backend: {
            backends: [
                HttpBackend,
                FsBackend,
            ],
            backendOptions: [
                // HttpBackend options
                {},
                // FsBackend options
                // This is used during test because no web server is running
                {
                    loadPath: path.join(__dirname, "/public/locales/{{lng}}/{{ns}}.json"),
                }
            ]
        },
        load: "languageOnly", // Search only for the language en instead of en-US
        debug: true,
        fallbackLng: "en",
        ns: [
            "public",
        ],
        defaultNS: "public",
        returnNull: false,
        interpolation: {
            escapeValue: false,
        },
    }).then(
        () => {
            console.log("i18n initialized");
        },
        (error) => {
            console.error("i18n failed to initialize", error);
        }
    );

export default i18n;
