import lang from "../assets/i18n/de_DE.json";

export function translateInstant(tag: string, def?: string) {
    if ((lang as any)[tag] === undefined) {
        return def === undefined ? "Not Found" : def;
    }
    return (lang as any)[tag];
}

export default translateInstant;

