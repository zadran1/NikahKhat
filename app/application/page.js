import Link from "next/link";
import "primeicons/primeicons.css";

export default function Application() {
  return (
    <div className="flex-1 p-2 bg-gray-100 m-2 border rounded-lg">
      {/* heading */}
      <h4 className="text-right font-sans font-bold">د نکاه خط غوښتنلیکونه</h4>
      {/* select option */}
      <div class="flex items-right font-sans p-2">
        <div class="flex items-center">
          <div class="relative flex-1">
            <select class="w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500">
              <option>ټول</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ml-3">
              <i className="pi pi-sliders-h text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* search bar */}
        <div class="flex items-center w-full bg-white border border-gray-300 rounded-md ml-2">
          <div class="flex items-center justify-center px-4">
            <i class="pi pi-search text-gray-400"></i>
          </div>
          <input
            type="text"
            class="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <div class="px-4 text-gray-400">لټون</div>
        </div>
      </div>

      {/* table */}
      <div className="flex-1 p-2 bg-gray-100 m-2 border rounded-lg font-sans">
        <div>
          <table class="w-full text-right">
            <thead>
              <tr className="text-right text-black">
                <th class="px-4 py-2 text-center font-bold">حالت</th>
                <th class="px-4 py-2 text-center font-bold">د سپارلو نیټه</th>
                <th class="px-4 py-2 text-right font-bold">ولایت</th>
                <th class="px-4 py-2 text-right font-bold">غوښتونکی</th>
                <th class="px-4 py-2 text-right font-bold">د غوښتنلیک ای ډي</th>
                <th class="px-4 py-2 text-right font-bold">
                  <input type="checkbox"></input>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2 font-bold text-purple-500 rounded-lg text-center">
                  <Link href={"/applicant"}> پاتې</Link>
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>

              <tr class="border-b">
                <td class="px-4 py-2 text-red-500 font-bold rounded-lg text-center">
                  رد شوی
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 text-green-500 font-bold rounded-lg text-center">
                  بشپړ شوی
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 text-blue-500 font-bold rounded-lg text-center">
                  په کار کې
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 text-red-500 font-bold rounded-lg text-center">
                  رد شوی
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 text-green-500 rounded-lg text-center font-bold">
                  بشپړ شوی
                </td>
                <td class="px-4 py-2 text-center">۱۴۰۲/۱/۱</td>
                <td class="px-4 py-2">کابل</td>
                <td class="px-4 py-2">احمد</td>
                <td class="px-4 py-2">xw49lkp3</td>
                <td class="px-4 py-2">
                  {" "}
                  <input type="checkbox"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*under the table area  */}
      <div className="flex-1 p-2 bg-gray-100 m-2 border rounded-lg font-sans">
        <div class="flex">
          {/* left div for direct coming to specific page */}
          <div class="w-1/2">
            <select className="p-2 bg-gray-100 border-2 border-gray-500 rounded-lg">
              <option>۱۰</option>
              <option>۹</option>
              <option>۸</option>
              <option>۷</option>
              <option>۶</option>
              <option>۵</option>
              <option>۴</option>
              <option>۳</option>
              <option>۲</option>
              <option>۱</option>
            </select>
            <p className="">غوښتنلیکونه په یوه صفحه کې</p>
          </div>

          {/* right div for coming to pages */}
          <div class="w-1/2">
            <h2 class="text-lg font-bold">Right Div</h2>
            <p>This is the content for the right div.</p>
          </div>
        </div>
      </div>
      {/* main div closing */}
    </div>
  );
}
