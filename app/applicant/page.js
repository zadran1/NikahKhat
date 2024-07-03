import Link from "next/link";
import "primeicons/primeicons.css";

export default function Applicant() {
  return (
    <div className="flex-1 p-2 bg-gray-100  border rounded-lg font-sans m-2">
      {/* icon */}
      <div class="flex justify-end items-center">
        {" "}
        <p className="text-purple-500">پاتې</p>
        <p className="text-gray-500 m-3">xw49lkp3</p>
        <p className="mr-3">-غوښتنلیک</p>
        <Link href={"/application"}>
          <i className="pi pi-arrow-right text-black ml-2"></i>
        </Link>
      </div>
      {/* three divs for applicant information */}
      <div class="flex mt-4">
        <div class="w-1/3">
          <h2 class="text font-bold text-right ml-4">د نکاه معلومات</h2>
          {/* div contentes */}
          <div>
            <table class="w-full text-right">
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">قصر لندن</td>
                  <td class="px-4 py-2">ځای</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">ولایت</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center"> افغانۍ۳۵۰۰۰۰</td>
                  <td class="px-4 py-2">مهر</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">ګلبدن</td>
                  <td class="px-4 py-2">لمړی شاهد</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">اشرف خان</td>
                  <td class="px-4 py-2">دویم شاه</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">۱۴۰۱/۱/۱</td>
                  <td class="px-4 py-2">نیټه</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* code for photos */}
          <div class="flex">
            <div class="w-1/2  p-4 mr-4">
              <h2 class="text font-bold mr-3">دویم شاهد</h2>
              <i className="pi pi-image text-black text-5xl m-1"></i>
              <div>
                <i className="pi pi-download text-black ml-3"></i>
              </div>
            </div>
            <div class="w-1/2  p-4 mr-4 items-center">
              <h2 class="text font-bold mr-1">لمړی شاهد</h2>
              <i className="pi pi-image text-black text-5xl m-1 "></i>
              <div>
                <i className="pi pi-download text-black ml-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 border-l-2 border-gray-500 ">
          <h2 class="text font-bold text-right">زوج</h2>
          {/* div contents */}
          <div>
            <table class="w-full text-right">
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">احمد</td>
                  <td class="px-4 py-2">نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">اکبري</td>
                  <td class="px-4 py-2">تخلص</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">محمد اکبر</td>
                  <td class="px-4 py-2">د پلار نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">غلام حضرت</td>
                  <td class="px-4 py-2">د نیکه نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">ولایت</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">۱۳۷۵/۱/۱</td>
                  <td class="px-4 py-2">د زیږیدو نیټه</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* code for photos */}
          <div class="flex">
            <div class="w-1/2  p-4 mr-4">
              <h2 class="text font-bold mr-3 ml-2">تذکره</h2>
              <i className="pi pi-id-card text-black text-5xl m-1"></i>
              <div>
                <i className="pi pi-download text-black ml-4"></i>
              </div>
            </div>
            <div class="w-1/2  p-4 mr-4 items-center">
              <h2 class="text font-bold ml-3">عکس</h2>
              <i className="pi pi-image text-black text-5xl m-1 "></i>
              <div>
                <i className="pi pi-download text-black ml-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3  text-right border-l-2 border-gray-500">
          <h2 class="text font-bold">زوجه</h2>
          {/* div for contents */}
          <div>
            <table class="w-full text-right">
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">فاطمه</td>
                  <td class="px-4 py-2">نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">امیري</td>
                  <td class="px-4 py-2">تخلص</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">امیر محمد</td>
                  <td class="px-4 py-2">د پلار نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">جلال شاه</td>
                  <td class="px-4 py-2">د نیکه نوم</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">کابل</td>
                  <td class="px-4 py-2">ولایت</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">۱۳۸۰/۱/۱</td>
                  <td class="px-4 py-2">د زیږیدو نیټه</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* code for photos */}
          <div class="flex">
            <div class="w-1/2  p-4 mr-4">
              <h2 class="text font-bold mr-3">تذکره</h2>
              <i className="pi pi-id-card text-black text-5xl m-1"></i>
              <div>
                <i className="pi pi-download text-black mr-4"></i>
              </div>
            </div>
            <div class="w-1/2  p-4 mr-4 items-center">
              <h2 class="text font-bold mr-3">عکس</h2>
              <i className="pi pi-image text-black text-5xl m-1 "></i>
              <div>
                <i className="pi pi-download text-black mr-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <button class="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 mb-4">
          <i className="pi pi-arrow-left text-white pr-2"></i>د پروسې شروع کول
        </button>

        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 mb-4 ml-3">
          <i className="pi pi-ban text-white pr-2"></i> ردول
        </button>
      </div>
    </div>
  );
}
