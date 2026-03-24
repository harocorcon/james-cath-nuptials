import InviteClient from "@/components/InviteClient"

export default async function InvitePage({ params }: any) {

    const { name } = await params
    return (
        <InviteClient name={decodeURIComponent(name)} />
    )
}