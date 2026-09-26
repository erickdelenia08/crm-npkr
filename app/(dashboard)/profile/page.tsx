import { redirect } from "next/navigation";
import { getCurrentUserProfile } from "@/actions/profile.action";
import { ProfileView } from "@/components/profile/profile-view";

export default async function ProfilePage() {
    const profile = await getCurrentUserProfile();

    if (!profile) {
        redirect("/login");
    }

    return (
        <ProfileView initialProfile={profile} />
    );
}