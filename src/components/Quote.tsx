import { QuoteIcon } from 'lucide-react';

export default function Quote() {
    return (
        <section className="py-20 text-foreground text-sm font-funnelSans">
            <figure className="max-w-lg mx-auto text-center px-4">
                <QuoteIcon strokeWidth={1} className="mx-auto text-foreground" />
                <blockquote>
                    <p className="text-base italic text-primary">You have to do your own growing no matter how tall your grandfather was.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-primary">
                        <cite className="pe-3 font-medium">Abraham Lincoln</cite>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}