import Link from "next/link";
import { cn } from "@/lib/utils";
import useHttp from "@/hooks/http.hook";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function HomePage() {
  const { getUsers } = useHttp();
  const { usersData } = await getUsers();

  type CardProps = React.ComponentProps<typeof Card>;

  function CardUser({ className, ...props }: CardProps) {
    if (Array.isArray(usersData)) {
      if (usersData.length > 0) {
        return (
          <Card className={cn(className)} {...props}>
            <CardHeader>
              <CardTitle className="text-center text-4xl ">
                Список пользователей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-around gap-5">
                {usersData.map((user) => (
                  <div
                    key={user.id}
                    className="flex gap-2 w-xs bg-white rounded-xl border py-6 shadow-sm p-3 hover:bg-gray-700/20"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-2xl font-medium leading-none mb-3">
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.company.name}
                      </p>
                      <Link
                        href={`/user/${user.id}`}
                        className="hover:text-red-700"
                      >
                        Прочитать подробнеe...
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      }
    } else {
      <p>"Пользователей нету"</p>;
    }
  }

  return <>{CardUser({})}</>;
}
