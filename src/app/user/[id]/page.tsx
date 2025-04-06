import Link from "next/link";
import { cn } from "@/lib/utils";
import useHttp from "@/hooks/http.hook";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default async function UserCard({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const { getUsers } = useHttp();
  const { usersData } = await getUsers(id);

  type CardProps = React.ComponentProps<typeof Card>;

  function CardUser({ className, ...props }: CardProps) {
    if (!Array.isArray(usersData)) {
      const name = usersData.name;
      const description = [
        usersData.email,
        `${usersData.address.zipcode}, ${usersData.address.city},
        ${usersData.address.street}`,
        usersData.phone,
        usersData.website,
        usersData.company.name,
      ];

      return (
        <Card className={cn(className)} {...props}>
          <CardHeader>
            <CardTitle className="text-center text-4xl">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-around gap-5">
              <div className="flex gap-2 min-w-md bg-white rounded-xl border py-6 shadow-sm p-5 hover:bg-gray-700/20">
                <div className="space-y-1">
                  <CardDescription>
                    {description.map((item, index) => {
                      return (
                        <div className="flex gap-5" key={index}>
                          <span className="h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <p className="text-xl text-muted-foreground">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardContent>
          <Link href={`/`} className="hover:text-red-700 m-auto">
            Вернуться на главную страницу
          </Link>
        </Card>
      );
    }
  }

  return (
    <>
      <div className="gap-5">{CardUser({})}</div>
    </>
  );
}
