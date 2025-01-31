import { notFound } from "next/navigation";

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    if (slug !== 'ok') {
        return notFound();
    }
    return <div>Demo of {slug}</div>
};
export default Page