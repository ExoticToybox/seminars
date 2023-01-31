import { ReactElement, memo } from 'react';

import { formatDate, toUtcDate } from '@/functions/datetime/date-util';
import { nonNullable } from '@/functions/language/language-util';
import { User } from '@/graphql/generated';

export type Props = {
  users: (Omit<User, 'password'> | null)[];
};
export const Presentation = memo(
  ({ users }: Props): ReactElement => (
    // cf. https://tailwind-elements.com/docs/standard/components/tables/
    <main>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      氏名
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      番号
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      生年月日
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      メールアドレス
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter(nonNullable).map((user, index) => {
                    const backgroundColer =
                      index % 2 === 0 ? 'bg-gray-100' : 'bg-white';
                    return (
                      <tr
                        className={`${backgroundColer} border-b`}
                        key={user.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {formatDate(toUtcDate(user.birthday))}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
);
