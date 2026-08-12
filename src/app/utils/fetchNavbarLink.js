const mockLinksData = [
    {
        id: "1",
        url: ["หน้าหลัก", "/"]
    },
    {
        id: "2",
        url: ["คำถามที่พบบ่อย", "/faqs"]
    },
    {
        id: "3",
        url: ["วิธีการใช้งาน", "/manual"]
    },
    {
        id: "4",
        url: ["ข้อมูลโดยสรุป", "/dashboard"]
    },
    {
        id: "5",
        url: ["เกี่ยวกับเรา", "/about us"]
    },
    {
        id: "6",
        url: ["เข้าสู่ระบบ", "/sign in"]
    },
    {
        id: "7",
        url: ["ผู้ดูแลระบบ", "/admin"]
    }
];

export async function fetchNavbarLink() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockLinksData;
}