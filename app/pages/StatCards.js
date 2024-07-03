import React from "react";
import { Card } from "primereact/card";
function StatCards() {
  return (
    <div>
      <div class="flex justify-center items-start space-x-4 my-8 font-sans">
        <div class="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-right">
          <div>
            <h1 className="font-bold">پاتې</h1>
          </div>
          <div className="font-bold">
            ۱۲ <i className="pi pi-file-word text-blue-500 py-2 text-4xl"></i>
          </div>
          <p>پاتې غوښتنلیکونه</p>
          <div class="border-b-2 border-black my-4"></div>
          <div>
            <table class="w-full text-right">
              <thead>
                <tr className="text-right text-gray-500">
                  <th class="px-4 py-2 text-right font-bold">د سپارلو نیټه</th>
                  <th class="px-4 py-2 text-center font-bold">ولایت</th>
                  <th class="px-4 py-2 text-right font-bold">غوښتنلیکونه</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-right ">
          <div class="flex justify-between items-center">
            <select>
              <option>دغه میاشت</option>
            </select>
            <h1 class="font-bold text-right">ختمیدو ته نږدې</h1>
          </div>
          <div className="font-bold">
            ۲ <i className="pi pi-file-pdf text-blue-500 py-2 text-4xl"></i>
          </div>
          <p>ختمیدونکي غوښتنلیکونه</p>
          <div class="border-b-2 border-black my-4"></div>
          {/* table */}
          <div>
            <table class="w-full text-right">
              <thead>
                <tr className="text-right text-gray-500">
                  <th class="px-4 py-2 text-right font-bold">ختمیدو نیټه</th>
                  <th class="px-4 py-2 text-center font-bold">ولایت</th>
                  <th class="px-4 py-2 text-right font-bold">غوښتونکی</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2">۱۴۰۲/۱/۱</td>
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">احمد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCards;
