import i18n from "i18next";

export class Hello {
    public sayHello(): string {
        return i18n.t("public:hello");
    }
}
