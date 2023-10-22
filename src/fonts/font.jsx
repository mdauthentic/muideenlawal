import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";

export const ibmSans = IBM_Plex_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
    variable: "--ibm-font",
});
export const clashGrotesk = localFont({
    src: "ClashGrotesk-Variable.woff2",
    variable: "--clash-grotesk",
});
