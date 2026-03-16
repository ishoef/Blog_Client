import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function HomePage() {
  const { data } = await userService.getSession();

  console.log("User", data.user);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant={"outline"} className="h-14 px-6 cursor-pointer text-2xl">
        click here
      </Button>
    </div>
  );
}
